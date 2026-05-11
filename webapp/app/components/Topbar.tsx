// components/Topbar.tsx
"use client";

import { Search, Plus } from "lucide-react";
import { useRouter } from 'next/navigation';

export function Topbar() {
  const router = useRouter();
const createUser = async () => {
    try {
      const response = await fetch('api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'Hallo Welt', content: 'hallo.welt@example.com' }),
      });
      if (response.ok) {
        console.log('Test user created successfully');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

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

      {/* ACTIONS */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => router.push("/challenge/add")}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm"
        >
          <Plus size={18} /> Neues Problem melden
        </button>
      </div>
    </header>
  );
}