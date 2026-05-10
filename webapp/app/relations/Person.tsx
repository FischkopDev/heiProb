'use client';

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
