import React from 'react';
import { LayoutGrid, AlertCircle, Users, Briefcase, Search, Plus } from 'lucide-react';

export default function DashboardMockup() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 text-xl font-bold text-blue-700 flex items-center gap-2">
          <LayoutGrid size={24} /> HeiProb
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg font-medium">
            <AlertCircle size={20} /> Problem-Datenbank
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-slate-600 hover:bg-slate-100 rounded-lg">
            <Briefcase size={20} /> Projekt-Listen
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-slate-600 hover:bg-slate-100 rounded-lg">
            <Users size={20} /> Personen & Rollen
          </a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto">
        
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0">
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Problem oder Projekt suchen..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <Plus size={18} /> Neues Problem melden
          </button>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Aktuelle Problemstellungen</h1>

          {/* TABLE MOCKUP */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 font-semibold text-slate-600">Problem</th>
                  <th className="p-4 font-semibold text-slate-600">Status</th>
                  <th className="p-4 font-semibold text-slate-600">Zugeordnete Experten</th>
                  <th className="p-4 font-semibold text-slate-600">Priorität</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4">
                    <div className="font-medium text-blue-600 underline cursor-pointer">Sanierung Brücke Westpark</div>
                    <div className="text-xs text-slate-400 italic">Infrastruktur • Gemeldet am 12.04.26</div>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">In Prüfung</span>
                  </td>
                  <td className="p-4 flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px] font-bold">JD</div>
                    <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">MS</div>
                  </td>
                  <td className="p-4">
                    <span className="text-red-500 font-bold underline decoration-2 underline-offset-4">Hoch</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4">
                    <div className="font-medium text-blue-600 underline cursor-pointer">Digitalisierung Grundschule Nord</div>
                    <div className="text-xs text-slate-400 italic">Bildung • Gemeldet am 05.04.26</div>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Projekt gestartet</span>
                  </td>
                  <td className="p-4">
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px] font-bold">BK</div>
                  </td>
                  <td className="p-4">Mittel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}