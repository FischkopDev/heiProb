-- =============================================================================
-- 1. ALTE DATEN LÖSCHEN (Kaskadierend von den Relationen zu den Haupttabellen)
-- =============================================================================
TRUNCATE TABLE "ProjectRelation", "ExpertField", "Expert", "Organization", "Project", "Problem", "Test" RESTART IDENTITY CASCADE;

-- =============================================================================
-- 2. ORGANISATIONEN EINFÜGEN
-- =============================================================================
INSERT INTO "Organization" (organization_id, name, location, field, description) VALUES
(1, 'Amt für Umweltschutz und Energie', 'Heidelberg', 'Öffentliche Verwaltung', 'Zuständig für Klimaschutzkonzepte und städtische Nachhaltigkeit.'),
(2, 'Tech-Innovation Hub GmbH', 'Bahnstadt', 'Wirtschaft & IT', 'Entwicklung von IoT-Infrastruktur und Smart-City-Komponenten.'),
(3, 'Universität Heidelberg - Geographisches Institut', 'Neuenheim', 'Wissenschaft & Forschung', 'Forschungsschwerpunkte: Hydro-Klimatologie und Urbane Räume.');

-- =============================================================================
-- 3. EXPERTEN EINFÜGEN
-- =============================================================================
INSERT INTO "Expert" (expert_id, name, prename, title, email, number, description, location, last_contact, economic, science, social, primary_organization_id) VALUES
(1, 'Lorenz', 'Maria', 'Dr.', 'm.lorenz@umweltamt-hd.de', '+49 6221 123456', 'Expertin für urbane Mobilität und CO2-Reduzierung.', 'Heidelberg-Altstadt', NOW(), FALSE, TRUE, TRUE, 1),
(2, 'Keller', 'Thomas', 'M.Sc.', 't.keller@tech-hub-hd.de', '+49 176 99887766', 'Projektentwickler mit Fokus auf Sensornetzwerke und LoRaWAN.', 'Bahnstadt', NOW(), TRUE, FALSE, FALSE, 2),
(3, 'Schmidt', 'Jan', 'Prof. Dr.', 'j.schmidt@uni-heidelberg.de', '+49 6221 987654', 'Lehrstuhlinhaber für Klimatologie, berät die Stadt bei Klimaanpassungen.', 'Neuenheim', NOW(), FALSE, TRUE, FALSE, 3);

-- =============================================================================
-- 4. EXPERTEN-FACHGEBIETE (ExpertField) EINFÜGEN
-- =============================================================================
INSERT INTO "ExpertField" (id, expert_id, field) VALUES
(1, 1, 'Klimaschutz'),
(2, 1, 'Verkehrsplanung'),
(3, 1, 'Smart City'),
(4, 2, 'IoT'),
(5, 2, 'Sensorik'),
(6, 2, 'IT-Infrastruktur'),
(7, 3, 'Hydrologie'),
(8, 3, 'Klimawandel'),
(9, 3, 'Wissenschaftliche Beratung');

-- =============================================================================
-- 5. HERAUSFORDERUNGEN (Problem) EINFÜGEN
-- =============================================================================
INSERT INTO "Problem" (problem_id, title, description, category, state, reported_by) VALUES
(1, 'CO2-neutrale Altstadt bis 2030', 'Es fehlen flächendeckende Reallabore und Datenströme, um die Emissionen im Verkehrssektor präzise zu messen.', 'Klima / Verkehr', 'In Bearbeitung', NULL),
(2, 'Optimierung des Radwegenetzes', 'Gefahrenstellen für Radfahrer werden bisher nur unzureichend digital erfasst.', 'Infrastruktur', 'Ungelöst', NULL);

-- =============================================================================
-- 6. PROJEKTE EINFÜGEN
-- =============================================================================
INSERT INTO "Project" (id, title, description, "startDate", "endDate", state, "lastUpdate", location, project_state, "websiteUrl", details) VALUES
(1, 'Smart Lighting Bahnstadt', 'Intelligente Straßenbeleuchtung zur Energieeinsparung mittels Sensorik.', '2026-01-15 00:00:00', '2026-12-31 23:59:59', 'Test-Phase', NOW(), 'Bahnstadt', 'Aktiv', 'https://smart-lighting-hd.de', 'Das Projekt nutzt LoRaWAN-Bewegungssensoren, um Lichtstärken dynamisch anzupassen.'),
(2, 'Nachhaltige Bewässerung Neckarwiese', 'Automatisierte, bodenfeuchtegesteuerte Bewässerung von städtischen Grünflächen.', '2026-04-01 00:00:00', NULL, 'Reallabor-Phase', NOW(), 'Neuenheim', 'In Vorbereitung', NULL, 'In Kooperation mit der Universität Heidelberg werden Bodenfeuchtigkeitssensoren getestet.');

-- =============================================================================
-- 7. RELATIONEN (ProjectRelation RACI) EINFÜGEN
-- =============================================================================
INSERT INTO "ProjectRelation" (project_id, expert_id, role, problem_id) VALUES
(1, 2, 'A', 1), -- Thomas Keller ist Projektleiter (Accountable) für Smart Lighting & dockt an Problem 1 an
(1, 1, 'C', 1), -- Maria Lorenz berät (Consulted) bei Smart Lighting
(2, 3, 'R', NULL), -- Jan Schmidt ist Umsetzer (Responsible) für die Neckarwiese
(2, 1, 'I', NULL); -- Maria Lorenz wird informiert (Informed)

-- =============================================================================
-- 8. TEST-TABELLE EINFÜGEN
-- =============================================================================
INSERT INTO "Test" (title, content) VALUES
('System-Check', 'Das SQL-Seeding wurde erfolgreich abgeschlossen.');

-- =============================================================================
-- 9. AUTOKREMENT-SEQUENZEN AKTUALISIEREN (Verhindert ID-Konflikte bei neuen Inserts)
-- =============================================================================
SELECT setval(pg_get_serial_sequence('"Organization"', 'organization_id'), COALESCE(MAX(organization_id), 1)) FROM "Organization";
SELECT setval(pg_get_serial_sequence('"Expert"', 'expert_id'), COALESCE(MAX(expert_id), 1)) FROM "Expert";
SELECT setval(pg_get_serial_sequence('"ExpertField"', 'id'), COALESCE(MAX(id), 1)) FROM "ExpertField";
SELECT setval(pg_get_serial_sequence('"Problem"', 'problem_id'), COALESCE(MAX(problem_id), 1)) FROM "Problem";
SELECT setval(pg_get_serial_sequence('"Project"', 'id'), COALESCE(MAX(id), 1)) FROM "Project";