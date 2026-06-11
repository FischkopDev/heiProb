// components/Agentbar.tsx
"use client";

import { Sparkles, AlertCircle, MessageSquare } from "lucide-react";

/**
 * Die seitliche Ansicht auf dem der KI-Agent platziert wird. Hier sollen die Befehle an den Agent übernommen werden. 
 * 
 */
export function Agentbar() {
  return (
    <aside className="w-80 bg-white border-l border-slate-200 flex flex-col shadow-xl">
      {/* HEADER */}
      <div className="p-6 border-b border-slate-100 flex items-center gap-2 bg-slate-50">
        <Sparkles className="text-blue-600" size={20} />
        <h2 className="font-bold text-sm text-black">HeiProb KI-Agent</h2>
      </div>
      
      {/* CHAT / CONTENT AREA */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Agent Message */}
        <div className="p-4 bg-blue-600 text-white rounded-2xl rounded-tr-none text-xs leading-relaxed shadow-md shadow-blue-200">
          Guten Tag! Ich habe das Problem "Lärmbelastung Weststadt" analysiert. Es gibt <strong>3 Experten</strong> der Uni Heidelberg, die zu akustischen Barrieren forschen. Soll ich den Kontakt herstellen?
        </div>
        
        {/* Matching Section */}
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase px-1">Automatisches Matching</p>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 cursor-pointer transition group">
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs font-bold">Dr. h.c. Max Muster</span>
              <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">98% Match</span>
            </div>
            <p className="text-[10px] text-slate-500">Schwerpunkt: Urbane Akustik & Physik</p>
            <button className="mt-2 w-full py-1 text-[10px] bg-white border border-blue-600 text-blue-600 rounded-md group-hover:bg-blue-600 group-hover:text-white transition">Einladen</button>
          </div>
        </div>

        {/* Alert/Info Section */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-center gap-2 text-amber-800 mb-1">
            <AlertCircle size={14} />
            <span className="text-xs font-bold">Redundanz-Check</span>
          </div>
          <p className="text-[10px] text-amber-700">In Mannheim wurde bereits ein ähnliches Projekt erfolgreich abgeschlossen. <span className="underline font-bold cursor-pointer">Bericht einsehen</span></p>
        </div>
      </div>

      {/* INPUT AREA */}
      <div className="p-4 border-t border-slate-100">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Frage den Agenten..." 
            className="w-full text-xs p-3 pr-10 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <MessageSquare className="absolute right-3 top-2.5 text-slate-400" size={16} />
        </div>
      </div>
    </aside>
  );
}