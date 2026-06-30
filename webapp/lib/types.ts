/**
 * Repräsentiert eine städtische oder organisatorische Herausforderung (Challenge).
 * * ```mermaid
 * classDiagram
 * class Challenge {
 * +string id
 * +string title
 * +string department
 * +string status
 * }
 * ```
 */
export interface Challenge {
  /** Eindeutige ID der Challenge. */
  id: string;
  /** Der Titel oder die Überschrift der Challenge. */
  title: string;
  /** Das zuständige Amt oder die Abteilung. */
  department: string;
  /** Der aktuelle Status der Challenge (z. B. "Aktiv", "In Vorbereitung"). */
  status: string;
}

/**
 * Repräsentiert ein registriertes (Smart-City-)Projekt.
 * * ```mermaid
 * classDiagram
 * class Project {
 * +string id
 * +string title
 * +string stage
 * +string topics
 * +string location
 * +string[] actors
 * +string value
 * }
 * ```
 */
export interface Project {
  /** Eindeutige ID des Projekts. */
  id: string;
  /** Der Projekttitel. */
  title: string;
  /** Die aktuelle Projektphase oder Themen (z. B. "Test-Phase", "Technik"). */
  stage?: string;
  /** Alternativer Feldname für Themen oder Standort. */
  topics?: string;
  /** Der geografische Ort oder Stadtteil des Projekts. */
  location?: string;
  /** Eine Liste der Namen aller beteiligten Akteure/Experten. */
  actors?: string[];
  /** Ein dynamischer UI-Anzeigewert (Teaser-Text, URL oder formatiertes Update-Datum). */
  value?: string;
}

/**
 * Repräsentiert ein Profil einer Expert*in oder einer Ansprechperson.
 * * ```mermaid
 * classDiagram
 * class Expert {
 * +string id
 * +string name
 * +string role
 * +string[] skills
 * }
 * ```
 */
export interface Expert {
  /** Eindeutige ID der Expert*in. */
  id: string;
  /** Der vollständige Name. */
  name: string;
  /** Die fachliche Rolle oder Kernkompetenz. */
  role: string;
  /** Eine Liste von spezifischen Fähigkeiten oder Schlagworten (Skills). */
  skills: string[];
}

/**
 * Repräsentiert eine Herausforderung oder ein Problem im System.
 * * ```mermaid
 * classDiagram
 * class ProblemItem {
 * +number id
 * +number problem_id
 * +string title
 * +string tags
 * +string category
 * +string status
 * +string statusColor
 * +string description
 * +string summary
 * +string impact
 * +string stakeholders
 * +string nextSteps
 * }
 * ```
 */
export interface ProblemItem {
  /** Eindeutige ID des Problems (Primärschlüssel). */
  id?: number;
  /** Alternativer Feldname für die Problem-ID. */
  problem_id?: number;
  /** Der Titel oder die Überschrift des Problems. */
  title: string;
  /** Kommagetrennte oder formatierte Tags/Schlagworte zur Verschlagwortung. */
  tags?: string;
  /** Die übergeordnete Kategorie des Problems. */
  category: string;
  /** Der aktuelle Bearbeitungsstatus. */
  status: 'Ungelöst' | 'In Bearbeitung' | 'Gelöst';
  /** Die dem Status zugewiesene UI-Farbe. */
  statusColor: 'amber' | 'green' | 'slate';
  /** Eine detaillierte Beschreibung des Problems oder kurze Zusammenfassung. */
  description?: string;
  /** Alternativer Feldname für Beschreibung. */
  summary?: string;
  /** Die Auswirkungen oder Konsequenzen, die das Problem verursacht. */
  impact?: string;
  /** Die betroffenen Personen, Abteilungen oder Stakeholder. */
  stakeholders?: string;
  /** Die nächsten geplanten Schritte zur Lösung des Problems. */
  nextSteps?: string;
}

/**
 * Repräsentiert ein Mitglied innerhalb eines Projekts inklusive seiner RACI-Rolle.
 * * ```mermaid
 * classDiagram
 * class ProjectMember {
 * +string id
 * +number expertId
 * +string name
 * +string role
 * }
 * ```
 */
export interface ProjectMember {
  /** Eindeutige temporäre ID für das UI-Mapping (z. B. generiert über `Date.now()`). */
  id: string;
  /** Die echte ID des Experten aus der Datenbank (optional). */
  expertId?: number;
  /** Der Name des Experten. */
  name: string;
  /** Die RACI-Rolle des Mitglieds im Projekt:
   * - `R`: Responsible (Durchführungsverantwortlich)
   * - `A`: Accountable (Kosten-/Gesamtverantwortlich)
   * - `C`: Consulted (Fachlich beratend)
   * - `I`: Informed (Zu informieren)
   */
  role: 'R' | 'A' | 'C' | 'I';
}

/**
 * Struktur für die Auswahlliste (Dropdown) der verfügbaren Experten.
 * * ```mermaid
 * classDiagram
 * class ExpertOption {
 * +id: number | string
 * +string name
 * }
 * ```
 */
export interface ExpertOption {
  /** Die ID des Experten (as number or string). */
  id: number | string;
  /** Der vollständige Name des Experten. */
  name: string;
}

/**
 * Struktur für das State-Objekt eines neu anzulegenden Projekts.
 * * ```mermaid
 * classDiagram
 * direction LR
 * NewProject "1" --* "many" ProjectMember : enthält
 * class NewProject {
 * +string title
 * +string description
 * +string startDate
 * +string endDate
 * +string state
 * +string location
 * +string websiteUrl
 * +string details
 * +ProjectMember[] members
 * }
 * ```
 */
export interface NewProject {
  /** Der Titel des Projekts. */
  title: string;
  /** Eine kurze Zusammenfassung oder Beschreibung des Projekts. */
  description: string;
  /** Das Startdatum des Projekts (Format: YYYY-MM-DD). */
  startDate: string;
  /** Das Enddatum des Projekts (Format: YYYY-MM-DD). */
  endDate: string;
  /** Der aktuelle Projektstatus (z. B. 'Ideen-Phase'). */
  state: string;
  /** Der geografische oder organisatorische Ort des Projekts. */
  location: string;
  /** Optionale URL zur Projekt-Website. */
  websiteUrl: string;
  /** Zusätzliche, detaillierte Projektinformationen. */
  details: string;
  /** Liste der dem Projekt zugewiesenen Mitglieder. */
  members: ProjectMember[];
}

/**
 * Struktur für die vollständigen Details eines Projekts.
 * * ```mermaid
 * classDiagram
 * direction LR
 * ProjectDetails "1" --* "many" ProjectMember : besitzt
 * class ProjectDetails {
 * +string id
 * +string title
 * +string description
 * +string startDate
 * +string endDate
 * +string state
 * +string project_state
 * +string location
 * +string websiteUrl
 * +string details
 * +ProjectMember[] experts
 * }
 * ```
 */
export interface ProjectDetails {
  /** Eindeutige ID des Projekts. */
  id: string;
  /** Der Projekttitel. */
  title: string;
  /** Kurze Zusammenfassung oder Beschreibung des Projekts. */
  description: string;
  /** Startdatum des Projekts (Format: YYYY-MM-DD). */
  startDate: string;
  /** Enddatum des Projekts (Format: YYYY-MM-DD). */
  endDate: string;
  /** Der aktuelle Projektstatus (z. B. 'Ideen-Phase'). */
  state: string;
  /** Alternativer oder datenbankspezifischer Projektstatus. */
  project_state?: string;
  /** Geografischer oder organisatorischer Standort des Projekts. */
  location: string;
  /** Optionale Projekt-Website-URL. */
  websiteUrl: string;
  /** Zusätzliche, detaillierte Projektbeschreibungen oder Notizen. */
  details: string;
  /** Liste aller dem Projekt zugewiesenen Experten. */
  experts: ProjectMember[];
}

/**
 * Eigenschaften (Props) für eine Komponente zum Hinzufügen oder Bearbeiten eines Experten.
 * Callbacks sind optional, da die Komponente alternativ integrierte Fallback-Navigation besitzt.
 * * ```mermaid
 * classDiagram
 * direction LR
 * AddExpertViewProps ..> ExpertFormData : nutzt
 * class AddExpertViewProps {
 * +onSave(formData: ExpertFormData) void
 * +onCancel() void
 * }
 * ```
 */
export interface AddExpertViewProps {
  /**
   * Callback-Funktion, die aufgerufen wird, wenn die Expertendaten erfolgreich validiert und gespeichert wurden.
   * @param formData - Die eingegebenen Formulardaten des Experten.
   */
  onSave?: (formData: ExpertFormData) => void;
  /**
   * Callback-Funktion, um den Vorgang abzubrechen und zur vorherigen Ansicht zurückzukehren.
   */
  onCancel?: () => void;
}

/**
 * Formulardaten-Struktur für Expert*innen.
 * * ```mermaid
 * classDiagram
 * class ExpertFormData {
 * +string name
 * +string prename
 * +string title
 * +string primary_organization
 * +string other_organizations
 * +string scientificAreas
 * +string email
 * +string phone
 * +string last_contact
 * +string description
 * +string expert_fields
 * +boolean economic
 * +boolean science
 * +boolean social
 * }
 * ```
 */
export interface ExpertFormData {
  /** Der Nachname des Experten. */
  name: string;
  /** Der Vorname des Experten. */
  prename: string;
  /** Der Titel oder akademische Grad (z. B. "Prof. Dr."). */
  title: string;
  /** Die primäre Zugehörigkeit oder Organisation. */
  primary_organization: string;
  /** Weitere Zugehörigkeiten oder Organisationen (kommagetrennt). */
  other_organizations: string;
  /** Wissenschaftliche oder fachliche Arbeitsbereiche. */
  scientificAreas: string;
  /** Die E-Mail-Adresse des Experten. */
  email: string;
  /** Die Telefonnummer des Experten. */
  phone: string;
  /** Datum des letzten Kontakts (optional). */
  last_contact?: string;
  /** Eine detaillierte Beschreibung oder Kurzbiografie des Experten. */
  description: string;
  /** Spezifische Fachbereiche oder Felder, in denen der Experte tätig ist. */
  expert_fields: string;
  /** Indikator, ob der Experte im wirtschaftlichen Bereich tätig ist. */
  economic: boolean;
  /** Indikator, ob der Experte im wissenschaftlichen Bereich tätig ist. */
  science: boolean;
  /** Indikator, ob der Experte im sozialen Bereich tätig ist. */
  social: boolean;
}

/**
 * Eigenschaften (Props) für die Komponente, die eine Netzwerk-/Beziehungsübersicht anzeigt.
 * * ```mermaid
 * classDiagram
 * class ExpertenNetzwerkViewProps {
 * +unknown key
 * }
 * ```
 */
export interface ExpertenNetzwerkViewProps {
  /** Versionsinformation oder zusätzliche Kontextdaten (optional). */
  [key: string]: unknown;
}

/**
 * Repräsentiert eine Organisation.
 * * ```mermaid
 * classDiagram
 * class Organization {
 * +number id
 * +string name
 * }
 * ```
 */
export interface Organization {
  /** Eindeutige ID der Organisation. */
  id: number;
  /** Der Name der Organisation. */
  name: string;
}