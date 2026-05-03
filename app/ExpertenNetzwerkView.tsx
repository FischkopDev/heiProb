'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, X } from 'lucide-react';

interface Expert {
  id: number;
  name: string;
  title: string;
  institute: string;
  scientificAreas: string[];
  email: string;
  phone?: string;
  location: string;
}

const experts: Expert[] = [
  {
    id: 1,
    name: 'Dr. h.c. Max Muster',
    title: 'Professor für Urbane Akustik',
    institute: 'Universität Heidelberg',
    scientificAreas: ['Akustik', 'Stadtplanung', 'Umweltschutz'],
    email: 'max.muster@uni-heidelberg.de',
    phone: '+49 6221 12345',
    location: 'Heidelberg',
  },
  {
    id: 2,
    name: 'Dr. Lisa Schmidt',
    title: 'Projektleiter Smart City',
    institute: 'Hochschule Heilbronn',
    scientificAreas: ['IoT', 'Smart City', 'Datenanalyse'],
    email: 'l.schmidt@hs-heilbronn.de',
    phone: '+49 7131 67890',
    location: 'Heilbronn',
  },
  {
    id: 3,
    name: 'Prof. Dr. Peter Weber',
    title: 'Leiter Nachhaltigkeitsforschung',
    institute: 'Universität Mannheim',
    scientificAreas: ['Nachhaltigkeit', 'Ressourcenmanagement', 'Bewässerung'],
    email: 'p.weber@uni-mannheim.de',
    location: 'Mannheim',
  },
  {
    id: 4,
    name: 'Dr. Anna Goldstein',
    title: 'Expertin für Bürgerbeteiligung',
    institute: 'Karlsruhe Institut für Technologie (KIT)',
    scientificAreas: ['Partizipation', 'Governance', 'Community Engagement'],
    email: 'a.goldstein@kit.edu',
    phone: '+49 721 54321',
    location: 'Karlsruhe',
  },
];

// Extract unique categories
const uniqueLocations = Array.from(new Set(experts.map((e) => e.location))).sort();
const uniqueScientificAreas = Array.from(
  new Set(experts.flatMap((e) => e.scientificAreas))
).sort();
const uniqueInstitutes = Array.from(new Set(experts.map((e) => e.institute))).sort();

export default function ExpertenNetzwerkView() {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedInstitutes, setSelectedInstitutes] = useState<string[]>([]);

  const toggleFilter = (
    value: string,
    selected: string[],
    setter: (value: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setter(selected.filter((item) => item !== value));
    } else {
      setter([...selected, value]);
    }
  };

  const filteredExperts = experts.filter((expert) => {
    const matchesLocation =
      selectedLocations.length === 0 || selectedLocations.includes(expert.location);
    const matchesArea =
      selectedAreas.length === 0 ||
      expert.scientificAreas.some((area) => selectedAreas.includes(area));
    const matchesInstitute =
      selectedInstitutes.length === 0 || selectedInstitutes.includes(expert.institute);

    return matchesLocation && matchesArea && matchesInstitute;
  });

  const hasActiveFilters =
    selectedLocations.length > 0 || selectedAreas.length > 0 || selectedInstitutes.length > 0;

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Experten-Netzwerk</h1>
        <p className="text-slate-500">
          Verzeichnis von Fachexperten und Forschern aus verschiedenen Institutionen.
        </p>
      </div>

      {/* FILTERS */}
      <div className="mb-8 space-y-4">
        {/* Locations */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-3">Standort</h3>
          <div className="flex flex-wrap gap-2">
            {uniqueLocations.map((location) => (
              <button
                key={location}
                onClick={() => toggleFilter(location, selectedLocations, setSelectedLocations)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition ${
                  selectedLocations.includes(location)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Scientific Areas */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-3">Fachbereiche</h3>
          <div className="flex flex-wrap gap-2">
            {uniqueScientificAreas.map((area) => (
              <button
                key={area}
                onClick={() => toggleFilter(area, selectedAreas, setSelectedAreas)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition ${
                  selectedAreas.includes(area)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Institutes */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-3">Institution</h3>
          <div className="flex flex-wrap gap-2">
            {uniqueInstitutes.map((institute) => (
              <button
                key={institute}
                onClick={() => toggleFilter(institute, selectedInstitutes, setSelectedInstitutes)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition ${
                  selectedInstitutes.includes(institute)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {institute}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={() => {
              setSelectedLocations([]);
              setSelectedAreas([]);
              setSelectedInstitutes([]);
            }}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          >
            <X size={16} />
            Alle Filter löschen
          </button>
        )}
      </div>

      {/* RESULTS */}
      <div className="text-xs font-medium text-slate-500 mb-4">
        {filteredExperts.length} von {experts.length} Experten gefunden
      </div>

      <div className="space-y-4">
        {filteredExperts.length > 0 ? (
          filteredExperts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{expert.name}</h3>
                  <p className="text-sm text-slate-600">{expert.title}</p>
                </div>
                <button className="px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                  Kontakt
                </button>
              </div>

              <div className="mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                  <MapPin size={16} className="text-slate-400" />
                  <span className="font-medium">{expert.institute}</span>
                </div>
                <p className="text-xs text-slate-500 ml-6">{expert.location}</p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Fachbereiche</p>
                <div className="flex flex-wrap gap-2">
                  {expert.scientificAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-6 text-sm">
                <a
                  href={`mailto:${expert.email}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
                >
                  <Mail size={16} />
                  <span className="text-xs underline">{expert.email}</span>
                </a>
                {expert.phone && (
                  <a
                    href={`tel:${expert.phone}`}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
                  >
                    <Phone size={16} />
                    <span className="text-xs underline">{expert.phone}</span>
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 text-sm">
              Keine Experten gefunden, die Ihren Filterkriterien entsprechen.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

