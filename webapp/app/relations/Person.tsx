'use client';

export interface Organization {
  organization_id: number;
  name: string;
  location?: string;
  field?: string;
  description?: string;
}

//Interface to represent the structure of an expert in the system, including all relevant fields and types
export interface Expert {
  expert_id: number;
  name: string;
  prename: string;
  title: string;
  primary_organization: string;
  other_organizations: string[];
  scientificAreas: string[];
  email: string;
  phone?: string;
  description: string;
  last_contact: string;
  expert_fields: string[];
  economic: boolean;
  science: boolean;
  social: boolean;
  organization?: Organization;
}

export interface ExpertFormData {
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
}

 export const getUserFromDB : () => Promise<Expert[]> = async () => {
    try {
      const response = await fetch('/api/users/list', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || 'Failed to read users');
      }

      if (Array.isArray(result.experts)) {
        return result.experts.map((expert: any) => ({
          ...expert,
          primary_organization: expert.organization?.name || expert.primary_organization || '',
          other_organizations: Array.isArray(expert.other_organizations) ? expert.other_organizations : [],
          scientificAreas: Array.isArray(expert.scientificAreas) ? expert.scientificAreas : [],
          expert_fields: Array.isArray(expert.expertFields) ? expert.expertFields : (Array.isArray(expert.expert_fields) ? expert.expert_fields : []),
          organization: expert.organization,
        }));
      }

      console.warn('Unexpected API payload, returning empty expert list:', result);
      return [];
    } catch (error) {
      console.error('Error reading user:', error);
      throw error;
    };
  };

//Sample Data to populate the expert network with initial entries, demonstrating the structure and content of the Expert interface
export const initialExperts: Expert[] = [
  {
    expert_id: 1,
    name: "Mustermann",
    prename: "Max",
    title: "Dr. rer. nat.",
    primary_organization: "Universität Heidelberg",
    other_organizations: ["Max-Planck-Institut", "Tech-Consult GmbH"],
    scientificAreas: ["Künstliche Intelligenz", "Quantencomputing"],
    email: "m.mustermann@uni-heidelberg.de",
    phone: "+49 123 456789",
    description: "Langjährige Erfahrung in der Leitung von Forschungsprojekten im Bereich Deep Learning.",
    last_contact: "2024-03-15T10:30:00Z",
    expert_fields: ["Algorithmik", "Datenanalyse"],
    economic: true,
    science: true,
    social: false
  },
  {
    expert_id: 2,
    name: "Schmidt",
    prename: "Sarah",
    title: "Prof. Dr.",
    primary_organization: "Charité Berlin",
    other_organizations: [],
    scientificAreas: ["Virologie", "Epidemiologie"],
    email: "sarah.schmidt@charite.de",
    description: "Expertin für Infektionskrankheiten und öffentliche Gesundheitssysteme.",
    last_contact: "2024-04-02T14:15:00Z",
    expert_fields: ["Krisenmanagement", "Public Health"],
    economic: false,
    science: true,
    social: true
  }
];
