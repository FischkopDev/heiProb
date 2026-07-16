"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserPlus } from 'lucide-react';
import { ProjectMember, ExpertOption, ProjectDetails } from '@/lib/types';

/**
 * Erzeugt eine neue `ProjectDetails`-Instanz aus Formular- oder API-Daten.
 */
const createProjectDetails = (data: {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  state: string;
  location: string;
  websiteUrl: string;
  details: string;
  experts: ProjectMember[];
  project_state?: string;
}): ProjectDetails => {
  return new ProjectDetails(
    data.id,
    data.title,
    data.description,
    data.startDate,
    data.endDate,
    data.state,
    data.location,
    data.websiteUrl,
    data.details,
    data.experts,
    data.project_state,
  );
};

/**
 * Ein leeres Standard-Objekt zur Initialisierung des {@link ProjectDetails}-States.
 */
const emptyProject: ProjectDetails = createProjectDetails({
  id: '',
  title: '',
  description: '',
  startDate: '',
  endDate: '',
  state: '',
  location: '',
  websiteUrl: '',
  details: '',
  experts: [],
});

/**
 * Eine Next.js-Client-Komponente, die eine Detailansicht zur Bearbeitung eines bestehenden Projekts bereitstellt.
 * Lädt Projektdaten sowie die globale Expertenliste parallel, erlaubt die Modifikation aller Felder
 * inklusive RACI-Teamzuweisungen (mit Duplikatsprüfung) und speichert die Änderungen via PATCH-Request.
 * * @returns Die gerenderte Detail- und Bearbeitungsseite des Projekts.
 */
export default function ProjectDetailsPage() {
  /** Next.js Suchparameter, um die Projekt-ID aus der URL (`?id=...`) zu extrahieren. */
  const searchParams = useSearchParams();
  /** Next.js Router für die Navigation nach erfolgreichem Update. */
  const router = useRouter();
  /** Die aus der URL extrahierte Projekt-ID. */
  const projectId = searchParams.get('id');

  /** Lokaler Hauptstate für die Projektdetails. */
  const [project, setProject] = useState<ProjectDetails>(emptyProject);
  /** Globaler Ladezustand für die Initialisierung der Daten. */
  const [loading, setLoading] = useState(true);
  /** Hält globale Fehlermeldungen bei fehlgeschlagenen API-Abfragen oder Updates. */
  const [error, setError] = useState<string | null>(null);
  /** Status, ob das Formular aktuell an das Backend übertragen wird (Submit-Schutz). */
  const [isSaving, setIsSaving] = useState(false);
  /** Liste aller verfügbaren Experten für das Zuweisungs-Dropdown. */
  const [expertOptions, setExpertOptions] = useState<ExpertOption[]>([]);
  /** Ladezustand speziell für den asynchronen Abruf der Expertenliste. */
  const [loadingExperts, setLoadingExperts] = useState(false);
  /** Die aktuell im Dropdown ausgewählte Experten-ID für ein neues Teammitglied. */
  const [newMemberId, setNewMemberId] = useState('');
  /** Die aktuell ausgewählte RACI-Rolle für das neue Teammitglied. */
  const [newMemberRole, setNewMemberRole] = useState<'R' | 'A' | 'C' | 'I'>('R');
  /** Spezifischer UI-Validierungsfehler für die Teammitglied-Zuweisung. */
  const [memberError, setMemberError] = useState<string | null>(null);

  /**
   * `useEffect`-Hook, der bei vorhandener `projectId` die Projektdetails und die
   * Expertenliste parallel über `Promise.all` abfragt, filtert und für das Formular aufbereitet.
   */
  useEffect(() => {
    if (!projectId) {
      setError('Projekt-ID fehlt.');
      setLoading(false);
      return;
    }

    /**
     * Lädt Projektdaten und Expertenliste parallel aus den API-Routen.
     * Formatiert ISO-Zeitstempel in `YYYY-MM-DD` für HTML5-Date-Inputs um.
     * * @async
     */
    const loadData = async () => {
      try {
        setLoadingExperts(true);
        const [projectResponse, expertsResponse] = await Promise.all([
          fetch('/api/sandbox/list'),
          fetch('/api/users/list'),
        ]);

        const projectData = await projectResponse.json();
        const expertsData = await expertsResponse.json();

        if (!projectResponse.ok) {
          throw new Error(projectData?.error || 'Fehler beim Laden des Projekts.');
        }

        if (!expertsResponse.ok) {
          console.warn('Konnte Expert:innen nicht laden:', expertsData?.error);
        } else {
          setExpertOptions(
            Array.isArray(expertsData.experts)
              ? expertsData.experts.map((expert: any) => ({
                  id: String(expert.expert_id ?? expert.id ?? ''),
                  name: expert.name,
                }))
              : []
          );
        }

        const rawProject = Array.isArray(projectData.projects)
          ? projectData.projects.find((item: any) => String(item.id) === projectId)
          : null;

        if (!rawProject) {
          setError('Projekt nicht gefunden.');
          return;
        }

        setProject(createProjectDetails({
          id: String(rawProject.id),
          title: rawProject.title || '',
          description: rawProject.description || '',
          // ISO-String abschneiden, um das Datumsfeld im Browser korrekt zu befüllen
          startDate: rawProject.startDate ? new Date(rawProject.startDate).toISOString().slice(0, 10) : '',
          endDate: rawProject.endDate ? new Date(rawProject.endDate).toISOString().slice(0, 10) : '',
          state: rawProject.state || rawProject.project_state || '',
          project_state: rawProject.project_state || '',
          location: rawProject.location || '',
          websiteUrl: rawProject.websiteUrl || '',
          details: rawProject.details || '',
          experts: Array.isArray(rawProject.experts)
            ? rawProject.experts.map((expert: any) =>
                new ProjectMember(
                  String(expert.expert_id ?? expert.id ?? ''),
                  expert.name,
                  expert.role || 'R',
                )
              )
            : [],
        }));
      } catch (loadError: any) {
        setError(loadError?.message || 'Fehler beim Laden des Projekts.');
      } finally {
        setLoading(false);
        setLoadingExperts(false);
      }
    };

    loadData();
  }, [projectId]);

  /**
   * Generischer Change-Handler für Textfelder, Datumsfelder oder Auswahllisten des Projekts.
   * * @param field - Der Schlüssel der Eigenschaft im `project`-Zustand.
   * @param value - Der neue Wert für dieses Feld.
   */
  const handleChange = (field: keyof ProjectDetails, value: string) => {
    setProject((prev) => {
      const next = createProjectDetails({
        id: prev.id,
        title: prev.title,
        description: prev.description,
        startDate: prev.startDate,
        endDate: prev.endDate,
        state: prev.state,
        project_state: prev.project_state,
        location: prev.location,
        websiteUrl: prev.websiteUrl,
        details: prev.details,
        experts: prev.experts,
      });
      next[field] = value as any;
      return next;
    });
  };

  /**
   * Fügt den aktuell ausgewählten Experten dem `project.experts`-State hinzu.
   * Prüft vorab, ob eine Person selektiert wurde und ob sich diese bereits im Team befindet.
   */
  const handleAddMember = () => {
    setMemberError(null);
    if (!newMemberId) {
      setMemberError('Bitte eine Person auswählen.');
      return;
    }

    const selectedExpert = expertOptions.find((expert) => expert.id === newMemberId);
    if (!selectedExpert) {
      setMemberError('Ausgewählte Person nicht gefunden.');
      return;
    }

    // Duplikatsprüfung
    if (project.experts.some((member) => member.id === selectedExpert.id)) {
      setMemberError('Diese Person ist bereits im Projektteam.');
      return;
    }

    setProject((prev) => {
      const next = createProjectDetails({
        id: prev.id,
        title: prev.title,
        description: prev.description,
        startDate: prev.startDate,
        endDate: prev.endDate,
        state: prev.state,
        project_state: prev.project_state,
        location: prev.location,
        websiteUrl: prev.websiteUrl,
        details: prev.details,
        experts: [...prev.experts],
      });
      next.experts = [
        ...prev.experts,
        new ProjectMember(String(selectedExpert.id), selectedExpert.name, newMemberRole),
      ];
      return next;
    });
    
    // Reset der temporären Zuweisungs-States
    setNewMemberId('');
    setNewMemberRole('R');
  };

  /**
   * Entfernt ein zugewiesenes Mitglied basierend auf seiner ID aus der Teamliste.
   * * @param memberId - Die ID des zu entfernenden Experten.
   */
  const handleRemoveMember = (memberId: string) => {
    setProject((prev) => {
      const next = createProjectDetails({
        id: prev.id,
        title: prev.title,
        description: prev.description,
        startDate: prev.startDate,
        endDate: prev.endDate,
        state: prev.state,
        project_state: prev.project_state,
        location: prev.location,
        websiteUrl: prev.websiteUrl,
        details: prev.details,
        experts: prev.experts.filter((member) => member.id !== memberId),
      });
      return next;
    });
  };

  /**
   * Behandelt das Absenden des Formulars. Mappt die Formulardaten in das geforderte 
   * API-Format (u. a. Konvertierung von IDs zurück in Zahlen) und führt einen 
   * PATCH-Request auf `/api/sandbox/update` aus.
   * * @async
   * @param event - Das Formular-Submit-Event von React.
   */
  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      const response = await fetch('/api/sandbox/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project_id: Number(project.id),
          title: project.title,
          description: project.description,
          startDate: project.startDate || null,
          endDate: project.endDate || null,
          state: project.state,
          location: project.location,
          websiteUrl: project.websiteUrl,
          details: project.details,
          members: project.experts.map((member) => ({
            expertId: Number(member.id) || undefined,
            name: member.name,
            role: member.role,
          })),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Fehler beim Speichern des Projekts.');
      }

      router.push('/sandbox');
    } catch (saveError: any) {
      setError(saveError?.message || 'Fehler beim Speichern des Projekts.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <button
            type="button"
            onClick={() => router.back()}
            className="text-sm text-slate-500 hover:text-slate-900 transition"
          >
            Zurück zur Übersicht
          </button>
          <h1 className="mt-3 text-2xl font-bold text-black">Projekt-Details</h1>
          <p className="text-slate-500">Hier kannst du die Projektdaten prüfen und später aktualisieren.</p>
        </div>
      </div>

      {loading ? (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-500">Lade Projektdetails…</div>
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center text-red-700">{error}</div>
      ) : (
        <form onSubmit={handleSave} className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Projekttitel</label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Status</label>
              <input
                type="text"
                value={project.state}
                onChange={(e) => handleChange('state', e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Projektphase</label>
              <input
                type="text"
                value={project.project_state}
                onChange={(e) => handleChange('project_state', e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Standort</label>
              <input
                type="text"
                value={project.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Startdatum</label>
              <input
                type="date"
                value={project.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Enddatum</label>
              <input
                type="date"
                value={project.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Projektbeschreibung</label>
            <textarea
              rows={4}
              value={project.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Website</label>
            <input
              type="url"
              value={project.websiteUrl}
              onChange={(e) => handleChange('websiteUrl', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Details</label>
            <textarea
              rows={6}
              value={project.details}
              onChange={(e) => handleChange('details', e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
            />
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h4 className="font-bold text-black mb-4 flex items-center gap-2">
              <UserPlus size={18} className="text-blue-600" /> Verantwortliche und Beteiligte
            </h4>

            <div className="space-y-3 mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Name / Person</label>
                  <select
                    value={newMemberId}
                    onChange={(e) => setNewMemberId(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800 bg-white"
                  >
                    <option value="">-- Person auswählen --</option>
                    {loadingExperts ? (
                      <option value="" disabled>Lade Expert:innen…</option>
                    ) : expertOptions.length > 0 ? (
                      expertOptions.map((expert) => (
                        <option key={expert.id} value={expert.id}>{expert.name}</option>
                      ))
                    ) : (
                      <option value="" disabled>Keine Expert:innen gefunden</option>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">RACI Rolle</label>
                  <select
                    value={newMemberRole}
                    onChange={(e) => setNewMemberRole(e.target.value as 'R' | 'A' | 'C' | 'I')}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800 bg-white"
                  >
                    <option value="R">R - Responsible</option>
                    <option value="A">A - Accountable</option>
                    <option value="C">C - Consulted</option>
                    <option value="I">I - Informed</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                  >
                    Person hinzufügen
                  </button>
                </div>
              </div>

              {memberError && (
                <div className="text-sm text-red-600">{memberError}</div>
              )}
            </div>

            {project.experts.length > 0 ? (
              <div className="space-y-2">
                {project.experts.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 transition"
                  >
                    <div>
                      <p className="text-sm font-medium text-black">{member.name}</p>
                      <p className="text-xs text-slate-500">Rolle: {member.role}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(member.id)}
                      className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      Entfernen
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 text-center py-4 bg-slate-50 border border-slate-200 rounded-lg">
                Noch keine Personen im Projektteam. Füge Expert:innen hinzu.
              </p>
            )}
              <button type="button"
              onClick={() => router.push('/sandbox')}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
              Abbrechen
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isSaving ? 'Speichern…' : 'Änderungen speichern'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
