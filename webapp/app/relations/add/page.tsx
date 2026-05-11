'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ExpertFormData } from '../Person';

interface AddExpertViewProps {
  onSave: (formData: ExpertFormData) => void;
  onCancel: () => void;
}

export default function AddExpertView({ onSave, onCancel }: AddExpertViewProps) {
  const [formData, setFormData] = useState<ExpertFormData>({
    name: '',
    prename: '',
    title: '',
    primary_organization: '',
    other_organizations: '',
    scientificAreas: '',
    email: '',
    phone: '',
    description: '',
    expert_fields: '',
    economic: false,
    science: false,
    social: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createUserInDB = async (expertData: ExpertFormData) => {
    try {

      const response = await fetch('/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: expertData.name,
          prename: expertData.prename,
          title: expertData.title,
          email: expertData.email,
          description: expertData.description,
          primary_organization: expertData.primary_organization,
          science: expertData.science,
          economic: expertData.economic,
          social: expertData.social
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || 'Failed to create expert');
      }

      console.log('Expert created successfully:', result.expert);
      return result.expert;
    } catch (error) {
      console.error('Error creating expert:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.prename || !formData.email || !formData.primary_organization) {
      alert('Bitte füllen Sie mindestens Name, Vorname, E-Mail und primäre Organisation aus.');
      return;
    }

    try {
      await createUserInDB(formData);
      onSave(formData);
    } catch (error: any) {
      alert(
        `Fehler beim Anlegen der Expert*in: ${
          error?.message || 'Unbekannter Fehler'
        }`
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition"
        >
          <ArrowLeft size={20} /> Zurück zum Experten-Netzwerk
        </button>
        <h1 className="text-2xl font-bold text-black">Expert*in hinzufügen</h1>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <p className="text-slate-500 mb-6">
          Erfassen Sie hier die Daten einer neuen Expert*in. Die Angaben werden nach dem Speichern in das Experten-Netzwerk übernommen.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="z.B. Mustermann"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Vorname *</label>
              <input
                type="text"
                name="prename"
                value={formData.prename}
                onChange={handleInputChange}
                placeholder="z.B. Max"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Titel</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="z.B. Dr. rer. nat."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Primäre Organisation *</label>
              <input
                type="text"
                name="primary_organization"
                value={formData.primary_organization}
                onChange={handleInputChange}
                placeholder="z.B. Universität Heidelberg"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">E-Mail *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="z.B. m.mustermann@uni-heidelberg.de"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Telefon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="z.B. +49 6221 12345"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Weitere Organisationen (komma-getrennt)</label>
            <input
              type="text"
              name="other_organizations"
              value={formData.other_organizations}
              onChange={handleInputChange}
              placeholder="z.B. Max-Planck-Institut, Tech-Consult GmbH"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Fachbereiche (komma-getrennt)</label>
            <textarea
              name="scientificAreas"
              value={formData.scientificAreas}
              onChange={handleInputChange}
              placeholder="z.B. Künstliche Intelligenz, Quantencomputing"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Expertise (komma-getrennt)</label>
            <textarea
              name="expert_fields"
              value={formData.expert_fields}
              onChange={handleInputChange}
              placeholder="z.B. Algorithmik, Datenanalyse"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Beschreibung</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="z.B. Langjährige Erfahrung in der Leitung von Forschungsprojekten..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Netzwerk-Verbindungen</label>
            <div className="space-y-2">
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  name="economic"
                  checked={formData.economic}
                  onChange={(e) => setFormData((prev) => ({ ...prev, economic: e.target.checked }))}
                  className="mr-2"
                />
                Wirtschaft
              </label>
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  name="science"
                  checked={formData.science}
                  onChange={(e) => setFormData((prev) => ({ ...prev, science: e.target.checked }))}
                  className="mr-2"
                />
                Wissenschaft
              </label>
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  name="social"
                  checked={formData.social}
                  onChange={(e) => setFormData((prev) => ({ ...prev, social: e.target.checked }))}
                  className="mr-2"
                />
                Soziales
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onCancel}
              className="w-full sm:w-auto px-4 py-2 text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition font-medium"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Expert*in hinzufügen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
