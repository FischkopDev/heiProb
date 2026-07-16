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
export class Challenge {
  /** Eindeutige ID der Challenge. */
  private _id: string;
  /** Der Titel oder die Überschrift der Challenge. */
  private _title: string;
  /** Das zuständige Amt oder die Abteilung. */
  private _department: string;
  /** Der aktuelle Status der Challenge (z. B. "Aktiv", "In Vorbereitung"). */
  private _status: string;

  constructor(id: string, title: string, department: string, status: string) {
    this._id = id;
    this._title = title;
    this._department = department;
    this._status = status;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get department(): string {
    return this._department;
  }

  set department(value: string) {
    this._department = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
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
export class Project {
  /** Eindeutige ID des Projekts. */
  private _id: string;
  /** Der Projekttitel. */
  private _title: string;
  /** Die aktuelle Projektphase oder Themen (z. B. "Test-Phase", "Technik"). */
  private _stage?: string;
  /** Alternativer Feldname für Themen oder Standort. */
  private _topics?: string;
  /** Der geografische Ort oder Stadtteil des Projekts. */
  private _location?: string;
  /** Eine Liste der Namen aller beteiligten Akteure/Experten. */
  private _actors?: string[];
  /** Ein dynamischer UI-Anzeigewert (Teaser-Text, URL oder formatiertes Update-Datum). */
  private _value?: string;

  constructor(
    id: string,
    title: string,
    stage?: string,
    topics?: string,
    location?: string,
    actors?: string[],
    value?: string,
  ) {
    this._id = id;
    this._title = title;
    this._stage = stage;
    this._topics = topics;
    this._location = location;
    this._actors = actors;
    this._value = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get stage(): string | undefined {
    return this._stage;
  }

  set stage(value: string | undefined) {
    this._stage = value;
  }

  get topics(): string | undefined {
    return this._topics;
  }

  set topics(value: string | undefined) {
    this._topics = value;
  }

  get location(): string | undefined {
    return this._location;
  }

  set location(value: string | undefined) {
    this._location = value;
  }

  get actors(): string[] | undefined {
    return this._actors;
  }

  set actors(value: string[] | undefined) {
    this._actors = value;
  }

  get value(): string | undefined {
    return this._value;
  }

  set value(value: string | undefined) {
    this._value = value;
  }
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
export class Expert {
  /** Eindeutige ID der Expert*in. */
  private _id: string;
  /** Der vollständige Name. */
  private _name: string;
  /** Die fachliche Rolle oder Kernkompetenz. */
  private _role: string;
  /** Eine Liste von spezifischen Fähigkeiten oder Schlagworten (Skills). */
  private _skills: string[];

  constructor(id: string, name: string, role: string, skills: string[]) {
    this._id = id;
    this._name = name;
    this._role = role;
    this._skills = skills;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get skills(): string[] {
    return this._skills;
  }

  set skills(value: string[]) {
    this._skills = value;
  }
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
export class ProblemItem {
  /** Eindeutige ID des Problems (Primärschlüssel). */
  private _id?: number;
  /** Alternativer Feldname für die Problem-ID. */
  private _problem_id?: number;
  /** Der Titel oder die Überschrift des Problems. */
  private _title: string;
  /** Kommagetrennte oder formatierte Tags/Schlagworte zur Verschlagwortung. */
  private _tags?: string;
  /** Die übergeordnete Kategorie des Problems. */
  private _category: string;
  /** Der aktuelle Bearbeitungsstatus. */
  private _status: 'Ungelöst' | 'In Bearbeitung' | 'Gelöst';
  /** Die dem Status zugewiesene UI-Farbe. */
  private _statusColor: 'amber' | 'green' | 'slate';
  /** Eine detaillierte Beschreibung des Problems oder kurze Zusammenfassung. */
  private _description?: string;
  /** Alternativer Feldname für Beschreibung. */
  private _summary?: string;
  /** Die Auswirkungen oder Konsequenzen, die das Problem verursacht. */
  private _impact?: string;
  /** Die betroffenen Personen, Abteilungen oder Stakeholder. */
  private _stakeholders?: string;
  /** Die nächsten geplanten Schritte zur Lösung des Problems. */
  private _nextSteps?: string;

  constructor(
    title: string,
    category: string,
    status: 'Ungelöst' | 'In Bearbeitung' | 'Gelöst',
    statusColor: 'amber' | 'green' | 'slate',
    id?: number,
    problem_id?: number,
    tags?: string,
    description?: string,
    summary?: string,
    impact?: string,
    stakeholders?: string,
    nextSteps?: string,
  ) {
    this._id = id;
    this._problem_id = problem_id;
    this._title = title;
    this._tags = tags;
    this._category = category;
    this._status = status;
    this._statusColor = statusColor;
    this._description = description;
    this._summary = summary;
    this._impact = impact;
    this._stakeholders = stakeholders;
    this._nextSteps = nextSteps;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get problem_id(): number | undefined {
    return this._problem_id;
  }

  set problem_id(value: number | undefined) {
    this._problem_id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get tags(): string | undefined {
    return this._tags;
  }

  set tags(value: string | undefined) {
    this._tags = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get status(): 'Ungelöst' | 'In Bearbeitung' | 'Gelöst' {
    return this._status;
  }

  set status(value: 'Ungelöst' | 'In Bearbeitung' | 'Gelöst') {
    this._status = value;
  }

  get statusColor(): 'amber' | 'green' | 'slate' {
    return this._statusColor;
  }

  set statusColor(value: 'amber' | 'green' | 'slate') {
    this._statusColor = value;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(value: string | undefined) {
    this._description = value;
  }

  get summary(): string | undefined {
    return this._summary;
  }

  set summary(value: string | undefined) {
    this._summary = value;
  }

  get impact(): string | undefined {
    return this._impact;
  }

  set impact(value: string | undefined) {
    this._impact = value;
  }

  get stakeholders(): string | undefined {
    return this._stakeholders;
  }

  set stakeholders(value: string | undefined) {
    this._stakeholders = value;
  }

  get nextSteps(): string | undefined {
    return this._nextSteps;
  }

  set nextSteps(value: string | undefined) {
    this._nextSteps = value;
  }
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
export class ProjectMember {
  /** Eindeutige temporäre ID für das UI-Mapping (z. B. generiert über `Date.now()`). */
  private _id: string;
  /** Die echte ID des Experten aus der Datenbank (optional). */
  private _expertId?: number;
  /** Der Name des Experten. */
  private _name: string;
  /** Die RACI-Rolle des Mitglieds im Projekt:
   * - `R`: Responsible (Durchführungsverantwortlich)
   * - `A`: Accountable (Kosten-/Gesamtverantwortlich)
   * - `C`: Consulted (Fachlich beratend)
   * - `I`: Informed (Zu informieren)
   */
  private _role: 'R' | 'A' | 'C' | 'I';

  constructor(id: string, name: string, role: 'R' | 'A' | 'C' | 'I', expertId?: number) {
    this._id = id;
    this._name = name;
    this._role = role;
    this._expertId = expertId;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get expertId(): number | undefined {
    return this._expertId;
  }

  set expertId(value: number | undefined) {
    this._expertId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get role(): 'R' | 'A' | 'C' | 'I' {
    return this._role;
  }

  set role(value: 'R' | 'A' | 'C' | 'I') {
    this._role = value;
  }
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
export class ExpertOption {
  /** Die ID des Experten (as number or string). */
  private _id: number | string;
  /** Der vollständige Name des Experten. */
  private _name: string;

  constructor(id: number | string, name: string) {
    this._id = id;
    this._name = name;
  }

  get id(): number | string {
    return this._id;
  }

  set id(value: number | string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
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
export class NewProject {
  /** Der Titel des Projekts. */
  private _title: string;
  /** Eine kurze Zusammenfassung oder Beschreibung des Projekts. */
  private _description: string;
  /** Das Startdatum des Projekts (Format: YYYY-MM-DD). */
  private _startDate: string;
  /** Das Enddatum des Projekts (Format: YYYY-MM-DD). */
  private _endDate: string;
  /** Der aktuelle Projektstatus (z. B. 'Ideen-Phase'). */
  private _state: string;
  /** Der geografische oder organisatorische Ort des Projekts. */
  private _location: string;
  /** Optionale URL zur Projekt-Website. */
  private _websiteUrl: string;
  /** Zusätzliche, detaillierte Projektinformationen. */
  private _details: string;
  /** Liste der dem Projekt zugewiesenen Mitglieder. */
  private _members: ProjectMember[];

  constructor(
    title: string,
    description: string,
    startDate: string,
    endDate: string,
    state: string,
    location: string,
    websiteUrl: string,
    details: string,
    members: ProjectMember[],
  ) {
    this._title = title;
    this._description = description;
    this._startDate = startDate;
    this._endDate = endDate;
    this._state = state;
    this._location = location;
    this._websiteUrl = websiteUrl;
    this._details = details;
    this._members = members;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get websiteUrl(): string {
    return this._websiteUrl;
  }

  set websiteUrl(value: string) {
    this._websiteUrl = value;
  }

  get details(): string {
    return this._details;
  }

  set details(value: string) {
    this._details = value;
  }

  get members(): ProjectMember[] {
    return this._members;
  }

  set members(value: ProjectMember[]) {
    this._members = value;
  }
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
export class ProjectDetails {
  /** Eindeutige ID des Projekts. */
  private _id: string;
  /** Der Projekttitel. */
  private _title: string;
  /** Kurze Zusammenfassung oder Beschreibung des Projekts. */
  private _description: string;
  /** Startdatum des Projekts (Format: YYYY-MM-DD). */
  private _startDate: string;
  /** Enddatum des Projekts (Format: YYYY-MM-DD). */
  private _endDate: string;
  /** Der aktuelle Projektstatus (z. B. 'Ideen-Phase'). */
  private _state: string;
  /** Alternativer oder datenbankspezifischer Projektstatus. */
  private _project_state?: string;
  /** Geografischer oder organisatorischer Standort des Projekts. */
  private _location: string;
  /** Optionale Projekt-Website-URL. */
  private _websiteUrl: string;
  /** Zusätzliche, detaillierte Projektbeschreibungen oder Notizen. */
  private _details: string;
  /** Liste aller dem Projekt zugewiesenen Experten. */
  private _experts: ProjectMember[];

  constructor(
    id: string,
    title: string,
    description: string,
    startDate: string,
    endDate: string,
    state: string,
    location: string,
    websiteUrl: string,
    details: string,
    experts: ProjectMember[],
    project_state?: string,
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._startDate = startDate;
    this._endDate = endDate;
    this._state = state;
    this._project_state = project_state;
    this._location = location;
    this._websiteUrl = websiteUrl;
    this._details = details;
    this._experts = experts;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get project_state(): string | undefined {
    return this._project_state;
  }

  set project_state(value: string | undefined) {
    this._project_state = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get websiteUrl(): string {
    return this._websiteUrl;
  }

  set websiteUrl(value: string) {
    this._websiteUrl = value;
  }

  get details(): string {
    return this._details;
  }

  set details(value: string) {
    this._details = value;
  }

  get experts(): ProjectMember[] {
    return this._experts;
  }

  set experts(value: ProjectMember[]) {
    this._experts = value;
  }
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
export class ExpertFormData {
  /** Der Nachname des Experten. */
  private _name: string;
  /** Der Vorname des Experten. */
  private _prename: string;
  /** Der Titel oder akademische Grad (z. B. "Prof. Dr."). */
  private _title: string;
  /** Die primäre Zugehörigkeit oder Organisation. */
  private _primary_organization: string;
  /** Weitere Zugehörigkeiten oder Organisationen (kommagetrennt). */
  private _other_organizations: string;
  /** Wissenschaftliche oder fachliche Arbeitsbereiche. */
  private _scientificAreas: string;
  /** Die E-Mail-Adresse des Experten. */
  private _email: string;
  /** Die Telefonnummer des Experten. */
  private _phone: string;
  /** Datum des letzten Kontakts (optional). */
  private _last_contact?: string;
  /** Eine detaillierte Beschreibung oder Kurzbiografie des Experten. */
  private _description: string;
  /** Spezifische Fachbereiche oder Felder, in denen der Experte tätig ist. */
  private _expert_fields: string;
  /** Indikator, ob der Experte im wirtschaftlichen Bereich tätig ist. */
  private _economic: boolean;
  /** Indikator, ob der Experte im wissenschaftlichen Bereich tätig ist. */
  private _science: boolean;
  /** Indikator, ob der Experte im sozialen Bereich tätig ist. */
  private _social: boolean;

  constructor(
    name: string,
    prename: string,
    title: string,
    primary_organization: string,
    other_organizations: string,
    scientificAreas: string,
    email: string,
    phone: string,
    description: string,
    expert_fields: string,
    economic: boolean,
    science: boolean,
    social: boolean,
    last_contact?: string,
  ) {
    this._name = name;
    this._prename = prename;
    this._title = title;
    this._primary_organization = primary_organization;
    this._other_organizations = other_organizations;
    this._scientificAreas = scientificAreas;
    this._email = email;
    this._phone = phone;
    this._last_contact = last_contact;
    this._description = description;
    this._expert_fields = expert_fields;
    this._economic = economic;
    this._science = science;
    this._social = social;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get prename(): string {
    return this._prename;
  }

  set prename(value: string) {
    this._prename = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get primary_organization(): string {
    return this._primary_organization;
  }

  set primary_organization(value: string) {
    this._primary_organization = value;
  }

  get other_organizations(): string {
    return this._other_organizations;
  }

  set other_organizations(value: string) {
    this._other_organizations = value;
  }

  get scientificAreas(): string {
    return this._scientificAreas;
  }

  set scientificAreas(value: string) {
    this._scientificAreas = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get last_contact(): string | undefined {
    return this._last_contact;
  }

  set last_contact(value: string | undefined) {
    this._last_contact = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get expert_fields(): string {
    return this._expert_fields;
  }

  set expert_fields(value: string) {
    this._expert_fields = value;
  }

  get economic(): boolean {
    return this._economic;
  }

  set economic(value: boolean) {
    this._economic = value;
  }

  get science(): boolean {
    return this._science;
  }

  set science(value: boolean) {
    this._science = value;
  }

  get social(): boolean {
    return this._social;
  }

  set social(value: boolean) {
    this._social = value;
  }
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
export class Organization {
  /** Eindeutige ID der Organisation. */
  private _id: number;
  /** Der Name der Organisation. */
  private _name: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}