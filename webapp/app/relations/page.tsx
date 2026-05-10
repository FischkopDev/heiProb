"use client";

/**
 * @file ExpertenNetzwerkView.tsx
 * @brief React component and resulting UI component for displaying and filtering a network of experts in various scientific and professional fields.
 * 
 * This component provides a user interface to browse a list of experts in multiple scientific and professional fields. 
 * It includes functionality to filter experts by their primary organization, scientific areas, and specific expertise fields. The component 
 * also allows users to clear all applied filters and to trigger an action for adding new experts to the system.
 * 
  * @author Timo Skrobanek
 */

import { useState } from 'react';
import { Mail, Phone, MapPin, Plus, X } from 'lucide-react';
import { Expert, initialExperts } from './Person';

/**
 * @interface ExpertenNetzwerkViewProps
 * @brief Props for the ExpertenNetzwerkView component.
 */
interface ExpertenNetzwerkViewProps {
  /** @brief Array of expert objects to be rendered. */
  experts: Expert[];
  /** @brief Callback function triggered when the "Add Expert" button is clicked. */
  onAddExpert: () => void;
  /** @brief Callback function triggered when an existing expert should be edited. */
  onEditExpert: (expert: Expert) => void;
  /** @brief Callback function triggered when an existing expert should be deleted. */
  onDeleteExpert: (expertId: number) => void;
}

export default function RelationsPage() {
  const [experts, setExperts] = useState<Expert[]>(initialExperts);

  const handleAddExpert = () => {
    console.log('Add expert action triggered');
  };

  const handleEditExpert = (expert: Expert) => {
    console.log('Edit expert:', expert);
  };

  const handleDeleteExpert = (expertId: number) => {
    console.log('Delete expert with ID:', expertId);
    setExperts((prevExperts) => prevExperts.filter((expert) => expert.expert_id !== expertId));
  };

  return (
    <ExpertenNetzwerkView
      experts={experts}
      onAddExpert={handleAddExpert}
      onEditExpert={handleEditExpert}
      onDeleteExpert={handleDeleteExpert}
    />
  );
}

/**
 * @brief Main functional component for the Expert Network View.
 * 
 * @param props The component props including the list of experts and action handlers.
 * @returns JSX.Element containing the filter UI and the list of expert cards.
 * 
 * @details
 * State Management:
 * - selectedOrganizations: Stores active filters for primary organizations.
 * - selectedAreas: Stores active filters for scientific/academic sectors.
 * - selectedFields: Stores active filters for specific professional expertise.
 */
function ExpertenNetzwerkView({ experts, onAddExpert, onEditExpert, onDeleteExpert }: ExpertenNetzwerkViewProps) {
  
  /** @name State_Hooks Filter State Management */
  ///@{
  const [selectedOrganizations, setSelectedOrganizations] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  ///@}

  /**
   * @brief Extracts unique primary organizations from the expert list.
   * @note The resulting array is sorted alphabetically.
   */
  const uniqueOrganizations = Array.from(new Set(experts.map((e) => e.primary_organization))).sort();

  /**
   * @brief Extracts unique scientific areas by flattening the expert data.
   */
  const uniqueScientificAreas = Array.from(
    new Set(experts.flatMap((e) => e.scientificAreas))
  ).sort();

  /**
   * @brief Extracts unique expertise fields from all experts.
   */
  const uniqueExpertFields = Array.from(
    new Set(experts.flatMap((e) => e.expert_fields))
  ).sort();

  /**
   * @brief Utility function to toggle a filter value within a state array.
   * 
   * @param value The string value to add or remove.
   * @param selected The current array of selected values.
   * @param setter The state dispatch function to update the selection.
   */
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

  /**
   * @brief Main filtering logic for the expert list.
   * @details 
   * Uses an 'AND' logic between different categories and an 'OR' logic 
   * for multiple selections within the same category.
   */
  const filteredExperts = experts.filter((expert) => {
    const matchesOrganization =
      selectedOrganizations.length === 0 || selectedOrganizations.includes(expert.primary_organization);
    const matchesArea =
      selectedAreas.length === 0 ||
      expert.scientificAreas.some((area) => selectedAreas.includes(area));
    const matchesField =
      selectedFields.length === 0 || expert.expert_fields.some((field) => selectedFields.includes(field));

    return matchesOrganization && matchesArea && matchesField;
  });

  /**
   * @brief Boolean flag to check if any filters are currently applied.
   * Used to conditionally render the "Clear Filters" button.
   */
  const hasActiveFilters =
    selectedOrganizations.length > 0 || selectedAreas.length > 0 || selectedFields.length > 0;

  return (
    <>
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Experten-Netzwerk</h1>
            <p className="text-slate-500">
              Verzeichnis von Expert*innen aus verschiedenen Fachbereichen in der Forschung und Wirtschaft. Zur Suche nach Personen nutzen Sie die Filterfunktionen oder das oben dargestellte Suchfeld.
            </p>
          </div>
          <button
            onClick={onAddExpert}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm whitespace-nowrap"
          >
            <Plus size={18} /> Expert*innen hinzufügen
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="mb-8 space-y-4">
        {/* Organizations */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-3">Organisation</h3>
          <div className="flex flex-wrap gap-2">
            {uniqueOrganizations.map((org) => (
              <button
                key={org}
                onClick={() => toggleFilter(org, selectedOrganizations, setSelectedOrganizations)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition ${
                  selectedOrganizations.includes(org)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {org}
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

        {/* Expert Fields */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-3">Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {uniqueExpertFields.map((field) => (
              <button
                key={field}
                onClick={() => toggleFilter(field, selectedFields, setSelectedFields)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition ${
                  selectedFields.includes(field)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {field}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={() => {
              setSelectedOrganizations([]);
              setSelectedAreas([]);
              setSelectedFields([]);
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
              key={expert.expert_id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{expert.prename} {expert.name}</h3>
                  <p className="text-sm text-slate-600">{expert.title}</p>
                </div>
                <button className="px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                  Kontakt
                </button>
              </div>

              <div className="mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                  <MapPin size={16} className="text-slate-400" />
                  <span className="font-medium">{expert.primary_organization}</span>
                </div>
                {expert.other_organizations.length > 0 && (
                  <p className="text-xs text-slate-500 ml-6">
                    Weitere: {expert.other_organizations.join(', ')}
                  </p>
                )}
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

              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {expert.expert_fields.map((field) => (
                    <span
                      key={field}
                      className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              {expert.description && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Beschreibung</p>
                  <p className="text-sm text-slate-700">{expert.description}</p>
                </div>
              )}

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
