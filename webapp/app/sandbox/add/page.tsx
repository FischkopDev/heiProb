"use client";

import React, { useEffect, useState } from 'react';
import { PlusCircle, ArrowLeft, Calendar, FileText, MapPin, Link2, Trash2, UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ProjectMember, ExpertOption, NewProject } from '@/lib/types';

/**
 * Repräsentiert ein Mitglied innerhalb eines Projekts inklusive seiner RACI-Rolle.
 */

/**
 * Eine Next.js-Client-Komponente, die eine Eingabemaske zum Erstellen neuer Projekte bietet.
 * Ermöglicht die Pflege von Metadaten sowie die dynamische Zuordnung von Experten über ein RACI-Rollenmodell.
 * * @returns Ein gerendertes Formular zur Projekterstellung.
 */
export default function AddProjectView() {
  /** Next.js Router für die clientseitige Navigation nach erfolgreichem Speichern. */
  const router = useRouter();

  /** Haupt-Formularstate für das neue Projekt. */
  const [formData, setFormData] = useState<NewProject>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    state: 'Ideen-Phase',
    location: '',
    websiteUrl: '',
    details: '',
    members: [],
  });

  /** Hält die aktuell im Dropdown ausgewählte Experten-ID für ein neues Mitglied. */
  const [newMemberId, setNewMemberId] = useState('');
  
  /** Hält die aktuell im Dropdown ausgewählte RACI-Rolle für ein neues Mitglied. */
  const [newMemberRole, setNewMemberRole] = useState<'R' | 'A' | 'C' | 'I'>('R');
  
  /** Liste aller verfügbaren Experten, die aus der API für das Dropdown geladen wurden. */
  const [expertOptions, setExpertOptions] = useState<ExpertOption[]>([]);
  
  /** Ladezustand während die Expertenliste initialisiert wird. */
  const [loadingExperts, setLoadingExperts] = useState(false);
  
  /** Allgemeine Fehlermeldung für Validierungs- oder API-Fehler im UI. */
  const [error, setError] = useState<string | null>(null);
  
  /** Status, ob das Formular aktuell an das Backend übertragen wird (verhindert Doppel-Submits). */
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * `useEffect`-Hook, der beim Mounten der Komponente alle existierenden Experten
   * von der Route `/api/users/list` abruft, um das Zuweisungs-Dropdown zu befüllen.
   */
  useEffect(() => {
    /**
     * Ruft die Experten ab und mappt diese auf das {@link ExpertOption}-Format.
     * * @async
     */
    const loadExperts = async () => {
      setLoadingExperts(true);
      try {
        const response = await fetch('/api/users/list');
        const data = await response.json();

        if (response.ok && data?.experts) {
          setExpertOptions(data.experts.map((expert: any) => ({
            id: expert.expert_id ?? expert.id,
            name: expert.name,
          })));
        } else {
          console.error('Could not load expert list', data);
        }
      } catch (fetchError) {
        console.error('Error loading expert list:', fetchError);
      } finally {
        setLoadingExperts(false);
      }
    };

    loadExperts();
  }, []);

  /**
   * Generischer Event-Handler für Standard-Formularfelder (Inputs, Textareas und Selects).
   * Aktualisiert den `formData`-State basierend auf dem HTML-Attribut `name`.
   * * @param e - Das Change-Event des geänderten Formular-Elements.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Fügt den aktuell ausgewählten Experten mit der definierten RACI-Rolle 
   * der lokalen Mitgliederliste des Projekts (`formData.members`) hinzu.
   * Führt vorab Validierungen durch.
   */
  const handleAddMember = () => {
    if (!newMemberId) {
      setError('Bitte eine Person aus der Liste auswählen.');
      return;
    }

    const selectedExpert = expertOptions.find((expert) => expert.id.toString() === newMemberId);
    if (!selectedExpert) {
      setError('Ausgewählte Person konnte nicht gefunden werden.');
      return;
    }

    const newMember: ProjectMember = {
      id: Date.now().toString(),
      expertId: typeof selectedExpert.id === 'number' ? selectedExpert.id : Number(selectedExpert.id),
      name: selectedExpert.name,
      role: newMemberRole,
    };

    setFormData((prev) => ({
      ...prev,
      members: [...prev.members, newMember],
    }));

    // Reset der temporären Auswahl-States
    setNewMemberId('');
    setNewMemberRole('R');
    setError(null);
  };

  /**
   * Entfernt ein zugewiesenes Mitglied anhand seiner temporären UI-ID aus der Projektliste.
   * * @param memberId - Die temporäre ID (`id`) des zu entfernenden Mitglieds.
   */
  const handleRemoveMember = (memberId: string) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.filter((m) => m.id !== memberId),
    }));
  };

  /**
   * Ändert die RACI-Rolle eines bereits zugewiesenen Projektmitglieds.
   * * @param memberId - Die temporäre ID (`id`) des betroffenen Mitglieds.
   * @param newRole - Die neu zuzuweisende RACI-Rolle (`R`, `A`, `C` oder `I`).
   */
  const handleMemberRoleChange = (memberId: string, newRole: 'R' | 'A' | 'C' | 'I') => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.map((m) =>
        m.id === memberId ? { ...m, role: newRole } : m
      ),
    }));
  };

  /**
   * Behandelt das Absenden des Projektformulars. Validiert den Titel, formatiert
   * Datumsangaben in ISO-Strings, bereinigt die Payload und sendet sie per 
   * POST-Request an die Sandbox-API `/api/sandbox/add`.
   * * @async
   * @param e - Das Formular-Submit-Event von React.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    if (!formData.title.trim()) {
      setError('Der Projekttitel ist ein Pflichtfeld.');
      setIsSubmitting(false);
      return;
    }

    // Payload-Vorbereitung mit ISO-Konvertierung und Null-Fallbacks für optionale Felder
    const projectToSubmit = {
      title: formData.title,
      description: formData.description || null,
      startDate: formData.startDate ? new Date(formData.startDate).toISOString() : null,
      endDate: formData.endDate ? new Date(formData.endDate).toISOString() : null,
      state: formData.state,
      location: formData.location || null,
      websiteUrl: formData.websiteUrl || null,
      details: formData.details || null,
      members: formData.members.map(({ expertId, name, role }) => ({ expertId, name, role })),
      lastUpdate: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/sandbox/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectToSubmit),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || 'Fehler beim Speichern des Projekts.');
      }

      console.log('Projekt erfolgreich erstellt:', result);
      router.push('/sandbox');
    } catch (err: any) {
      console.error('Error submitting project:', err);
      setError(err?.message || 'Ein unerwarteter Fehler ist aufgetreten.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-blue-600 transition mb-2"
          >
            <ArrowLeft size={14} /> Zurück zum Dashboard
          </button>
          <h1 className="text-2xl font-bold text-black">Neues Sandbox-Projekt anlegen</h1>
          <p className="text-slate-500">Füge der Sandbox-City Heidelberg eine neue Herausforderung hinzu.</p>
        </div>
      </div>

      {/* FORM CARD (max-w-3xl entfernt für maximale Breite) */}
      <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-white">
          <h3 className="font-bold text-black flex items-center gap-2">
            <PlusCircle size={18} className="text-blue-600" /> Projektdetails ausfüllen
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Projekttitel *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="z.B. Intelligente Mülltonnen Altstadt"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Kurzbeschreibung</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Kurze Zusammenfassung des Projektziels..."
              rows={3}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
            />
          </div>

          {/* Grid für Status, Location & Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* State */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Projektstadium</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800 bg-white"
              >
                <option value="Ideen-Phase">Ideen-Phase</option>
                <option value="Challenge-Phase">Challenge-Phase</option>
                <option value="Reallabor-Phase">Reallabor-Phase</option>
                <option value="Test-Phase">Test-Phase</option>
                <option value="Rollout-Phase">Rollout-Phase</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2 flex items-center gap-1">
                <MapPin size={12} /> Standort / Quartier
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="z.B. Heidelberg-Altstadt, Bahnstadt"
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
              />
            </div>
          </div>

          {/* Grid für Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Start Date */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2 flex items-center gap-1">
                <Calendar size={12} /> Startdatum
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2 flex items-center gap-1">
                <Calendar size={12} /> Enddatum (geplant)
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
              />
            </div>
          </div>

          {/* Website URL */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2 flex items-center gap-1">
              <Link2 size={12} /> Projekt-Website (URL)
            </label>
            <input
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              placeholder="https://sandbox.heidelberg.de/projekt"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2 flex items-center gap-1">
              <FileText size={12} /> Ausführliche Details / Spezifikationen
            </label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Technische Details, beteiligte Sensorik, Zielmetriken..."
              rows={5}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
            />
          </div>

          {/* Team Members Section */}
          <div className="border-t border-slate-100 pt-6">
            <h4 className="font-bold text-black mb-4 flex items-center gap-2">
              <UserPlus size={18} className="text-blue-600" /> Projektteam (RACI Matrix)
            </h4>

            {/* Add Member Form */}
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
                    <option value="R">R - Responsible (Durchführung)</option>
                    <option value="A">A - Accountable (Verantwortlich)</option>
                    <option value="C">C - Consulted (Konsultiert)</option>
                    <option value="I">I - Informed (Informiert)</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition"
                  >
                    Person hinzufügen
                  </button>
                </div>
              </div>
            </div>

            {/* Team Members List */}
            {formData.members.length > 0 ? (
              <div className="space-y-2">
                {formData.members.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 transition"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-black">{member.name}</p>
                    </div>

                    <select
                      value={member.role}
                      onChange={(e) => handleMemberRoleChange(member.id, e.target.value as 'R' | 'A' | 'C' | 'I')}
                      className="px-3 py-1 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-800 bg-white mr-2"
                    >
                      <option value="R">R - Responsible</option>
                      <option value="A">A - Accountable</option>
                      <option value="C">C - Consulted</option>
                      <option value="I">I - Informed</option>
                    </select>

                    <button
                      type="button"
                      onClick={() => handleRemoveMember(member.id)}
                      className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Person entfernen"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 text-center py-4 bg-slate-50 border border-slate-200 rounded-lg">
                Noch keine Personen hinzugefügt. Füge Teamkollegen zur RACI Matrix hinzu.
              </p>
            )}
          </div>

          {/* FOOTER ACTIONS */}
          <div className="pt-4 border-t border-slate-100 flex justify-end gap-3 bg-white">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-200 transition"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Speichern…' : 'Projekt speichern'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}