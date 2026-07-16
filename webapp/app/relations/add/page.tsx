'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ExpertFormData, AddExpertViewProps } from '@/lib/types';

const createExpertFormData = (data: {
  name: string;
  prename: string;
  title: string;
  primary_organization: string;
  other_organizations: string;
  scientificAreas: string;
  email: string;
  phone: string;
  description: string;
  expert_fields: string;
  economic: boolean;
  science: boolean;
  social: boolean;
  last_contact?: string;
}): ExpertFormData => {
  return new ExpertFormData(
    data.name,
    data.prename,
    data.title,
    data.primary_organization,
    data.other_organizations,
    data.scientificAreas,
    data.email,
    data.phone,
    data.description,
    data.expert_fields,
    data.economic,
    data.science,
    data.social,
    data.last_contact,
  );
};

const cloneExpertFormData = (prev: ExpertFormData): ExpertFormData =>
  createExpertFormData({
    name: prev.name,
    prename: prev.prename,
    title: prev.title,
    primary_organization: prev.primary_organization,
    other_organizations: prev.other_organizations,
    scientificAreas: prev.scientificAreas,
    email: prev.email,
    phone: prev.phone,
    description: prev.description,
    expert_fields: prev.expert_fields,
    economic: prev.economic,
    science: prev.science,
    social: prev.social,
    last_contact: prev.last_contact,
  });

/**
 * Eine Next.js-Client-Komponente, die ein Formular zum Erstellen und Speichern 
 * eines neuen Experten-Profils bereitstellt. Die Daten werden sowohl an die Datenbank 
 * übertragen als auch über Callbacks an die übergeordnete Komponente zurückgegeben.
 * * @param props - Die Props für die Komponente.
 * @returns Ein gerendertes UI-Formular für die Expertenerfassung.
 */
export default function AddExpertView({ onSave, onCancel }: AddExpertViewProps) {
  const router = useRouter();

  /**
   * Lokaler State für die Formulardaten der Expert*in.
   * Initialisiert mit leeren Standardwerten basierend auf dem Typ {@link ExpertFormData}.
   */
  const [formData, setFormData] = useState<ExpertFormData>(() =>
    createExpertFormData({
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
    }),
  );

  /**
   * Lokaler State für den Bereich oder das Fachgebiet der Organisation (z. B. eine Abteilung oder ein spezifisches Feld).
   */
  const [organizationField, setOrganizationField] = useState<string>('');

  /**
   * Generischer Change-Handler für alle standardmäßigen Texteingabefelder (Input und Textarea).
   * Aktualisiert den `formData`-State dynamisch anhand des `name`-Attributs des HTML-Elements.
   * * @param e - Das Change-Event des Input- oder Textarea-Elements.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = cloneExpertFormData(prev);
      (next as any)[name] = value;
      return next;
    });
  };

  /**
   * Sendet die Expertendaten asynchron per POST-Request an die API-Route `/api/users/create`.
   * Formatiert dabei kommagetrennte Strings (Expertenfelder) in ein Array um.
   * * @async
   * @param expertData - Die rohen Formulardaten aus dem Komponentenzustand.
   * @returns Verspricht (Promise) das vom Server erstellte und zurückgegebene Experten-Objekt.
   * @throws {Error} Wenn die Server-Antwort nicht erfolgreich (ok) ist oder ein Netzwerkfehler auftritt.
   */
  const createUserInDB = async (expertData: ExpertFormData) => {
    try {
      // Wandelt den kommagetrennten String in ein bereinigtes Array um
      const expertFields = expertData.expert_fields
        .split(',')
        .map((field) => field.trim())
        .filter((field) => field.length > 0);

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
          organization_field: organizationField,
          science: expertData.science,
          economic: expertData.economic,
          social: expertData.social,
          expertFields: expertFields
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

  /**
   * Behandelt das Absenden (Submit) des Formulars.
   * Überprüft die Pflichtfelder, stößt den DB-Upload an und ruft bei Erfolg das `onSave`-Callback auf.
   * * @async
   * @param e - Das Formular-Submit-Event von React.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validierung der minimalen Pflichtfelder vor dem Absenden
    if (!formData.name || !formData.prename || !formData.email || !formData.primary_organization) {
      alert('Bitte füllen Sie mindestens Name, Vorname, E-Mail und primäre Organisation aus.');
      return;
    }

    try {
      await createUserInDB(formData);
      if (onSave) {
        onSave(formData);
      } else {
        router.push('/relations');
      }
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
          onClick={() => {
            if (onCancel) {
              onCancel();
            } else {
              router.push('/relations');
            }
          }}
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">Organisationsfeld / Sektor</label>
              <input
                type="text"
                value={organizationField}
                onChange={(e) => setOrganizationField(e.target.value)}
                placeholder="z.B. IT, Forschung, Biotechnologie"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email*</label>
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
                  onChange={(e) => setFormData((prev) => {
                    const next = cloneExpertFormData(prev);
                    next.economic = e.target.checked;
                    return next;
                  })}
                  className="mr-2"
                />
                Wirtschaft
              </label>
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  name="science"
                  checked={formData.science}
                  onChange={(e) => setFormData((prev) => {
                    const next = cloneExpertFormData(prev);
                    next.science = e.target.checked;
                    return next;
                  })}
                  className="mr-2"
                />
                Wissenschaft
              </label>
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  name="social"
                  checked={formData.social}
                  onChange={(e) => setFormData((prev) => {
                    const next = cloneExpertFormData(prev);
                    next.social = e.target.checked;
                    return next;
                  })}
                  className="mr-2"
                />
                Soziales
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => {
                if (onCancel) {
                  onCancel();
                } else {
                  router.push('/relations');
                }
              }}
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
