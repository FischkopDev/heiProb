import React from 'react';
import { 
  LayoutGrid, AlertCircle, Users, Briefcase, Search, Plus, 
  MessageSquare, Sparkles, ArrowRight, CheckCircle2, Circle
} from 'lucide-react';

export default function EnhancedDashboardMockup() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-slate-300 border-r border-slate-200 flex flex-col">
        <div className="p-6 text-xl font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <LayoutGrid size={20} />
          </div> 
          HeiProb
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase px-3 py-2">Navigation</p>
          <a href="#" className="flex items-center gap-3 p-3 bg-blue-600/10 text-blue-400 rounded-lg font-medium">
            <AlertCircle size={20} /> Problem-Datenbank
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition">
            <Briefcase size={20} /> Sandbox-Projekte
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition">
            <Users size={20} /> Experten-Netzwerk
          </a>
        </nav>
        <div className="p-4 bg-slate-800 m-4 rounded-xl border border-slate-700">
          <p className="text-xs text-slate-400 mb-2">Sandbox-Status Heidelberg</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 3 ? 'bg-blue-500' : 'bg-slate-600'}`} />
            ))}
          </div>
          <p className="text-[10px] mt-2 text-blue-400">Phase 3: Reallabor-Phase</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto flex flex-col">
        
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Suchen nach Expertisen, Problemen..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-full bg-slate-50 text-sm"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm">
              <Plus size={18} /> Neues Problem melden
            </button>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          
          {/* LEFT: CONTENT AREA */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Sandbox-City Heidelberg Dashboard</h1>
              <p className="text-slate-500">Überblick der aktuellen städtischen Herausforderungen und Projektstadien.</p>
            </div>

            {/* PHASES OVERVIEW (Visual Stages) */}
            <div className="grid grid-cols-5 gap-4 mb-8">
              {['Initialisierung', 'Konzeption', 'Reallabor', 'Evaluierung', 'Verstetigung'].map((phase, idx) => (
                <div key={phase} className={`p-3 rounded-lg border text-center ${idx === 2 ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200'}`}>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Phase {idx + 1}</p>
                  <p className={`text-xs font-semibold ${idx === 2 ? 'text-blue-700' : 'text-slate-600'}`}>{phase}</p>
                </div>
              ))}
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
                <h3 className="font-bold">Aktive Challenges</h3>
                <span className="text-xs text-slate-400">12 offene Probleme gefunden</span>
              </div>
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold">
                  <tr>
                    <th className="p-4">Herausforderung / Problem</th>
                    <th className="p-4">Aktuelles Stadium</th>
                    <th className="p-4">Akteure</th>
                    <th className="p-4 text-right">Mehrwert</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-4">
                      <div className="font-bold text-slate-800">Nachhaltige Bewässerung Neckarwiese</div>
                      <div className="text-xs text-slate-500">Umwelt • Wissenschaft • <span className="text-blue-600">ID: HD-102</span></div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-green-500" />
                        <span className="text-xs font-medium">Reallabor-Phase</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">Uni</div>
                        <div className="w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">W-HD</div>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <span className="text-xs font-bold text-blue-600">+8.2% Ressourceneffizienz</span>
                    </td>
                  </tr>
                  {/* Additional row for unlinked problem */}
                  <tr className="bg-red-50/30">
                    <td className="p-4">
                      <div className="font-bold text-red-800 flex items-center gap-2">
                        Lärmbelastung Weststadt <AlertCircle size={14} />
                      </div>
                      <div className="text-xs text-slate-500">Zivilgesellschaft • <span className="font-semibold">Ungelöst</span></div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-slate-400 italic">
                        <Circle size={16} />
                        <span className="text-xs">Noch kein Projekt</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-400 text-xs italic">Warte auf Experten-Matching</td>
                    <td className="p-4 text-right">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT: AGENT PANEL (Proaktiver Vermittler) */}
          <div className="w-80 bg-white border-l border-slate-200 flex flex-col shadow-xl">
            <div className="p-6 border-b border-slate-100 flex items-center gap-2 bg-slate-50">
              <Sparkles className="text-blue-600" size={20} />
              <h2 className="font-bold text-sm">HeiProb KI-Agent</h2>
            </div>
            
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              <div className="p-4 bg-blue-600 text-white rounded-2xl rounded-tr-none text-xs leading-relaxed shadow-md shadow-blue-200">
                Guten Tag! Ich habe das Problem "Lärmbelastung Weststadt" analysiert. Es gibt <strong>3 Experten</strong> der Uni Heidelberg, die zu akustischen Barrieren forschen. Soll ich den Kontakt herstellen?
              </div>
              
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

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-center gap-2 text-amber-800 mb-1">
                  <AlertCircle size={14} />
                  <span className="text-xs font-bold">Redundanz-Check</span>
                </div>
                <p className="text-[10px] text-amber-700">In Mannheim wurde bereits ein ähnliches Projekt erfolgreich abgeschlossen. <span className="underline font-bold">Bericht einsehen</span></p>
              </div>
            </div>

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
          </div>
        </div>
      </main>
    </div>
  );
}