"use client";

import { CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  topics: string;
  stage: string;
  actors: string[];
  value: string;
}

const projects: Project[] = [
  {
    id: 'HD-311',
    title: 'Digitale Parkraumbewirtschaftung',
    topics: 'Smart City • Verkehr',
    stage: 'Test-Phase',
    actors: ['Stadt', 'Mobilität', 'IT'],
    value: '+25% Nutzerzufriedenheit',
  },
  {
    id: 'HD-215',
    title: 'Smart Lighting Bahnstadt',
    topics: 'Mobilität • Sicherheit',
    stage: 'Challenge-Phase',
    actors: ['Siemens', 'Stadtwerk'],
    value: '+12% Energieeffizienz',
  },
  {
    id: 'HD-102',
    title: 'Nachhaltige Bewässerung Neckarwiese',
    topics: 'Umwelt • Wissenschaft',
    stage: 'Reallabor-Phase',
    actors: ['Uni', 'W-HD'],
    value: '+8.2% Ressourceneffizienz',
  },
];

export default function SandboxProjectView() {
  const filteredProjects = projects;

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
            <p className="text-xs text-slate-400">{filteredProjects.length} Projekt{filteredProjects.length === 1 ? '' : 'e'} gefunden</p>
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
                <td colSpan={4} className="p-8 text-center text-slate-500">Keine Projekte verfügbar.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
