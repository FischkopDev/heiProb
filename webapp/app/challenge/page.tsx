'use client';

import { useState, useEffect } from 'react'; // 1. useEffect importieren
import { AlertCircle, X, Loader2, Plus } from 'lucide-react'; // Loader-Icon für besseres UX hinzugefügt
import { useRouter } from "next/navigation";

interface ProblemItem {
  problem_id: number;
  title: string;
  tags: string;
  category: string;
  status: 'Ungelöst' | 'In Bearbeitung' | 'Gelöst';
  statusColor: 'amber' | 'green' | 'slate';
  description: string;
  impact: string;
  stakeholders: string;
  nextSteps: string;
}

export default function ProblemView() {
  // 2. States für dynamische Daten, Ladezustand und Fehlerhandling einrichten
  const [problems, setProblems] = useState<ProblemItem[]>([]);
  const [selectedProblem, setSelectedProblem] = useState<ProblemItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const deleteChallengeInDB = async () => {
    if (!selectedProblem) return;

    const confirmed = window.confirm('Möchten Sie diese Challenge wirklich löschen?');
    if (!confirmed) return;

    try {
      const response = await fetch('/api/challenges/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ challenge_id: selectedProblem.problem_id }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || 'Löschen fehlgeschlagen');
      }

      setProblems((prev) => prev.filter((problem) => problem.problem_id !== selectedProblem.problem_id));
      setSelectedProblem(null);
    } catch (err: any) {
      setError(err?.message || 'Fehler beim Löschen der Challenge');
    }
  };

  // 3. Funktion für den GET-Request definieren
  useEffect(() => {
    async function fetchProblems() {
      try {
        setIsLoading(true);
        // Pfad an deine tatsächliche API-Route anpassen (z.B. /api/challenges/list)
        const response = await fetch('/api/challenges/list');
        
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Problem-Datenbank');
        }

        const data = await response.json();
        
        // (z.B. wenn die DB "description" liefert, deine UI aber "summary" erwartet)
        if (data.success && Array.isArray(data.challenges)) {
          setProblems(data.challenges);
        } else {
          throw new Error('Unerwartetes Datenformat von der API');
        }
      } catch (err: any) {
        setError(err.message || 'Ein unbekannter Fehler ist aufgetreten.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchProblems();
  }, []);

  return (
    <>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">Challenges in Heidelberg</h1>
        <p className="text-slate-500">
          Liste offener Herausforderungen. Weitere Informationen zu den Challenges sind nach Auswahl des jeweiligen Eintrags verfügbar.
        </p>
      </div>

      {/* 4. UI-Zustände (Laden / Fehler) abfangen */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-slate-200">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="mt-2 text-sm text-slate-500">Lade Challenges-Datenbank...</p>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {/* 5. Tabelle nur rendern, wenn nicht geladen wird und kein Fehler vorliegt */}
      {!isLoading && !error && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
            <h3 className="font-bold text-black">Dokumentierte Probleme</h3>
            <span className="text-xs text-slate-400">{problems.length} relevante Einträge</span>
          </div>
          
          {problems.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              Aktuell sind keine Probleme dokumentiert.
            </div>
          ) : (
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
                    key={problem.problem_id}
                    className="hover:bg-slate-50 transition cursor-pointer"
                    onClick={() => setSelectedProblem(problem)}
                  >
                    <td className="p-4">
                      <div className="font-bold text-slate-800">{problem.title}</div>
                      <div className="text-xs text-slate-500">{problem.tags || 'Keine Tags'}</div>
                    </td>
                    <td className="p-4">
                      <span className="text-xs font-medium text-slate-600">{problem.category}</span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-[10px] px-2 py-1 rounded-full ${
                          problem.statusColor === 'amber' || problem.status === 'Ungelöst'
                            ? 'bg-amber-100 text-amber-700'
                            : problem.statusColor === 'green' || problem.status === 'In Bearbeitung'
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
          )}
        </div>
      )}

      {/* Modal bleibt identisch wie in deinem Code */}
      {selectedProblem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-black">{selectedProblem.title}</h2>
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
                  <p className="mt-2 text-slate-600">{selectedProblem.description}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Auswirkungen</h3>
                  <p className="mt-2 text-slate-600">{selectedProblem.impact}</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-200 flex justify-end gap-3">
              <button
                type="button"
                onClick={deleteChallengeInDB}
                className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
              >
                Löschen
              </button>
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