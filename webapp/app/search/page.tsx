"use client";

import React, { useState } from 'react';
import { Search, Rocket, Lightbulb, Users, ArrowRight, HelpCircle } from 'lucide-react';
import { Challenge, Project, Expert } from '@/lib/types';

// --- TYPEN-DEFINITIONEN ---

// --- MOCK-DATEN (Ersetze diese später durch deine API / DB-Abfrage) ---

/** Mock-Daten für Challenges zu Test- und Entwicklungszwecken. */
const mockChallenges: Challenge[] = [
  new Challenge('CH-01', 'CO2-neutrale Altstadt bis 2030', 'Umweltamt', 'Aktiv'),
  new Challenge('CH-02', 'Optimierung des Radwegenetzes', 'Verkehrsplanung', 'In Vorbereitung'),
  new Challenge('CH-03', 'Smarte Abfallkonzepte für Feste', 'Stadtwerke', 'Aktiv'),
];

/** Mock-Daten für Projekte zu Test- und Entwicklungszwecken. */
const mockProjects: Project[] = [
  new Project('HD-311', 'Digitale Parkraumbewirtschaftung', 'Test-Phase', undefined, 'Heidelberg-Altstadt'),
  new Project('HD-215', 'Smart Lighting Bahnstadt', 'Challenge-Phase', undefined, 'Bahnstadt'),
  new Project('HD-102', 'Nachhaltige Bewässerung Neckarwiese', 'Reallabor-Phase', undefined, 'Neuenheim'),
];

/** Mock-Daten für Experten-Profile zu Test- und Entwicklungszwecken. */
const mockExperts: Expert[] = [
  new Expert('EX-99', 'Dr. Maria Lorenz', 'Expertin für urbane Mobilität', ['Verkehr', 'Smart City', 'KI']),
  new Expert('EX-42', 'Thomas Keller', 'Projektentwickler IoT', ['Sensorik', 'LoRaWAN', 'IT']),
  new Expert('EX-12', 'Prof. Dr. Jan Schmidt', 'Umweltwissenschaftler', ['Klima', 'Hydrologie', 'Wissenschaft']),
];

/**
 * Eine Next.js-Client-Komponente, die eine globale, interaktive Suchoberfläche bereitstellt.
 * Durchsucht parallel Challenges, Projekte und Expert*innen anhand einer einzigen
 * Benutzereingabe (Query) in Echtzeit auf Client-Eite.
 * * @returns Das gerenderte Suchfenster inklusive Suchergebnissen.
 */
export default function GlobalSearchView() {
  /** Lokaler State für die aktuelle Suchanfrage des Benutzers. */
  const [searchQuery, setSearchQuery] = useState('');

  // --- FILTER-LOGIK ---
  
  /** Bereinigte und in Kleinbuchstaben umgewandelte Suchanfrage. */
  const query = searchQuery.toLowerCase().trim();

  /** * Filtert Challenges basierend auf dem Titel oder der Abteilung.
   * Bleibt leer, wenn keine Suchanfrage existiert.
   */
  const filteredChallenges = query
    ? mockChallenges.filter(c => c.title.toLowerCase().includes(query) || c.department.toLowerCase().includes(query))
    : [];

  /** * Filtert Projekte basierend auf dem Titel oder dem Standort.
   * Bleibt leer, wenn keine Suchanfrage existiert.
   */
  const filteredProjects = query
    ? mockProjects.filter(p => p.title.toLowerCase().includes(query) || p.location?.toLowerCase().includes(query))
    : [];

  /** * Filtert Expert*innen basierend auf dem Namen, der Rolle oder den Fähigkeiten (Skills).
   * Bleibt leer, wenn keine Suchanfrage existiert.
   */
  const filteredExperts = query
    ? mockExperts.filter(e => e.name.toLowerCase().includes(query) || e.role.toLowerCase().includes(query) || e.skills.some(s => s.toLowerCase().includes(query)))
    : [];

  /** Gibt an, ob mindestens eine der Kategorien Suchergebnisse geliefert hat. */
  const hasResults = filteredChallenges.length > 0 || filteredProjects.length > 0 || filteredExperts.length > 0;

  return (
    <div className="w-full space-y-8">
      {/* HEADER & SEARCH BAR */}
      <div>
        <h1 className="text-2xl font-bold text-black mb-2">Globale Suche</h1>
        <p className="text-slate-500 mb-6">Durchsuche alle Challenges, Projekte und Experten der Sandbox-City Heidelberg.</p>
        
        <div className="relative w-full">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Suchbegriff eingeben (z.B. Altstadt, Mobilität, Sensorik...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-sm transition"
          />
        </div>
      </div>

      {/* ERGEBNIS-ANZEIGE */}
      {searchQuery === '' ? (
        // Leerzustand vor der Suche
        <div className="text-center p-12 bg-slate-50 border border-dashed border-slate-200 rounded-xl">
          <HelpCircle className="mx-auto h-12 w-12 text-slate-400 mb-3" />
          <h3 className="text-sm font-bold text-slate-700 mb-1">Bereit zur Suche</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Tippe einen Suchbegriff oben ein, um Challenges, Projekte und Experten gleichzeitig zu durchsuchen.
          </p>
        </div>
      ) : hasResults ? (
        // Wenn Ergebnisse existieren
        <div className="grid grid-cols-1 gap-8">
          
          {/* SEKTION: CHALLENGES */}
          {filteredChallenges.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
                <Lightbulb size={18} className="text-amber-500" />
                <h2 className="font-bold text-sm text-slate-800 uppercase tracking-wider">
                  Challenges ({filteredChallenges.length})
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                {filteredChallenges.map((challenge) => (
                  <div key={challenge.id} className="p-4 hover:bg-slate-50 transition flex justify-between items-center group cursor-pointer">
                    <div>
                      <div className="font-bold text-slate-800">{challenge.title}</div>
                      <div className="text-xs text-slate-500">{challenge.department} • <span className="text-amber-600 font-medium">{challenge.status}</span></div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-600 transition group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SEKTION: PROJEKTE */}
          {filteredProjects.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
                <Rocket size={18} className="text-blue-600" />
                <h2 className="font-bold text-sm text-slate-800 uppercase tracking-wider">
                  Projekte ({filteredProjects.length})
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="p-4 hover:bg-slate-50 transition flex justify-between items-center group cursor-pointer">
                    <div>
                      <div className="font-bold text-slate-800">{project.title}</div>
                      <div className="text-xs text-slate-500">{project.location} • <span className="text-blue-600 font-medium">{project.stage}</span></div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-600 transition group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SEKTION: EXPERTEN */}
          {filteredExperts.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
                <Users size={18} className="text-purple-600" />
                <h2 className="font-bold text-sm text-slate-800 uppercase tracking-wider">
                  Experten ({filteredExperts.length})
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                {filteredExperts.map((expert) => (
                  <div key={expert.id} className="p-4 hover:bg-slate-50 transition flex justify-between items-center group cursor-pointer">
                    <div>
                      <div className="font-bold text-slate-800">{expert.name}</div>
                      <div className="text-xs text-slate-500 mb-2">{expert.role}</div>
                      <div className="flex flex-wrap gap-1">
                        {expert.skills.map(skill => (
                          <span key={skill} className="bg-purple-50 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded border border-purple-100">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-600 transition group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      ) : (
        // Keine Ergebnisse gefunden
        <div className="text-center p-12 bg-white border border-slate-200 rounded-xl shadow-sm">
          <p className="text-sm text-slate-500">Keine Übereinstimmungen für <span className="font-bold text-slate-800">"{searchQuery}"</span> gefunden.</p>
          <p className="text-xs text-slate-400 mt-1">Überprüfe die Schreibweise oder versuche es mit einem anderen Begriff.</p>
        </div>
      )}
    </div>
  );
}