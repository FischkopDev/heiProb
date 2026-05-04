import { AlertCircle } from 'lucide-react';

export default function ProblemView() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Problem-Datenbank</h1>
        <p className="text-slate-500">Liste offener Herausforderungen. Weitere Informationen zu den Problemen sind nach Auswahl des jeweiligen Eintrags verfügbar.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
          <h3 className="font-bold">Dokumentierte Probleme</h3>
          <span className="text-xs text-slate-400">8 relevante Einträge</span>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold">
            <tr>
              <th className="p-4">Problem</th>
              <th className="p-4">Kategorie</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50 transition">
              <td className="p-4">
                <div className="font-bold text-slate-800">Lärmbelastung Weststadt</div>
                <div className="text-xs text-slate-500">Urbane Gesundheit • Beteiligung</div>
              </td>
              <td className="p-4">
                <span className="text-xs font-medium text-blue-600">Umwelt</span>
              </td>
              <td className="p-4">
                <span className="text-[10px] px-2 py-1 rounded-full bg-amber-100 text-amber-700">Ungelöst</span>
              </td>
              <td className="p-4 text-right">
                <button className="text-[10px] font-semibold text-blue-600 hover:underline">Ansehen</button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition">
              <td className="p-4">
                <div className="font-bold text-slate-800">Digitale Stadtteil-Services</div>
                <div className="text-xs text-slate-500">Smart City • Bürgerbeteiligung</div>
              </td>
              <td className="p-4">
                <span className="text-xs font-medium text-slate-600">Digitalisierung</span>
              </td>
              <td className="p-4">
                <span className="text-[10px] px-2 py-1 rounded-full bg-green-100 text-green-700">In Bearbeitung</span>
              </td>
              <td className="p-4 text-right">
                <button className="text-[10px] font-semibold text-blue-600 hover:underline">Ansehen</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
