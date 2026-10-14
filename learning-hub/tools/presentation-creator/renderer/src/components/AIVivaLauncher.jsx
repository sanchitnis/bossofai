import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Award, Sparkles, Monitor, Mic, Heart } from 'lucide-react';

export default function AIVivaLauncher({ vivaUrl }) {
  const [launched, setLaunched] = useState(false);

  const startViva = () => {
    setLaunched(true);
    // Navigate in the same tab after a very brief delay to show the thanks state
    setTimeout(() => {
      window.open(vivaUrl, '_self');
    }, 1500);
  };

  return (
    <div className="viva-launcher border border-purple-500/20 bg-purple-500/5 backdrop-blur rounded-2xl p-6 my-6 shadow-2xl transition-all duration-300">
      
      {/* Header Info */}
      <div className="flex items-center gap-3 border-b border-purple-500/15 pb-4 mb-4 text-left">
        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <Award size={20} className="animate-pulse" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-100">Gold Certification — AI Viva</h3>
          <p className="text-xs text-slate-400">Final Verification & Fellowship Graduation</p>
        </div>
      </div>

      {!launched ? (
        <div className="space-y-5 animate-fade-up text-left">
          {/* Instructions */}
          <div className="space-y-4">
            <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/40 p-4.5 rounded-xl border border-slate-800/20 space-y-3">
              <div>
                <strong className="text-slate-100 block mb-1">⏱️ Duration & Preparation:</strong>
                Please allocate approximately <strong>30 minutes</strong> of uninterrupted time to complete this final interactive assessment.
              </div>
              
              <div>
                <strong className="text-slate-100 block mb-1">🎤 Voice Integration (Optional):</strong>
                You can use the <strong>microphone icon</strong> inside the Copilot chatbot window to speak your responses directly for a natural, conversation-like Viva experience.
              </div>

              <div>
                <strong className="text-slate-100 block mb-1">🔑 Account & Library Setup:</strong>
                When you click the button below, we will navigate you to <strong>Microsoft M365 Copilot</strong>. Please login using your official Microsoft/University account and add the Viva agent to your personal library of agents.
              </div>

              <div className="border-t border-purple-500/10 pt-3">
                <strong className="text-amber-400 block mb-1">🤝 Honor Code & Learning Sincerity:</strong>
                Please approach this viva sincerely as a constructive learning experience. While it is possible to bypass or cheat the automated system, doing so defeats the developmental intent of the certification, and you will only lose out on actual capability growth.
              </div>
            </div>

            <button
              onClick={startViva}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-slate-100 font-bold transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start Final AI Viva</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-fade-up text-center py-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Heart size={36} className="animate-pulse" />
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-slate-100">Thank You!</h4>
            <p className="text-xs text-slate-350 max-w-sm mx-auto">
              Thank you for participating in the AI Driver's License Certification. We appreciate your dedication to designing next-frontier learning experiences.
            </p>
            <p className="text-[10px] text-slate-450 italic pt-2">
              Redirecting to Microsoft M365 Copilot...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
