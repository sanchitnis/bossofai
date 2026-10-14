import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, CheckCircle, RefreshCw, AlertTriangle, Monitor, Sparkles } from 'lucide-react';

export default function ExerciseLauncher({ url, title, instructions }) {
  const [mode, setMode] = useState('presentation'); // 'presentation' or 'exercise'
  const [popupBlocked, setPopupBlocked] = useState(false);
  const childWindowRef = useRef(null);
  const pollIntervalRef = useRef(null);

  const launchExercise = () => {
    setPopupBlocked(false);
    
    // Calculate right half of screen coordinates
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const width = Math.floor(screenWidth / 2);
    const height = screenHeight;
    const left = width;
    const top = 0;

    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`;
    
    try {
      const childWin = window.open(url, '_blank', windowFeatures);
      
      if (!childWin || childWin.closed || typeof childWin.closed === 'undefined') {
        setPopupBlocked(true);
      } else {
        childWindowRef.current = childWin;
        setMode('exercise');
        
        // Start polling to detect manual closure
        startPolling(childWin);
      }
    } catch (e) {
      console.error("Popup window launch failed:", e);
      setPopupBlocked(true);
    }
  };

  const startPolling = (childWin) => {
    if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    
    pollIntervalRef.current = setInterval(() => {
      if (childWin.closed) {
        finishExercise();
      }
    }, 1000);
  };

  const finishExercise = () => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = null;
    }
    
    if (childWindowRef.current && !childWindowRef.current.closed) {
      childWindowRef.current.close();
    }
    
    childWindowRef.current = null;
    setMode('presentation');
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
      if (childWindowRef.current && !childWindowRef.current.closed) {
        childWindowRef.current.close();
      }
    };
  }, []);

  return (
    <div className="exercise-launcher border border-slate-800/80 bg-slate-900/20 backdrop-blur rounded-2xl p-6 my-6 shadow-2xl transition-all duration-300">
      
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Sparkles size={20} className="animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">{title}</h3>
            <p className="text-xs text-slate-400">Interactive Practice & Simulation Session</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-mono font-extrabold tracking-wider border ${
            mode === 'exercise' 
              ? 'bg-amber-500/10 text-amber-400 border-amber-500/35 animate-pulse' 
              : 'bg-sky-500/10 text-sky-400 border-sky-500/20'
          }`}>
            {mode === 'exercise' ? 'Exercise Active' : 'Ready to Launch'}
          </span>
        </div>
      </div>

      {/* Main UI Switcher */}
      {mode === 'presentation' ? (
        <div className="space-y-5 animate-fade-up">
          {/* Step 1: Instruct Snap Layout */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4.5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
              <Monitor size={14} />
              <span>STEP 1: PREPARE YOUR SCREEN LAYOUT</span>
            </div>
            <p className="text-xs text-slate-350 leading-relaxed">
              Use your Operating System shortcut to snap this presentation window to the <strong>left half</strong> of your screen:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/40 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400">Windows Shortcut</span>
                <kbd className="px-2 py-1 bg-slate-950 text-sky-400 font-mono text-[10px] rounded border border-slate-800 font-bold font-sans">Win + ➔</kbd>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/40 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400">macOS Shortcut</span>
                <kbd className="px-2 py-1 bg-slate-950 text-sky-400 font-mono text-[10px] rounded border border-slate-800 font-bold font-sans">⌥ + ⌘ + ➔</kbd>
              </div>
            </div>
          </div>

          {/* Step 2: Launcher & Instructions */}
          <div className="space-y-4">
            <div className="text-xs text-slate-350 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/20">
              <strong className="text-slate-100 block mb-1">🎯 Goal & Instructions:</strong>
              {instructions}
            </div>

            <button
              onClick={launchExercise}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-bold transition-all duration-300 shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Launch Practice Exercise</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-fade-up text-center py-4">
          <div className="max-w-md mx-auto space-y-3">
            <p className="text-sm text-slate-350">
              The exercise window is now running on the <strong>right half</strong> of your screen.
            </p>
            <p className="text-xs text-slate-450 italic">
              Follow the instructions in the external tool to complete the task.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 pt-2">
            <button
              onClick={finishExercise}
              className="py-3 px-8 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle size={16} />
              <span>Finish & Return to Presentation</span>
            </button>
            <button
              onClick={launchExercise}
              className="text-xs text-slate-450 hover:text-slate-300 transition-colors flex items-center gap-1.5"
            >
              <RefreshCw size={12} />
              <span>Re-open Window</span>
            </button>
          </div>
        </div>
      )}

      {/* Pop-up Blocker Error Alert */}
      {popupBlocked && (
        <div className="mt-4 p-4 bg-rose-500/10 border border-rose-500/25 rounded-xl flex gap-3 text-left">
          <AlertTriangle className="text-rose-400 shrink-0" size={20} />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-rose-300">Popup Blocked by Browser</h4>
            <p className="text-[11px] text-slate-350 leading-relaxed">
              We couldn't open the exercise page automatically. Click the link below to open it manually:
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:underline font-semibold pt-1"
            >
              <span>Open Link Manually</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      )}

      {/* Multi-monitor Note */}
      <div className="mt-4 pt-3.5 border-t border-slate-800/60 flex items-start gap-2 text-[10px] text-slate-400 leading-normal">
        <Monitor size={12} className="shrink-0 mt-0.5" />
        <span>
          <strong>Note:</strong> The external workspace window opens on your primary monitor. If you are using a multi-monitor configuration, drag the child browser window to your secondary display.
        </span>
      </div>
    </div>
  );
}
