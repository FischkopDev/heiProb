// components/Sidebar.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGrid, AlertCircle, Briefcase, Users } from "lucide-react";
/**
 * 
 * Die Navigationsleiste mit Verbindung zu den Bereichen Expertennetzwerk, Challenges und Sandbox-Projekte.
 * 
 */
export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Challenges", href: "/challenge", icon: AlertCircle, id: "database" },
    { name: "Test in Heidelberg", href: "/sandbox", icon: Briefcase, id: "sandbox" },
    { name: "Experten-Netzwerk", href: "/relations", icon: Users, id: "experten" },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 border-r border-slate-200 flex flex-col">
      <div className="p-6 text-xl font-bold text-white flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <LayoutGrid size={20} />
        </div>
        HeiProb
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        <p className="text-xs font-semibold text-slate-500 uppercase px-3 py-2">Navigation</p>
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg transition w-full text-left ${
                isActive 
                  ? "bg-blue-600/10 text-blue-400 font-medium" 
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <item.icon size={20} /> {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Status Card */}
      <div className="p-4 bg-slate-800 m-4 rounded-xl border border-slate-700">
        <p className="text-xs text-slate-400 mb-2">Sandbox-Status Heidelberg</p>
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 3 ? 'bg-blue-500' : 'bg-slate-600'}`} />
          ))}
        </div>
        <p className="text-[10px] mt-2 text-blue-400">Phase 3: Reallabor-Phase</p>
      </div>
    </aside>
  );
}