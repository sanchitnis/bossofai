import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, BarChart2, GraduationCap, Sparkles,
  CheckCircle2, XCircle
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// 1. Metric Component
export function Metric({ label, value, trend }) {
  return (
    <div className="p-4 border border-slate-850 rounded-xl bg-slate-900/60 my-4 text-left">
      <div className="text-[10px] uppercase text-slate-500 font-mono">{label}</div>
      <div className="text-2xl font-bold text-slate-100 flex items-center justify-between">
        <span>{value}</span>
        {trend && <span className="text-xs text-emerald-400 font-semibold">{trend}</span>}
      </div>
    </div>
  );
}

// 2. Dynamic Chart Component
export function Chart({ type, dataset, x, y }) {
  const datasets = {
    'student-data': [
      { year: '2021', count: 12000 },
      { year: '2022', count: 18000 },
      { year: '2023', count: 25000 },
      { year: '2024', count: 35000 },
      { year: '2025', count: 45000 }
    ],
    'enrollment-data': [
      { year: '2020', students: 10000 },
      { year: '2021', students: 15000 },
      { year: '2022', students: 22000 },
      { year: '2023', students: 31000 },
      { year: '2024', students: 45000 }
    ],
    'ai-adoption': [
      { year: '2023', adoption: 15 },
      { year: '2024', adoption: 40 },
      { year: '2025', adoption: 90 }
    ]
  };

  const data = datasets[dataset] || [];

  return (
    <div className="w-full h-[240px] mt-4 p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl relative text-left">
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
        Dynamic {type} Chart &bull; Dataset: {dataset}
      </div>
      <ResponsiveContainer width="100%" height="80%">
        {type === 'bar' ? (
          <BarChart data={data}>
            <XAxis dataKey={x} stroke="#64748b" fontSize={11} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
            <Bar dataKey={y} fill="#E5A823" radius={[4, 4, 0, 0]} />
          </BarChart>
        ) : (
          <LineChart data={data}>
            <XAxis dataKey={x} stroke="#64748b" fontSize={11} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
            <Line type="monotone" dataKey={y} stroke="#38bdf8" strokeWidth={3} dot={{ r: 4, fill: '#38bdf8' }} activeDot={{ r: 6 }} />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

// 3. ROI Widget
export function ROIWidget() {
  const [facultyCount, setFacultyCount] = useState(100);
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(4);
  const hourlyRate = 50;
  
  const weeklySavings = facultyCount * hoursSavedPerWeek * hourlyRate;
  const annualSavings = weeklySavings * 40;
  
  return (
    <div className="p-5 border border-slate-800 rounded-xl bg-slate-900/60 my-4 text-left">
      <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-1.5">
        <TrendingUp className="h-4 w-4" /> ROI Calculator: Time & Cost Savings
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-slate-400 block mb-1">Faculty Count: {facultyCount}</label>
          <input 
            type="range" 
            min="10" 
            max="500" 
            value={facultyCount} 
            onChange={(e) => setFacultyCount(Number(e.target.value))}
            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400 block mb-1">Weekly Hours Saved: {hoursSavedPerWeek} hrs</label>
          <input 
            type="range" 
            min="1" 
            max="10" 
            value={hoursSavedPerWeek} 
            onChange={(e) => setHoursSavedPerWeek(Number(e.target.value))}
            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/60 text-center">
        <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/40">
          <div className="text-[10px] uppercase text-slate-500 font-mono">Weekly Savings</div>
          <div className="text-lg font-bold text-slate-100">${weeklySavings.toLocaleString()}</div>
        </div>
        <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/40">
          <div className="text-[10px] uppercase text-slate-500 font-mono">Annual Savings</div>
          <div className="text-lg font-bold text-sky-400">${annualSavings.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

// 4. Enrollment Calculator
export function EnrollmentCalculator() {
  const [initialStudents, setInitialStudents] = useState(1000);
  const [growthRate, setGrowthRate] = useState(5);
  
  const years = [1, 2, 3, 4, 5];
  const data = years.map(y => {
    const value = Math.round(initialStudents * Math.pow(1 + growthRate/100, y));
    return { year: `Year ${y}`, students: value };
  });

  return (
    <div className="p-5 border border-slate-800 rounded-xl bg-slate-900/60 my-4 text-left">
      <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-1.5">
        <BarChart2 className="h-4 w-4" /> Enrollment Growth Predictor
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-slate-400 block mb-1">Starting Enrollment: {initialStudents}</label>
          <input 
            type="range" 
            min="100" 
            max="10000" 
            value={initialStudents} 
            onChange={(e) => setInitialStudents(Number(e.target.value))}
            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400 block mb-1">Annual Growth Rate: {growthRate}%</label>
          <input 
            type="range" 
            min="-10" 
            max="30" 
            value={growthRate} 
            onChange={(e) => setGrowthRate(Number(e.target.value))}
            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
          />
        </div>
      </div>
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={10} />
            <YAxis stroke="#9ca3af" fontSize={10} />
            <Tooltip contentStyle={{ backgroundColor: '#0b1726', borderColor: '#1f2937' }} labelStyle={{ color: '#9ca3af' }} />
            <Line type="monotone" dataKey="students" stroke="#E5A823" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// 5. Ask AI Widget
export function AskAI() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleAsk = () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse('');
    setTimeout(() => {
      setLoading(false);
      if (query.toLowerCase().includes('obi') || query.toLowerCase().includes('outcome')) {
        setResponse("Outcome-Based Education (OBE) defines specific, measurable competencies that students must demonstrate upon completion. AI-Era Education aligns OBE by providing personalized tools to track and accelerate attainment.");
      } else if (query.toLowerCase().includes('portfolio')) {
        setResponse("Portfolio-First learning shift guarantees student showcases demonstrable capabilities (e.g. code repositories, written documents, or physical AI products) instead of simple exam-taking grades.");
      } else {
        setResponse("AI in higher education enables personalized learning paths, automates routine assessments, and allows faculty to pivot from grading administrators into collaborative project coaches.");
      }
    }, 1000);
  };
  
  return (
    <div className="p-5 border border-slate-800 rounded-xl bg-slate-900/60 my-4 text-left">
      <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-1.5">
        <GraduationCap className="h-4 w-4" /> Ask AI Tutor Assistant
      </h4>
      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="Ask a question (e.g., 'What is OBE?' or 'Portfolio pillars?')..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          className="flex-1 bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400"
        />
        <button 
          onClick={handleAsk}
          className="px-4 py-1.5 rounded-lg bg-sky-400 hover:bg-sky-500 text-slate-950 font-semibold text-xs transition-colors shrink-0"
        >
          {loading ? 'Thinking...' : 'Submit'}
        </button>
      </div>
      {response && (
        <div className="mt-3 p-3 bg-slate-950/40 border border-slate-800/40 rounded-lg text-xs text-slate-300 leading-relaxed">
          <strong>AI Tutor:</strong> {response}
        </div>
      )}
    </div>
  );
}

// 6. Simulation Engine
export function SimulationEngine() {
  const [training, setTraining] = useState(50);
  const [projects, setProjects] = useState(5);
  const [tutorAdoption, setTutorAdoption] = useState(30);

  const calculateAchievement = () => {
    return Math.min(100, Math.round((training * 0.3) + (projects * 5) + (tutorAdoption * 0.45)));
  };

  const score = calculateAchievement();
  const scoreColor = score >= 80 ? "text-emerald-400" : score >= 50 ? "text-sky-400" : "text-rose-400";

  return (
    <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/60 my-6 text-left">
      <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-4 flex items-center gap-2">
        <TrendingUp className="h-4 w-4" /> OBE Skill Achievement Simulator
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Faculty Training Completion</span>
            <span className="font-mono text-sky-400">{training}%</span>
          </div>
          <input 
            type="range" min="0" max="100" value={training} 
            onChange={(e) => setTraining(Number(e.target.value))}
            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400" 
          />
        </div>
        
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Industry Portfolio Projects (per student)</span>
            <span className="font-mono text-sky-400">{projects} projects</span>
          </div>
          <input 
            type="range" min="0" max="10" value={projects} 
            onChange={(e) => setProjects(Number(e.target.value))}
            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400" 
          />
        </div>
        
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>AI Tutor Adoption Rate</span>
            <span className="font-mono text-sky-400">{tutorAdoption}%</span>
          </div>
          <input 
            type="range" min="0" max="100" value={tutorAdoption} 
            onChange={(e) => setTutorAdoption(Number(e.target.value))}
            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400" 
          />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-500 font-medium">Estimated Outcome Competency</div>
          <div className={`text-3xl font-extrabold ${scoreColor}`}>{score}%</div>
        </div>
        <div className="text-[10px] text-slate-400 max-w-[200px] text-right">
          Target outcome is &gt;85% for NBA/NAAC validation grade.
        </div>
      </div>
    </div>
  );
}

// 7. Interactive Timeline
export function InteractiveTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Orientation Phase",
      desc: "Rollout of standard MDX presentation creation instructions to academic leads.",
      highlight: "Month 1"
    },
    {
      title: "Interactive Authoring",
      desc: "Faculty converts classic slides to hybrid interactive modules incorporating quizzes.",
      highlight: "Month 3"
    },
    {
      title: "Vite Deployment",
      desc: "Auto-compilation using convert.py creates responsive learning pages.",
      highlight: "Month 6"
    }
  ];

  return (
    <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/60 my-6 text-left">
      <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-4">
        Interactive Curriculum Roadmap
      </div>
      
      <div className="flex justify-between items-center relative mb-6">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold z-10 transition-all ${
              activeStep === idx 
                ? "bg-sky-400 border-sky-400 text-slate-950 shadow-lg shadow-sky-400/20" 
                : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 transition-all duration-300">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-mono font-bold text-sky-400">{steps[activeStep].highlight}</span>
          <span className="text-xs font-bold text-slate-200">{steps[activeStep].title}</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed mt-2">{steps[activeStep].desc}</p>
      </div>
    </div>
  );
}

// 8. AI Tutor Interactive Lesson Widget
export function AITutor() {
  const [messages, setMessages] = useState([
    { sender: 'tutor', text: "Hi! Let's reflect on Outcome-Based Education. What is the main outcome of your course?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'tutor', text: "Great point. In standard pedagogy, we evaluate that outcome through project artifacts. Have you structured your portfolio checks yet?" }
      ]);
    }, 1000);
  };

  return (
    <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/60 my-6 text-left flex flex-col h-[280px]">
      <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-sky-400" /> AI Reflection Tutor
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-3">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-2.5 rounded-xl max-w-[85%] text-xs leading-relaxed ${
              msg.sender === 'user' 
                ? 'bg-sky-500/10 border border-sky-500/20 text-sky-300' 
                : 'bg-slate-900/60 border border-slate-800 text-slate-300'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input 
          type="text" value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="Type your response..." 
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 outline-none focus:border-sky-400"
        />
        <button onClick={handleSend} className="bg-sky-400 hover:bg-sky-500 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
          Send
        </button>
      </div>
    </div>
  );
}
