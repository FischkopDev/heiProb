"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

/**
 * Bildet die Übersicht für alle eingetragenen Projekte in der Sandbox-City Heidelberg ab. Diese Komponente lädt die Projektdaten
 * asynchron von der API-Route `/api/sandbox/list` und transformiert sie in ein einheitliches Format für die Anzeige. 
 * Sie zeigt eine tabellarische Übersicht mit den wichtigsten Informationen zu jedem Projekt, einschließlich Titel, 
 * Standort, Status, beteiligten Akteuren und einem Teaser für weitere Details.
 */
interface Project {
  /** Eindeutige ID des Projekts als String für das React-Key-Mapping. */
  id: string;
  /** Der Titel des Projekts. */
  title: string;
  /** Die Themen oder der Standort des Projekts. */
  topics: string;
  /** Die aktuelle Phase bzw. der Status des Projekts (z. B. "Ideen-Phase"). */
  stage: string;
  /** Eine Liste der Namen aller beteiligten Akteure/Experten. */
  actors: string[];
  /** Ein dynamischer UI-Anzeigewert (Teaser-Text, URL oder formatiertes Update-Datum). */
  value: string;
}

/**
 * Eine Next.js-Client-Komponente, die eine tabellarische Übersicht oder Liste 
 * aller Sandbox-Projekte aus der Datenbank anzeigt. Sie lädt die Projektdaten 
 * asynchron und bereitet diese direkt für die Anzeige auf.
 * * @returns Die gerenderte Übersicht der Sandbox-Projekte.
 */
export default function SandboxProjectView() {
  /** Next.js Router für eventuelle clientseitige Navigationen (z. B. zur Detailseite). */
  const router = useRouter();
  
  /** Lokaler State zur Speicherung der geladenen und transformierten Projekte. */
  const [projects, setProjects] = useState<Project[]>([]);
  
  /** Globaler Ladezustand während des API-Abrufs. */
  const [loading, setLoading] = useState(true);
  
  /** Hält Fehlermeldungen bereit, falls der Abruf der Projektdaten fehlschlägt. */
  const [error, setError] = useState<string | null>(null);

  /**
   * `useEffect`-Hook, der beim Mounten der Komponente alle Sandbox-Projekte
   * per GET-Request von der API-Route `/api/sandbox/list` lädt.
   */
  useEffect(() => {
    /**
     * Holt die Rohdaten von der API und transformiert sie in das interne {@link Project}-Format.
     * * @async
     * @throws {Error} Wenn die Server-Antwort nicht erfolgreich (ok) ist.
     */
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/sandbox/list', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error || 'Fehler beim Laden der Projekte.');
        }

        // Transformation der API-Rohdaten in die Project-Schnittstelle
        const loadedProjects: Project[] = Array.isArray(data.projects)
          ? data.projects.map((project: any) => ({
              id: String(project.id),
              title: project.title || 'Unbenanntes Projekt',
              // Mappt den Standort (location) auf die UI-Eigenschaft 'topics'
              topics: project.location || 'Unbekannter Standort',
              // Fallback-Kette für den Projektstatus
              stage: project.state || project.project_state || 'Unbekannter Status',
              // Extrahiert ausschließlich die Namen der Experten in ein String-Array
              actors: Array.isArray(project.experts)
                ? project.experts.map((expert: any) => expert.name)
                : [],
              // Priorisiertes Mapping für das 'value'-Feld (Details-Teaser -> URL -> Datum)
              value: project.details
                ? `${String(project.details).slice(0, 28)}…`
                : project.websiteUrl
                ? String(project.websiteUrl)
                : project.lastUpdate
                ? new Date(project.lastUpdate).toLocaleDateString('de-DE')
                : '—',
            }))
          : [];

        setProjects(loadedProjects);
      } catch (fetchError: any) {
        setError(fetchError?.message || 'Fehler beim Laden der Projekte.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">Sandbox-City Heidelberg Dashboard</h1>
        <p className="text-slate-500">Überblick der aktuellen städtischen Herausforderungen und Projektstadien.</p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
          <div>
            <h3 className="font-bold text-black">Projekte</h3>
            <p className="text-xs text-slate-400">
              {loading
                ? 'Lade Projekte…'
                : `${projects.length} Projekt${projects.length === 1 ? '' : 'e'} gefunden`}
            </p>
          </div>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold">
            <tr>
              <th className="p-4">Projekt</th>
              <th className="p-4">Aktuelles Stadium</th>
              <th className="p-4">Akteure</th>
              <th className="p-4 text-right">Mehrwert</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">
                  Lade Projekte…
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-red-600">
                  {error}
                </td>
              </tr>
            ) : projects.length > 0 ? (
              projects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-slate-50 transition cursor-pointer"
                  onClick={() => router.push(`/sandbox/project/details?id=${project.id}`)}
                >
                  <td className="p-4">
                    <div className="font-bold text-slate-800">{project.title}</div>
                    <div className="text-xs text-slate-500">{project.topics} • <span className="text-blue-600">ID: {project.id}</span></div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-xs font-medium">{project.stage}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex -space-x-2">
                      {project.actors.length > 0 ? (
                        project.actors.map((actor) => (
                          <div key={actor} className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] text-slate-700 font-bold">
                            {actor.slice(0, 3)}
                          </div>
                        ))
                      ) : (
                        <div className="text-[10px] text-slate-500">Keine Expert:innen</div>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-xs font-bold text-blue-600">Details</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">Keine Projekte verfügbar.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
