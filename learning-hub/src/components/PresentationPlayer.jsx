import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Play, Pause, 
  RotateCcw, Sun, Moon, Maximize2 
} from 'lucide-react';

export default function PresentationPlayer({ children, onClose, title, author }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const containerRef = useRef(null);

  // Group children into slides based on <hr /> element
  const slides = useMemo(() => {
    const list = React.Children.toArray(children);
    const grouped = [];
    let current = [];

    list.forEach((child) => {
      // Docusaurus MDX compiles '---' into either MDXEl('hr') or standard 'hr' type
      if (child.type === 'hr' || (child.props && child.props.mdxType === 'hr')) {
        if (current.length > 0) {
          grouped.push(current);
          current = [];
        }
      } else {
        current.push(child);
      }
    });

    if (current.length > 0) {
      grouped.push(current);
    }
    return grouped;
  }, [children]);

  // Clock Update Effect (24h format with 3-letter timezone)
  useEffect(() => {
    const tick = () => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes} IST`);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length, onClose]);

  // Fullscreen support
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error('Error enabling fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Slide Timer
  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const progressPercent = slides.length > 0 ? ((currentSlide + 1) / slides.length) * 100 : 0;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] bg-[#0b1329] text-slate-100 flex flex-col font-sans select-none overflow-hidden">
      {/* Top Navbar */}
      <header className="h-16 px-6 border-b border-slate-800/80 flex items-center justify-between bg-[#0e1731] shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="Exit Presentation"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="h-4 w-px bg-slate-800" />
          <div>
            <h1 className="text-sm font-semibold text-slate-200 truncate max-w-[450px]">
              {title || 'Interactive Presentation'}
            </h1>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Clock */}
          <div className="text-xs font-mono font-bold text-slate-400 bg-[#090f23] px-3 py-1.5 rounded-lg border border-slate-800/80">
            {currentTime}
          </div>

          {/* Timer */}
          <div className="flex items-center gap-2 bg-[#090f23] px-3 py-1.5 rounded-lg border border-slate-800/80 font-mono text-xs text-sky-400">
            <span>⏱️ {formatTime(secondsElapsed)}</span>
            <button 
              onClick={() => setTimerRunning(!timerRunning)} 
              className="text-[10px] uppercase text-slate-500 hover:text-sky-400 cursor-pointer"
            >
              {timerRunning ? 'Pause' : 'Play'}
            </button>
            <button 
              onClick={() => setSecondsElapsed(0)} 
              className="text-[10px] uppercase text-slate-500 hover:text-rose-400 cursor-pointer"
            >
              Reset
            </button>
          </div>

          <button 
            onClick={toggleFullscreen} 
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Slide Canvas Area */}
      <main className="flex-1 relative flex items-center justify-center p-8 bg-[#070b19] overflow-auto">
        <div className="w-full max-w-5xl aspect-[16/9] bg-[#0e1731] border border-slate-800/60 rounded-2xl p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300">
          {/* Slide Content wrapper */}
          <div className="flex-1 overflow-y-auto text-left leading-relaxed slide-content-container text-slate-200 pr-1">
            {slides[currentSlide] || <div className="text-center text-slate-500 py-10">No slide content</div>}
          </div>
        </div>
      </main>

      {/* Bottom Control Bar */}
      <footer className="h-16 px-6 border-t border-slate-800/80 flex items-center justify-between bg-[#0e1731] shrink-0">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-xs font-mono text-slate-400">
            Slide {currentSlide + 1} of {slides.length}
          </span>
          <button 
            onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 mx-8 h-2 bg-slate-950 rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
          {author ? `Presenter: ${author}` : 'Boss of AI - Educate to Enterprise'}
        </div>
      </footer>
    </div>
  );
}
