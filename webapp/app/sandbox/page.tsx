"use client";

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  topics: string;
  stage: string;
  phase: number;
  actors: string[];
  value: string;
}

const projects: Project[] = [
  {
    id: 'HD-311',
    title: 'Digitale Parkraumbewirtschaftung',
    topics: 'Smart City • Verkehr',
    stage: 'Test-Phase',
    phase: 0,
    actors: ['Stadt', 'Mobilität', 'IT'],
    value: '+25% Nutzerzufriedenheit',
  },
  {
    id: 'HD-215',
    title: 'Smart Lighting Bahnstadt',
    topics: 'Mobilität • Sicherheit',
    stage: 'Challenge-Phase',
    phase: 1,
    actors: ['Siemens', 'Stadtwerk'],
    value: '+12% Energieeffizienz',
  },
  {
    id: 'HD-102',
    title: 'Nachhaltige Bewässerung Neckarwiese',
    topics: 'Umwelt • Wissenschaft',
    stage: 'Reallabor-Phase',
    phase: 2,
    actors: ['Uni', 'W-HD'],
    value: '+8.2% Ressourceneffizienz',
  },
];

const phases = [
  { title: 'Test in Heidelberg', label: 'Test-Phase' },
  { title: 'Challenge in Heidelberg', label: 'Challenge-Phase' },
  { title: 'Sandbox Areale', label: 'Reallabor-Phase' },
];

export default function SandboxProjectView() {
  const [activePhase, setActivePhase] = useState<number>(1);
  
  const filteredProjects = projects.filter((project) => project.phase === activePhase);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">Sandbox-City Heidelberg Dashboard</h1>
        <p className="text-slate-500">Überblick der aktuellen städtischen Herausforderungen und Projektstadien.</p>
      </div>

      {/* PHASES OVERVIEW (Visual Stages) */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {phases.map((phase, idx) => (
          <button
            key={phase.title}
            type="button"
            onClick={() => setActivePhase(idx)}
            className={`p-3 rounded-lg border text-center transition ${activePhase === idx ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200 hover:bg-slate-100'} ${activePhase === idx ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <p className="text-[10px] font-bold text-slate-400 uppercase">Phase {idx + 1}</p>
            <p className={`text-xs font-semibold ${activePhase === idx ? 'text-blue-700' : 'text-slate-600'}`}>{phase.title}</p>
            <p className="text-[10px] text-slate-500 mt-2">{phase.label}</p>
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
          <div>
            <h3 className="font-bold">Projekte in {phases[activePhase].label}</h3>
            <p className="text-xs text-slate-400">{filteredProjects.length} Projekt{filteredProjects.length === 1 ? '' : 'e'} gefunden</p>
          </div>
          <span className="text-xs text-slate-400">Phase {activePhase + 1} auswählen</span>
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
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-slate-50 transition">
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
                      {project.actors.map((actor) => (
                        <div key={actor} className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] text-slate-700 font-bold">{actor.slice(0, 3)}</div>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-xs font-bold text-blue-600">{project.value}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">Keine Projekte für diese Phase verfügbar.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
