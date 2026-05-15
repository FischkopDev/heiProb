"use client";

import React, { useState } from 'react';
import { PlusCircle, ArrowLeft, Calendar, FileText, MapPin, Link2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface NewProject {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  state: string;
  location: string;
  websiteUrl: string;
  details: string;
}

export default function AddProjectView() {
  const router = useRouter();
  const [formData, setFormData] = useState<NewProject>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    state: 'Ideen-Phase',
    location: '',
    websiteUrl: '',
    details: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.title.trim()) {
      setError('Der Projekttitel ist ein Pflichtfeld.');
      return;
    }

    const projectToSubmit = {
      ...formData,
      startDate: formData.startDate ? new Date(formData.startDate) : null,
      endDate: formData.endDate ? new Date(formData.endDate) : null,
      lastUpdate: new Date(),
    };

    console.log('Submitting Project to DB:', projectToSubmit);
    alert('Projekt erfolgreich angelegt! (Konsole prüfen)');
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
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition"
            >
              Projekt speichern
            </button>
          </div>
        </form>
      </div>
    </>
  );
}