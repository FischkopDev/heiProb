'use client';

import { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';

interface ProblemItem {
  id: number;
  title: string;
  tags: string;
  category: string;
  status: 'Ungelöst' | 'In Bearbeitung' | 'Gelöst';
  statusColor: 'amber' | 'green' | 'slate';
  summary: string;
  impact: string;
  stakeholders: string;
  nextSteps: string;
}

const problems: ProblemItem[] = [
  {
    id: 1,
    title: 'Lärmbelastung Weststadt',
    tags: 'Urbane Gesundheit • Beteiligung',
    category: 'Umwelt',
    status: 'Ungelöst',
    statusColor: 'amber',
    summary:
      'Bewohner*innen in der Weststadt klagen über anhaltende Lärmbelastung durch Baustellen, Verkehr und Freizeiteinrichtungen.',
    impact:
      'Erhöhte Stressbelastung, geringere Lebensqualität und mögliche Gesundheitsrisiken für Familien und Kinder.',
    stakeholders:
      'Stadtverwaltung, lokale Anwohnervertretung, Verkehrsplaner*innen, Umwelt- und Gesundheitsbehörde.',
    nextSteps:
      'Bedarfsanalyse durchführen, Lärmschutzkonzepte prüfen und geeignete Beteiligungsformate für Anwohner*innen anbieten.',
  },
  {
    id: 2,
    title: 'Digitale Stadtteil-Services',
    tags: 'Smart City • Bürgerbeteiligung',
    category: 'Digitalisierung',
    status: 'In Bearbeitung',
    statusColor: 'green',
    summary:
      'Nicht alle Bewohner*innen profitieren gleichermaßen von digitalen Angeboten im Stadtteil, da Zugänge und Verständnis fehlen.',
    impact:
      'Digitale Kluft, schwächere Beteiligung und ineffiziente Nutzung verfügbarer Services.',
    stakeholders:
      'Smart-City-Team, lokale Vereine, Seniorenvertretung und Bildungseinrichtungen.',
    nextSteps:
      'Nutzerfreundlichkeit evaluieren, Barrieren identifizieren und Pilotprojekte mit niedrigschwelligen Angeboten starten.',
  },
];

export default function ProblemView() {
  const [selectedProblem, setSelectedProblem] = useState<ProblemItem | null>(null);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Problem-Datenbank</h1>
        <p className="text-slate-500">
          Liste offener Herausforderungen. Weitere Informationen zu den Problemen sind nach Auswahl des jeweiligen Eintrags verfügbar.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
          <h3 className="font-bold">Dokumentierte Probleme</h3>
          <span className="text-xs text-slate-400">{problems.length} relevante Einträge</span>
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
            {problems.map((problem) => (
              <tr
                key={problem.id}
                className="hover:bg-slate-50 transition cursor-pointer"
                onClick={() => setSelectedProblem(problem)}
              >
                <td className="p-4">
                  <div className="font-bold text-slate-800">{problem.title}</div>
                  <div className="text-xs text-slate-500">{problem.tags}</div>
                </td>
                <td className="p-4">
                  <span className="text-xs font-medium text-slate-600">{problem.category}</span>
                </td>
                <td className="p-4">
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full ${
                      problem.statusColor === 'amber'
                        ? 'bg-amber-100 text-amber-700'
                        : problem.statusColor === 'green'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {problem.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button
                    type="button"
                    className="text-[10px] font-semibold text-blue-600 hover:underline"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedProblem(problem);
                    }}
                  >
                    Ansehen
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedProblem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">{selectedProblem.title}</h2>
                <p className="text-sm text-slate-500">{selectedProblem.tags}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProblem(null)}
                className="text-slate-400 hover:text-slate-700 transition"
                aria-label="Schließen"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Kategorie</p>
                  <p className="mt-2 font-semibold text-slate-900">{selectedProblem.category}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Status</p>
                  <p className="mt-2 font-semibold text-slate-900">{selectedProblem.status}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Kurzbeschreibung</h3>
                  <p className="mt-2 text-slate-600">{selectedProblem.summary}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Auswirkungen</h3>
                  <p className="mt-2 text-slate-600">{selectedProblem.impact}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Beteiligte Akteur*innen</h3>
                  <p className="mt-2 text-slate-600">{selectedProblem.stakeholders}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Nächste Schritte</h3>
                  <p className="mt-2 text-slate-600">{selectedProblem.nextSteps}</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProblem(null)}
                className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
