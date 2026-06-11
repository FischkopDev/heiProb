// components/Topbar.tsx
"use client";

import { Search, Plus } from "lucide-react";
import { useRouter } from 'next/navigation';

/**
 * 
 * Die Topbar, die auf allen Seiten sichtbar ist. Sie enthält eine Suchleiste für die schnelle Suche nach Expertisen, Problemen oder Projekten.
 * Außerdem gibt es zwei prominente Buttons: Einen zum Hinzufügen eines neuen Problems (Challenge) und einen zum Hinzufügen eines neuen Projekts (Sandbox). 
 * 
 */

export function Topbar() {
  const router = useRouter();
  
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      {/* SEARCH */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Suchen nach Expertisen, Problemen..." 
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-full bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* ACTIONS (Beide Buttons in einem gemeinsamen Flex-Container) */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => router.push("/challenge/add")}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm text-sm"
        >
          <Plus size={18} /> Neues Problem melden
        </button>

        <button 
          onClick={() => router.push("/sandbox/add")} 
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm text-sm"
        >
          <Plus size={18} /> Neues Projekt hinzufügen
        </button>
      </div>
    </header>
  );
}