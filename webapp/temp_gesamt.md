
<a name="readmemd"></a>

**Documentation**

***

# <HeiProb>

Eine Anwendung zur Verwaltung von Expertennetzwerken sowie Projekten und Challenges auf kommunaler Ebene.
Zum Aufsetzen der Anwendung müssen folgende Schritte befolgt werden.

### Voraussetzungen

Stelle sicher, dass du **Node.js** (v18.x oder höher) und einen Paketmanager (**npm**, **yarn** oder **pnpm**) installiert hast.

### Installation

1. Repositorium klonen:
   ```bash
   git clone https://github.com/FischkopDev/heiProb

2. Dependencies installieren:
    npm install 

3. Anwendung testen
    npm run test

4. Server starten
    npm run dev


<a name="appapichallengesaddroutemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/api/challenges/add/route

# app/api/challenges/add/route

## Functions

### addChallenge()

> **addChallenge**(`body`): `Promise`\<`number`\>

Defined in: [app/api/challenges/add/route.ts:21](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/challenges/add/route.ts#L21)

Fügt ein neues Problem (Challenge) in die Datenbank ein.

#### Parameters

##### body

Der Inhalt aus der JSON-Anfrage, der die Details des Problems enthält.

###### category

`string`

Die Kategorie des Problems.

###### description?

`string`

Eine detaillierte Beschreibung des Problems.

###### state

`string`

Der aktuelle Status/Zustand des Problems (z.B. "open", "closed").

###### title

`string`

Der Titel des Problems.

#### Returns

`Promise`\<`number`\>

Die ID des neu erstellten Problems als Zahl.
         Gibt `0` zurück, falls ein Fehler auftritt oder kein ID-Wert generiert wurde.

#### Throws

Wirft einen Fehler, wenn die Datenbankverbindung fehlschlägt oder die Abfrage ungültig ist.
                Der Fehler wird jedoch im `catch`-Block abgefangen und loggt, gibt aber `0` zurück.

***

### POST()

> **POST**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `status`: `number`; `success`: `boolean`; `warning`: `string`; \}\> \| `NextResponse`\<\{ `problemId`: `number`; `status`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/challenges/add/route.ts:80](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/challenges/add/route.ts#L80)

HTTP POST-Handler zum Erstellen eines neuen Challenges.

Dieser Endpunkt validiert die eingehenden Daten, prüft auf erforderliche Felder
und ruft die interne Funktion `addChallenge` auf, um den Datensatz zu speichern.

#### Parameters

##### request

`Request`

Das HTTP-Request-Objekt, das den JSON-Body enthält.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `status`: `number`; `success`: `boolean`; `warning`: `string`; \}\> \| `NextResponse`\<\{ `problemId`: `number`; `status`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein `NextResponse`-Objekt mit folgendem Inhalt:
         - **200 OK**: Bei Erfolg. `{ success: true, status: 200 }`
         - **400 Bad Request**: Wenn erforderliche Felder fehlen.
           `{ error: "Missing required fields", required: [...] }`
         - **500 Internal Server Error**: Bei Datenbankfehlern oder unerwarteten Ausnahmen.
           `{ error: "Failed to add challenge", details: error.message }`

#### Example

```ts
// Beispiel für einen erfolgreichen Request
const response = await fetch('/api/challenges', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "Rekursive Fibonacci",
    category: "Algorithms",
    state: "active",
    description: "Berechne die Fibonacci-Zahl..."
  })
});
const data = await response.json();
console.log(data); // { success: true, status: 200 }
```


<a name="appapichallengesdeleteroutemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/api/challenges/delete/route

# app/api/challenges/delete/route

## Functions

### DELETE()

> **DELETE**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `message`: `string`; `success`: `boolean`; \}\>\>

Defined in: [app/api/challenges/delete/route.ts:74](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/challenges/delete/route.ts#L74)

HTTP DELETE-Handler zum Entfernen eines Challenges.

Dieser Endpunkt erwartet eine JSON mit der `challenge_id`.
Er validiert die Eingabe, ruft die Löschfunktion auf und gibt entsprechende
Statuscodes zurück (200, 400, 404, 500).

#### Parameters

##### request

`Request`

Das HTTP-Request-Objekt, das den JSON-Body mit der `challenge_id` enthalten muss.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `message`: `string`; `success`: `boolean`; \}\>\>

Ein `NextResponse`-Objekt mit folgendem Inhalt:
         - **200 OK**: Bei erfolgreicher Löschung.
           `{ success: true, message: "Challenge with ID X successfully deleted" }`
         - **400 Bad Request**: Wenn `challenge_id` fehlt oder ungültig ist.
           `{ error: "Challenge ist nicht vorhanden" }`
         - **404 Not Found**: Wenn die ID in der Datenbank nicht existiert.
           `{ error: "Challenge with ID X nicht gefunden" }`
         - **500 Internal Server Error**: Bei Datenbankfehlern oder unerwarteten Ausnahmen.
           `{ error: "Failed to delete challenge", details: error.message }`

#### Example

```ts
// Beispiel für einen erfolgreichen Request
const response = await fetch('/api/challenges', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ challenge_id: 123 })
});
const data = await response.json();
console.log(data); // { success: true, message: "Challenge with ID 123 successfully deleted" }
```

***

### deleteChallenge()

> **deleteChallenge**(`id`): `Promise`\<`boolean`\>

Defined in: [app/api/challenges/delete/route.ts:28](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/challenges/delete/route.ts#L28)

Löscht ein Problem (Challenge) aus der Datenbank basierend auf seiner ID.

Diese Funktion führt einen SQL-DELETE-Befehl aus und überprüft, ob tatsächlich
eine Zeile betroffen war. Sie wirft einen Fehler, wenn die Datenbankabfrage
selbst fehlschlägt (z.B. Verbindungsproblem).

#### Parameters

##### id

`number`

Die eindeutige ID des Problems (`problem_id`), das gelöscht werden soll.

#### Returns

`Promise`\<`boolean`\>

`true`, wenn ein Datensatz mit der angegebenen ID gefunden und gelöscht wurde.
         `false`, wenn kein Datensatz mit dieser ID existierte (aber keine Datenbankfehler auftraten).

#### Throws

Wirft einen Fehler, wenn die Datenbankverbindung unterbrochen wird oder
                die SQL-Abfrage syntaktisch/logisch fehlschlägt. Dieser Fehler muss vom
                Aufrufer (z.B. dem API-Handler) abgefangen werden.

#### Example

```ts
const success = await deleteChallenge(123);
if (success) {
  console.log("Challenge gelöscht.");
} else {
  console.log("Challenge nicht gefunden.");
}
```


<a name="appapichallengeslistroutemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/api/challenges/list/route

# app/api/challenges/list/route

## Functions

### GET()

> **GET**(): `Promise`\<`NextResponse`\<\{ `challenges`: `any`[]; `count`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/challenges/list/route.ts:63](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/challenges/list/route.ts#L63)

HTTP GET-Handler zum Abrufen der Liste aller Challenges.

Dieser Endpunkt ruft die Funktion `getListOfChallenges` auf und gibt die Ergebnisse
als JSON-Objekt zurück. Er enthält Metadaten über den Erfolg und die Anzahl der Ergebnisse.

#### Returns

`Promise`\<`NextResponse`\<\{ `challenges`: `any`[]; `count`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein `NextResponse`-Objekt mit folgendem Inhalt:
         - **200 OK**: Bei Erfolg.
           ```json
           {
             "success": true,
             "challenges": [ /* Array von Challenge-Objekten */ ],
             "count": 50 /* Anzahl der zurückgegebenen Einträge */
           }
           ```
         - **500 Internal Server Error**: Bei Datenbankfehlern oder unerwarteten Ausnahmen.
           ```json
           {
             "error": "Failed to fetch challenges",
             "details": "Fehlermeldung der Datenbank"
           }
           ```

#### Example

```ts
// Beispiel für einen erfolgreichen Request
const response = await fetch('/api/challenges');
const data = await response.json();
console.log(data.challenges); // Array der Challenges
console.log(data.count); // Anzahl der Ergebnisse
```

***

### getListOfChallenges()

> **getListOfChallenges**(): `Promise`\<`any`[]\>

Defined in: [app/api/challenges/list/route.ts:23](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/challenges/list/route.ts#L23)

Holt eine Liste aller verfügbaren Challenges (Probleme) aus der Datenbank.

Diese Funktion führt eine SQL-Abfrage aus, die alle Einträge aus der Tabelle `"Problem"`
auswählt und nach Titel alphabetisch sortiert.

#### Returns

`Promise`\<`any`[]\>

Ein Array mit den Datenbankzeilen (Objekten), die die Challenges repräsentieren.
         Jede Zeile enthält mindestens die Spalten der `"Problem"`-Tabelle.
         Gibt ein leeres Array zurück, wenn keine Einträge vorhanden sind.

#### Throws

Wirft einen Fehler, wenn die Datenbankverbindung fehlschlägt oder die Abfrage
                syntaktisch ungültig ist. Der Fehler wird nicht abgefangen und muss vom
                Aufrufer (z.B. dem API-Handler) behandelt werden.

#### Example

```ts
const challenges = await getListOfChallenges();
console.log(`Found ${challenges.length} challenges.`);
console.log(challenges[0]?.title); // Titel des ersten Challenges
```


<a name="appapisandboxaddroutemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/api/sandbox/add/route

# app/api/sandbox/add/route

## Functions

### POST()

> **POST**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `projectId`: `any`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/sandbox/add/route.ts:123](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/sandbox/add/route.ts#L123)

Handler für HTTP POST-Anfragen zum Erstellen eines neuen Projekts.

Validiert die Eingabedaten und delegiert die eigentliche Erstellung an addProject().

#### Parameters

##### request

`Request`

Die eingehende HTTP-Anfrage.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `projectId`: `any`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein JSON-Antwortobjekt mit Erfolgsmeldung und Projekt-ID oder einem Fehlerstatus.

#### Example

```ts
// Erwartetes Body-Format:
{
  "title": "Neues Projekt",
  "state": "active",
  "members": [{ "name": "Max Mustermann", "role": "Lead" }]
}
```


<a name="appapisandboxlistroutemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/api/sandbox/list/route

# app/api/sandbox/list/route

## Functions

### GET()

> **GET**(): `Promise`\<`NextResponse`\<\{ `count`: `number`; `projects`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/sandbox/list/route.ts:84](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/sandbox/list/route.ts#L84)

Handler für HTTP GET-Anfragen zum Abrufen der Sandbox-Projektliste.

Delegiert die Datenbankabfrage an `getListOfSandboxProjects()` und gibt
die Ergebnisse als JSON-Antwort zurück.

#### Returns

`Promise`\<`NextResponse`\<\{ `count`: `number`; `projects`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein JSON-Antwortobjekt mit:
  - `success`: Boolean, ob die Anfrage erfolgreich war
  - `projects`: Array der Projekt-Objekte
  - `count`: Anzahl der zurückgegebenen Projekte

#### Throws

Gibt bei Fehlern eine JSON-Antwort mit Status 500 zurück
        und enthält Fehlerdetails im `details`-Feld.

#### Example

```ts
// Beispielantwort bei Erfolg:
{
  "success": true,
  "projects": [
    {
      "id": 1,
      "title": "Beispielprojekt",
      "experts": [
        { "expert_id": 5, "name": "Max Mustermann", "role": "Lead" }
      ]
    }
  ],
  "count": 1
}
```

***

### getListOfSandboxProjects()

> **getListOfSandboxProjects**(): `Promise`\<`any`[]\>

Defined in: [app/api/sandbox/list/route.ts:21](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/sandbox/list/route.ts#L21)

Ruft eine Liste von Sandbox-Projekten aus der Datenbank ab.

Diese Funktion führt eine komplexe Abfrage durch, die:
1. Alle Projekte aus der Tabelle "Project" selektiert
2. Über "ProjectRelation" mit Experten verknüpft (LEFT JOIN)
3. Experteninformationen als JSON-Array aggregiert
4. Nach dem letzten Update-Datum absteigend sortiert

#### Returns

`Promise`\<`any`[]\>

Ein Array von Projekt-Objekten, wobei jedes Projekt ein Feld `experts` 
         enthält, das ein Array von Experten mit `expert_id`, `name` und `role` ist.

#### Remarks

- Verwendet `COALESCE` und `FILTER` um leere Experten-Arrays als `[]` zurückzugeben
- `DISTINCT` verhindert Duplikate bei Mehrfachverknüpfungen
- Die Abfrage ist auf 50 Ergebnisse limitiert für Performance


<a name="appapisandboxupdateroutemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/api/sandbox/update/route

# app/api/sandbox/update/route

## Functions

### PATCH()

> **PATCH**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `projectId`: `any`; `success`: `boolean`; \}\>\>

Defined in: [app/api/sandbox/update/route.ts:186](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/sandbox/update/route.ts#L186)

Handler für HTTP PATCH-Anfragen zum Aktualisieren eines bestehenden Projekts.

Validiert die Anwesenheit der `project_id`, ruft die Update-Funktion auf 
und gibt das Ergebnis als JSON zurück.

#### Parameters

##### request

`Request`

Die eingehende HTTP-Anfrage.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `projectId`: `any`; `success`: `boolean`; \}\>\>

Ein JSON-Antwortobjekt:
  - `200`: Erfolg mit `projectId`
  - `400`: Fehlende `project_id`
  - `404`: Projekt nicht gefunden
  - `500`: Interner Serverfehler

#### Example

```ts
// Erwartetes Body-Format:
{
  "project_id": 123,
  "title": "Neuer Titel",
  "members": [{ "name": "Anna Schmidt", "role": "Developer" }]
}
```


<a name="appapiuserscreateroutemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/api/users/create/route

# app/api/users/create/route

## Functions

### addExpert()

> **addExpert**(`body`): `Promise`\<\{ `expertId`: `any`; `fields`: `QueryResult`\<`any`\>[]; \}\>

Defined in: [app/api/users/create/route.ts:139](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/create/route.ts#L139)

Erstellt einen neuen Experten in der Datenbank.

Dieser Prozess beinhaltet:
1. Prüfung, ob die angegebene `primary_organization` existiert.
2. Falls nein: Automatische Erstellung der Organisation mit Standardwerten für `field` und `description`.
3. Einfügen des Experten mit der aufgelösten Organisations-ID.
4. Optional: Einfügen der Expertisefelder (expertFields).

#### Parameters

##### body

`any`

Das Objekt mit den Experten-Daten.

#### Returns

`Promise`\<\{ `expertId`: `any`; `fields`: `QueryResult`\<`any`\>[]; \}\>

Objekt mit `expertId` und `fields` (Array von Einfügeergebnissen).

#### Remarks

- Die Funktion erstellt automatisch eine Organisation, wenn sie nicht existiert, 
  wobei `field` und `description` leer gesetzt werden.
- Boolesche Felder (`economic`, `science`, `social`) defaults auf `false`, wenn nicht übergeben.
- Expertisefelder werden nach dem Einfügen des Experten hinzugefügt.

***

### addExpertFields()

> **addExpertFields**(`expertId`, `expertFields`): `Promise`\<`QueryResult`\<`any`\>[]\>

Defined in: [app/api/users/create/route.ts:82](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/create/route.ts#L82)

Fügt Expertisefelder für einen Experten in die Datenbank ein.

#### Parameters

##### expertId

`number`

Die ID des Experten.

##### expertFields

`string`[]

Array von Feld-Strings, die die Expertisen des Experten darstellen.

#### Returns

`Promise`\<`QueryResult`\<`any`\>[]\>

Array der Datenbank-Einfügeergebnisse (pg.QueryResult[]).

#### Remarks

- Fängt Fehler ab und loggt sie, wirft aber keine Exception.
- Gibt ein leeres Array zurück, wenn expertFields leer oder undefined ist.

***

### addOrganization()

> **addOrganization**(`name`, `location`, `field`, `description`): `Promise`\<`any`\>

Defined in: [app/api/users/create/route.ts:19](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/create/route.ts#L19)

Fügt eine neue Organisation in die Datenbank ein.

#### Parameters

##### name

`string`

Der Name der Organisation (erforderlich).

##### location

`string`

Der Standort der Organisation.

##### field

`string`

Das Tätigkeitsfeld der Organisation.

##### description

`string`

Eine Beschreibung der Organisation.

#### Returns

`Promise`\<`any`\>

Die neu generierte `organization_id` bei Erfolg.
         Gibt `0` zurück, wenn ein Fehler auftritt oder kein ID-Wert zurückgegeben wird.

#### Remarks

- Logs Fehler an die Konsole, wirft aber keinen Exception, um den Aufrufer nicht zu blockieren.
- Die Rückgabe von `0` bei Fehlern erfordert eine explizite Prüfung durch den Aufrufer.

***

### getOrganizationIdByName()

> **getOrganizationIdByName**(`name`): `Promise`\<`number` \| `null`\>

Defined in: [app/api/users/create/route.ts:48](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/create/route.ts#L48)

Sucht die eindeutige ID einer Organisation anhand ihres Namens.

#### Parameters

##### name

`string`

Der Name der Organisation, nach dem gesucht werden soll.

#### Returns

`Promise`\<`number` \| `null`\>

Die `organization_id` als Zahl, falls gefunden, sonst `null`.

#### Remarks

- Nutzt `LIMIT 1`, da von eindeutigen Namen ausgegangen wird.
- Fängt Datenbankfehler ab und gibt `null` zurück.

***

### POST()

> **POST**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `expertId`: `any`; `fieldsAdded`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/users/create/route.ts:195](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/create/route.ts#L195)

Handler für HTTP POST-Anfragen zum Erstellen eines neuen Experten.

Validiert die erforderlichen Felder (`name`, `prename`, `email`) und delegiert 
die Erstellung an `addExpert()`.

#### Parameters

##### request

`Request`

Die eingehende HTTP-Anfrage.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `expertId`: `any`; `fieldsAdded`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein JSON-Antwortobjekt:
  - `200`: Erfolg mit `{ success: true, expertId: number, fieldsAdded: number }`
  - `400`: Fehlende Pflichtfelder
  - `500`: Interner Serverfehler

#### Example

```ts
// Erwartetes Body-Format:
{
  "name": "Max",
  "prename": "Mustermann",
  "email": "max@example.com",
  "primary_organization": "Beispiel GmbH",
  "title": "Dr.",
  "location": "Berlin",
  "economic": true,
  "expertFields": ["KI", "Machine Learning", "Data Science"]
}
```


<a name="appapiusersdeleteroutemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/api/users/delete/route

# app/api/users/delete/route

## Functions

### DELETE()

> **DELETE**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `message`: `string`; `success`: `boolean`; \}\>\>

Defined in: [app/api/users/delete/route.ts:75](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/delete/route.ts#L75)

Handler für HTTP DELETE-Anfragen zum Entfernen eines Experten.

Extrahiert die `expert_id` aus dem Request-Body, validiert sie und ruft 
die Löschfunktion auf. Unterscheidet zwischen fehlender ID, nicht existierendem 
Experten und technischen Fehlern.

#### Parameters

##### request

`Request`

Die eingehende HTTP-Anfrage.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `message`: `string`; `success`: `boolean`; \}\>\>

Ein JSON-Antwortobjekt:
  - `200`: Erfolg mit Bestätigungsmeldung.
  - `400`: Fehlende oder ungültige `expert_id` im Body.
  - `404`: Kein Experte mit der angegebenen ID gefunden.
  - `500`: Interner Serverfehler bei der Datenbankabfrage.

#### Example

```ts
// Erwarteter Request-Body:
{ "expert_id": 123 }
```

#### Remarks

- Die Validierungsmeldungen sind teilweise auf Deutsch ("User ist nicht vorhanden"), 
  während die Erfolgsnachrichten auf Englisch sind. Für Konsistenz könnte man die 
  Sprache vereinheitlichen.

***

### deleteExpert()

> **deleteExpert**(`id`): `Promise`\<`boolean`\>

Defined in: [app/api/users/delete/route.ts:19](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/delete/route.ts#L19)

Löscht einen Experten aus der Datenbank basierend auf der ID.

#### Parameters

##### id

`number`

Die eindeutige ID des zu löschenden Experten (`expert_id`).

#### Returns

`Promise`\<`boolean`\>

`true`, wenn ein Datensatz erfolgreich gelöscht wurde.
         `false`, wenn kein Datensatz mit dieser ID existierte (und somit nichts gelöscht wurde).

#### Throws

Wirft den ursprünglichen Datenbankfehler, falls die Abfrage technisch fehlschlägt 
        (z.B. Verbindungsfehler, Syntaxfehler), damit der Aufrufer dies behandeln kann.

#### Remarks

- Die Abfrage nutzt `RETURNING expert_id`, um zu prüfen, ob tatsächlich eine Zeile betroffen war.
- Ein `false`-Rückgabewert bedeutet nicht zwangsläufig einen Fehler, sondern dass die ID nicht existierte.


<a name="appapiuserslistroutemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/api/users/list/route

# app/api/users/list/route

## Functions

### GET()

> **GET**(): `Promise`\<`NextResponse`\<\{ `count`: `number`; `experts`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/users/list/route.ts:82](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/list/route.ts#L82)

Handler für HTTP GET-Anfragen zum Abrufen der Liste aller Personen mit Organisationsdaten und Expertisefeldern.

Delegiert die Datenbankabfrage an `getListOfPeopleWithOrganization()` und formatiert 
die Antwort als JSON mit Erfolgsmeldung, Ergebnisliste und Gesamtanzahl.

#### Returns

`Promise`\<`NextResponse`\<\{ `count`: `number`; `experts`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein JSON-Antwortobjekt mit:
  - `success`: Boolean, ob die Anfrage erfolgreich war
  - `experts`: Array der Experten-Objekte (inkl. Organisations- und Expertisefelder-Daten)
  - `count`: Anzahl der zurückgegebenen Experten

#### Throws

Gibt bei Fehlern eine JSON-Antwort mit Status 500 zurück
        und enthält Fehlerdetails im `details`-Feld.

#### Example

```ts
// Beispielantwort:
{
  "success": true,
  "experts": [
    {
      "expert_id": 1,
      "name": "Anna",
      "prename": "Schmidt",
      "organization": {
        "organization_id": 5,
        "name": "TechCorp",
        "location": "Berlin",
        "field": "IT",
        "description": "Ein Technologieunternehmen"
      },
      "expertFields": ["Künstliche Intelligenz", "Machine Learning", "Data Science"]
    }
  ],
  "count": 1
}
```

***

### getListOfPeopleWithOrganization()

> **getListOfPeopleWithOrganization**(): `Promise`\<`any`[]\>

Defined in: [app/api/users/list/route.ts:21](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/list/route.ts#L21)

Ruft eine Liste von Experten aus der Datenbank ab, jeweils ergänzt um ihre zugehörige Organisation und Expertisefelder.

Diese Funktion führt JOINs zwischen den Tabellen `"Expert"`, `"Organization"` und `"ExpertField"` durch,
um die Organisationsdaten und Expertisefelder als verschachtelte JSON-Objekte zurückzugeben.

#### Returns

`Promise`\<`any`[]\>

Ein Array von Objekten, wobei jedes Objekt alle Felder des Experten (`e.*`) 
         sowie folgende Felder enthält:
         - `organization`: JSON-Objekt mit Organisations-Daten (organization_id, name, location, field, description)
         - `expertFields`: JSON-Array der Expertisefelder des Experten

#### Remarks

- Die Ergebnisse sind alphabetisch nach dem Vornamen (`e.name`) sortiert.
- Die Abfrage ist auf maximal 50 Ergebnisse begrenzt (`LIMIT 50`).
- Nur Experten mit einer gültigen Zuordnung zu einer Organisation werden zurückgegeben (INNER JOIN).
- Expertisefelder werden mittels LEFT JOIN und Aggregation geladen, Experten ohne Felder erhalten ein leeres Array.


<a name="appapiusersupdateroutemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/api/users/update/route

# app/api/users/update/route

## Functions

### addOrganization()

> **addOrganization**(`name`, `location`, `field`, `description`): `Promise`\<`any`\>

Defined in: [app/api/users/update/route.ts:19](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/update/route.ts#L19)

Fügt eine neue Organisation in die Datenbank ein.

#### Parameters

##### name

`string`

Der Name der Organisation (erforderlich).

##### location

`string`

Der Standort der Organisation.

##### field

`string`

Das Tätigkeitsfeld der Organisation.

##### description

`string`

Eine Beschreibung der Organisation.

#### Returns

`Promise`\<`any`\>

Die neu generierte `organization_id` bei Erfolg.
         Gibt `0` zurück, wenn ein Fehler auftritt oder kein ID-Wert zurückgegeben wird.

#### Remarks

- Logs Fehler an die Konsole, wirft aber keine Exception, um den Aufrufer nicht zu blockieren.
- Die Rückgabe von `0` bei Fehlern erfordert eine explizite Prüfung durch den Aufrufer.

***

### getOrganizationIdByName()

> **getOrganizationIdByName**(`name`): `Promise`\<`number` \| `null`\>

Defined in: [app/api/users/update/route.ts:48](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/update/route.ts#L48)

Sucht die eindeutige ID einer Organisation anhand ihres Namens.

#### Parameters

##### name

`string`

Der Name der Organisation, nach dem gesucht werden soll.

#### Returns

`Promise`\<`number` \| `null`\>

Die `organization_id` als Zahl, falls gefunden, sonst `null`.

#### Remarks

- Nutzt `LIMIT 1`, da von eindeutigen Namen ausgegangen wird.
- Fängt Datenbankfehler ab und gibt `null` zurück.

***

### PATCH()

> **PATCH**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `data`: `any`; `success`: `boolean`; \}\>\>

Defined in: [app/api/users/update/route.ts:173](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/update/route.ts#L173)

Handler für HTTP PATCH-Anfragen zum Aktualisieren eines bestehenden Experten.

Extrahiert die `expert_id` aus dem Request-Body, trennt sie von den Update-Daten 
und delegiert die Aktualisierung an `updateExpert()`.

#### Parameters

##### request

`Request`

Die eingehende HTTP-Anfrage.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `data`: `any`; `success`: `boolean`; \}\>\>

Ein JSON-Antwortobjekt:
  - `200`: Erfolg mit dem aktualisierten Experten-Objekt in `data`.
  - `400`: Fehlende `expert_id`.
  - `404`: Kein Experte mit der angegebenen ID gefunden.
  - `500`: Interner Serverfehler bei der Datenbankabfrage.

#### Example

```ts
// Erwarteter Request-Body:
{
  "expert_id": 123,
  "title": "Dr.",
  "primary_organization": "Neue Firma AG"
}
```

#### Remarks

- Nur die im Body enthaltenen Felder werden aktualisiert; alle anderen bleiben unverändert.
- Die Fehlermeldung bei fehlender ID ist auf Englisch, während andere Teile des Codes 
  teils Deutsch verwenden (Konsistenz könnte verbessert werden).

***

### updateExpert()

> **updateExpert**(`id`, `body`): `Promise`\<`any`\>

Defined in: [app/api/users/update/route.ts:99](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/update/route.ts#L99)

Aktualisiert die Daten eines Experten in der Datenbank.

Dieser Prozess beinhaltet:
1. Prüfung und ggf. automatische Erstellung der angegebenen `primary_organization`.
2. Aktualisierung der Expertenfelder unter Verwendung von `COALESCE`, um nicht übergebene Werte beizubehalten.

#### Parameters

##### id

`number`

Die ID des zu aktualisierenden Experten (`expert_id`).

##### body

`any`

Das Objekt mit den zu aktualisierenden Daten.

#### Returns

`Promise`\<`any`\>

Das aktualisierte Experten-Objekt (inkl. aller Felder) bei Erfolg.
         Gibt `undefined` zurück, wenn kein Experte mit der angegebenen ID existiert.

#### Remarks

- Wenn `primary_organization` angegeben ist, wird geprüft, ob sie existiert. Falls nicht, 
  wird sie mit dem aktuellen `location` (falls vorhanden) und leeren Feldern für `field`/`description` erstellt.
- Die SQL-Abfrage nutzt `COALESCE($1, column)`, um nur übermittelte Werte zu überschreiben.
- Falls `primary_organization` nicht im Body ist, bleibt die bisherige Zuordnung erhalten.


<a name="appchallengeaddpagemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/challenge/add/page

# app/challenge/add/page

## Functions

### default()

> **default**(): `Element`

Defined in: [app/challenge/add/page.tsx:39](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/challenge/add/page.tsx#L39)

Eine Next.js-Client-Komponente, die ein Formular zum Erstellen 
einer neuen Herausforderung (Challenge) bereitstellt.
*

#### Returns

`Element`

Ein gerendertes React-Formularlement.


<a name="appchallengepagemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/challenge/page

# app/challenge/page

## Functions

### default()

> **default**(): `Element`

Defined in: [app/challenge/page.tsx:19](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/challenge/page.tsx#L19)

Eine Next.js-Client-Komponente, die eine Übersicht aller vorhandenen Probleme
darstellt, Daten live von der API lädt und das Löschen sowie die Detailansicht verwaltet.
*

#### Returns

`Element`

Ein gerendertes UI-Element für die Problem-Verwaltung.


<a name="appcomponentsagentbarmd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/components/Agentbar

# app/components/Agentbar

## Functions

### Agentbar()

> **Agentbar**(): `Element`

Defined in: [app/components/Agentbar.tsx:10](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/components/Agentbar.tsx#L10)

Die seitliche Ansicht auf dem der KI-Agent platziert wird. Hier sollen die Befehle an den Agent übernommen werden.

#### Returns

`Element`


<a name="appcomponentssidebarmd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/components/Sidebar

# app/components/Sidebar

## Functions

### Sidebar()

> **Sidebar**(): `Element`

Defined in: [app/components/Sidebar.tsx:12](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/components/Sidebar.tsx#L12)

Die Navigationsleiste mit Verbindung zu den Bereichen Expertennetzwerk, Challenges und Sandbox-Projekte.

#### Returns

`Element`


<a name="appcomponentstopbarmd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/components/Topbar

# app/components/Topbar

## Functions

### Topbar()

> **Topbar**(): `Element`

Defined in: [app/components/Topbar.tsx:14](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/components/Topbar.tsx#L14)

Die Topbar, die auf allen Seiten sichtbar ist. Sie enthält eine Suchleiste für die schnelle Suche nach Expertisen, Problemen oder Projekten.
Außerdem gibt es zwei prominente Buttons: Einen zum Hinzufügen eines neuen Problems (Challenge) und einen zum Hinzufügen eines neuen Projekts (Sandbox).

#### Returns

`Element`


<a name="applayoutmd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/layout

# app/layout

## Variables

### metadata

> `const` **metadata**: `Metadata`

Defined in: [app/layout.tsx:11](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/layout.tsx#L11)

## Functions

### default()

> **default**(`__namedParameters`): `Element`

Defined in: [app/layout.tsx:18](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/layout.tsx#L18)

#### Parameters

##### \_\_namedParameters

###### children

`ReactNode`

#### Returns

`Element`


<a name="apppagemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/page

# app/page

## Functions

### default()

> **default**(): `Element`

Defined in: [app/page.tsx:5](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/page.tsx#L5)

#### Returns

`Element`


<a name="apprelationspersonmd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/relations/Person

# app/relations/Person

## Interfaces

### Expert

Defined in: [app/relations/Person.tsx:12](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L12)

#### Properties

##### description?

> `optional` **description?**: `string`

Defined in: [app/relations/Person.tsx:22](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L22)

##### economic

> **economic**: `boolean`

Defined in: [app/relations/Person.tsx:25](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L25)

##### email?

> `optional` **email?**: `string`

Defined in: [app/relations/Person.tsx:20](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L20)

##### expert\_fields

> **expert\_fields**: `string`[]

Defined in: [app/relations/Person.tsx:24](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L24)

##### expert\_id

> **expert\_id**: `number`

Defined in: [app/relations/Person.tsx:13](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L13)

##### last\_contact?

> `optional` **last\_contact?**: `string`

Defined in: [app/relations/Person.tsx:23](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L23)

##### name

> **name**: `string`

Defined in: [app/relations/Person.tsx:14](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L14)

##### organization?

> `optional` **organization?**: [`Organization`](#organization-1)

Defined in: [app/relations/Person.tsx:28](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L28)

##### other\_organizations

> **other\_organizations**: `string`[]

Defined in: [app/relations/Person.tsx:18](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L18)

##### phone?

> `optional` **phone?**: `string`

Defined in: [app/relations/Person.tsx:21](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L21)

##### prename

> **prename**: `string`

Defined in: [app/relations/Person.tsx:15](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L15)

##### primary\_organization

> **primary\_organization**: `string`

Defined in: [app/relations/Person.tsx:17](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L17)

##### science

> **science**: `boolean`

Defined in: [app/relations/Person.tsx:26](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L26)

##### scientificAreas

> **scientificAreas**: `string`[]

Defined in: [app/relations/Person.tsx:19](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L19)

##### social

> **social**: `boolean`

Defined in: [app/relations/Person.tsx:27](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L27)

##### title?

> `optional` **title?**: `string`

Defined in: [app/relations/Person.tsx:16](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L16)

***

### ExpertFormData

Defined in: [app/relations/Person.tsx:31](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L31)

#### Properties

##### description

> **description**: `string`

Defined in: [app/relations/Person.tsx:41](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L41)

##### economic

> **economic**: `boolean`

Defined in: [app/relations/Person.tsx:43](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L43)

##### email

> **email**: `string`

Defined in: [app/relations/Person.tsx:38](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L38)

##### expert\_fields

> **expert\_fields**: `string`

Defined in: [app/relations/Person.tsx:42](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L42)

##### last\_contact?

> `optional` **last\_contact?**: `string`

Defined in: [app/relations/Person.tsx:40](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L40)

##### name

> **name**: `string`

Defined in: [app/relations/Person.tsx:32](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L32)

##### other\_organizations

> **other\_organizations**: `string`

Defined in: [app/relations/Person.tsx:36](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L36)

##### phone

> **phone**: `string`

Defined in: [app/relations/Person.tsx:39](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L39)

##### prename

> **prename**: `string`

Defined in: [app/relations/Person.tsx:34](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L34)

##### primary\_organization

> **primary\_organization**: `string`

Defined in: [app/relations/Person.tsx:35](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L35)

##### science

> **science**: `boolean`

Defined in: [app/relations/Person.tsx:44](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L44)

##### scientificAreas

> **scientificAreas**: `string`

Defined in: [app/relations/Person.tsx:37](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L37)

##### social

> **social**: `boolean`

Defined in: [app/relations/Person.tsx:45](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L45)

##### title

> **title**: `string`

Defined in: [app/relations/Person.tsx:33](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L33)

***

### Organization

Defined in: [app/relations/Person.tsx:3](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L3)

#### Properties

##### description?

> `optional` **description?**: `string`

Defined in: [app/relations/Person.tsx:8](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L8)

##### field?

> `optional` **field?**: `string`

Defined in: [app/relations/Person.tsx:7](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L7)

##### location?

> `optional` **location?**: `string`

Defined in: [app/relations/Person.tsx:6](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L6)

##### name

> **name**: `string`

Defined in: [app/relations/Person.tsx:5](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L5)

##### organization\_id

> **organization\_id**: `number`

Defined in: [app/relations/Person.tsx:4](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L4)

## Variables

### getUserFromDB

> `const` **getUserFromDB**: () => `Promise`\<[`Expert`](#expert)[]\>

Defined in: [app/relations/Person.tsx:48](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L48)

#### Returns

`Promise`\<[`Expert`](#expert)[]\>

***

### initialExperts

> `const` **initialExperts**: [`Expert`](#expert)[]

Defined in: [app/relations/Person.tsx:85](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/Person.tsx#L85)


<a name="apprelationsaddpagemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/relations/add/page

# app/relations/add/page

## Functions

### default()

> **default**(`props`): `Element`

Defined in: [app/relations/add/page.tsx:67](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/add/page.tsx#L67)

Eine Next.js-Client-Komponente, die ein Formular zum Erstellen und Speichern 
eines neuen Experten-Profils bereitstellt. Die Daten werden sowohl an die Datenbank 
übertragen als auch über Callbacks an die übergeordnete Komponente zurückgegeben.
*

#### Parameters

##### props

[`AddExpertViewProps`](#addexpertviewprops)

Die Props für die Komponente.

#### Returns

`Element`

Ein gerendertes UI-Formular für die Expertenerfassung.


<a name="apprelationspagemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/relations/page

# app/relations/page

## Functions

### default()

> **default**(): `Element`

Defined in: [app/relations/page.tsx:34](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/page.tsx#L34)

#### Returns

`Element`


<a name="apprelationsupdatepagemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/relations/update/page

# app/relations/update/page

## Functions

### default()

> **default**(`props`): `Element`

Defined in: [app/relations/update/page.tsx:67](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/relations/update/page.tsx#L67)

Eine Next.js-Client-Komponente, die als Formular zum Bearbeiten oder Erstellen
eines Experten-Profils dient. Wenn ein `expertId`-Query-Parameter in der URL existiert,
schaltet die Ansicht in den **Bearbeitungsmodus** und lädt die bestehenden Daten vorab aus der Datenbank.
*

#### Parameters

##### props

[`AddExpertViewProps`](#addexpertviewprops)

Die Props für die Komponente.

#### Returns

`Element`

Ein gerendertes UI-Formular zur Expert*innen-Verwaltung.


<a name="appsandboxaddpagemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/sandbox/add/page

# app/sandbox/add/page

## Functions

### default()

> **default**(): `Element`

Defined in: [app/sandbox/add/page.tsx:50](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/sandbox/add/page.tsx#L50)

Eine Next.js-Client-Komponente, die eine Eingabemaske zum Erstellen neuer Projekte bietet.
Ermöglicht die Pflege von Metadaten sowie die dynamische Zuordnung von Experten über ein RACI-Rollenmodell.
*

#### Returns

`Element`

Ein gerendertes Formular zur Projekterstellung.


<a name="appsandboxpagemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/sandbox/page

# app/sandbox/page

## Functions

### default()

> **default**(): `Element`

Defined in: [app/sandbox/page.tsx:21](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/sandbox/page.tsx#L21)

Eine Next.js-Client-Komponente, die eine tabellarische Übersicht oder Liste 
aller Sandbox-Projekte aus der Datenbank anzeigt. Sie lädt die Projektdaten 
asynchron und bereitet diese direkt für die Anzeige auf.
*

#### Returns

`Element`

Die gerenderte Übersicht der Sandbox-Projekte.


<a name="appsandboxprojectdetailspagemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/sandbox/project/details/page

# app/sandbox/project/details/page

## Functions

### default()

> **default**(): `Element`

Defined in: [app/sandbox/project/details/page.tsx:61](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/sandbox/project/details/page.tsx#L61)

Eine Next.js-Client-Komponente, die eine Detailansicht zur Bearbeitung eines bestehenden Projekts bereitstellt.
Lädt Projektdaten sowie die globale Expertenliste parallel, erlaubt die Modifikation aller Felder
inklusive RACI-Teamzuweisungen (mit Duplikatsprüfung) und speichert die Änderungen via PATCH-Request.
*

#### Returns

`Element`

Die gerenderte Detail- und Bearbeitungsseite des Projekts.


<a name="appsearchpagemd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / app/search/page

# app/search/page

## Functions

### default()

> **default**(): `Element`

Defined in: [app/search/page.tsx:38](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/search/page.tsx#L38)

Eine Next.js-Client-Komponente, die eine globale, interaktive Suchoberfläche bereitstellt.
Durchsucht parallel Challenges, Projekte und Expert*innen anhand einer einzigen
Benutzereingabe (Query) in Echtzeit auf Client-Eite.
*

#### Returns

`Element`

Das gerenderte Suchfenster inklusive Suchergebnissen.


<a name="libdbmd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / lib/db

# lib/db

## Variables

### default

> `const` **default**: `Pool`

Defined in: [lib/db.ts:3](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/db.ts#L3)


<a name="libtypesmd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / lib/types

# lib/types

## Classes

### Challenge

Defined in: [lib/types.ts:13](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L13)

Repräsentiert eine städtische oder organisatorische Herausforderung (Challenge).
* ```mermaid
classDiagram
class Challenge {
+string id
+string title
+string department
+string status
}
```

#### Constructors

##### Constructor

> **new Challenge**(`id`, `title`, `department`, `status`): [`Challenge`](#challenge)

Defined in: [lib/types.ts:23](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L23)

###### Parameters

###### id

`string`

###### title

`string`

###### department

`string`

###### status

`string`

###### Returns

[`Challenge`](#challenge)

#### Properties

##### \_department

> `private` **\_department**: `string`

Defined in: [lib/types.ts:19](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L19)

Das zuständige Amt oder die Abteilung.

##### \_id

> `private` **\_id**: `string`

Defined in: [lib/types.ts:15](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L15)

Eindeutige ID der Challenge.

##### \_status

> `private` **\_status**: `string`

Defined in: [lib/types.ts:21](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L21)

Der aktuelle Status der Challenge (z. B. "Aktiv", "In Vorbereitung").

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:17](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L17)

Der Titel oder die Überschrift der Challenge.

#### Accessors

##### department

###### Get Signature

> **get** **department**(): `string`

Defined in: [lib/types.ts:46](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L46)

###### Returns

`string`

###### Set Signature

> **set** **department**(`value`): `void`

Defined in: [lib/types.ts:50](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L50)

###### Parameters

###### value

`string`

###### Returns

`void`

##### id

###### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:30](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L30)

###### Returns

`string`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:34](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L34)

###### Parameters

###### value

`string`

###### Returns

`void`

##### status

###### Get Signature

> **get** **status**(): `string`

Defined in: [lib/types.ts:54](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L54)

###### Returns

`string`

###### Set Signature

> **set** **status**(`value`): `void`

Defined in: [lib/types.ts:58](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L58)

###### Parameters

###### value

`string`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:38](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L38)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:42](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L42)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### Expert

Defined in: [lib/types.ts:181](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L181)

Repräsentiert ein Profil einer Expert*in oder einer Ansprechperson.
* ```mermaid
classDiagram
class Expert {
+string id
+string name
+string role
+string[] skills
}
```

#### Constructors

##### Constructor

> **new Expert**(`id`, `name`, `role`, `skills`): [`Expert`](#expert)

Defined in: [lib/types.ts:191](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L191)

###### Parameters

###### id

`string`

###### name

`string`

###### role

`string`

###### skills

`string`[]

###### Returns

[`Expert`](#expert)

#### Properties

##### \_id

> `private` **\_id**: `string`

Defined in: [lib/types.ts:183](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L183)

Eindeutige ID der Expert*in.

##### \_name

> `private` **\_name**: `string`

Defined in: [lib/types.ts:185](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L185)

Der vollständige Name.

##### \_role

> `private` **\_role**: `string`

Defined in: [lib/types.ts:187](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L187)

Die fachliche Rolle oder Kernkompetenz.

##### \_skills

> `private` **\_skills**: `string`[]

Defined in: [lib/types.ts:189](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L189)

Eine Liste von spezifischen Fähigkeiten oder Schlagworten (Skills).

#### Accessors

##### id

###### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:198](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L198)

###### Returns

`string`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:202](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L202)

###### Parameters

###### value

`string`

###### Returns

`void`

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:206](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L206)

###### Returns

`string`

###### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:210](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L210)

###### Parameters

###### value

`string`

###### Returns

`void`

##### role

###### Get Signature

> **get** **role**(): `string`

Defined in: [lib/types.ts:214](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L214)

###### Returns

`string`

###### Set Signature

> **set** **role**(`value`): `void`

Defined in: [lib/types.ts:218](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L218)

###### Parameters

###### value

`string`

###### Returns

`void`

##### skills

###### Get Signature

> **get** **skills**(): `string`[]

Defined in: [lib/types.ts:222](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L222)

###### Returns

`string`[]

###### Set Signature

> **set** **skills**(`value`): `void`

Defined in: [lib/types.ts:226](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L226)

###### Parameters

###### value

`string`[]

###### Returns

`void`

***

### ExpertFormData

Defined in: [lib/types.ts:848](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L848)

Formulardaten-Struktur für Expert*innen.
* ```mermaid
classDiagram
class ExpertFormData {
+string name
+string prename
+string title
+string primary_organization
+string other_organizations
+string scientificAreas
+string email
+string phone
+string last_contact
+string description
+string expert_fields
+boolean economic
+boolean science
+boolean social
}
```

#### Constructors

##### Constructor

> **new ExpertFormData**(`name`, `prename`, `title`, `primary_organization`, `other_organizations`, `scientificAreas`, `email`, `phone`, `description`, `expert_fields`, `economic`, `science`, `social`, `last_contact?`): [`ExpertFormData`](#expertformdata)

Defined in: [lib/types.ts:878](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L878)

###### Parameters

###### name

`string`

###### prename

`string`

###### title

`string`

###### primary\_organization

`string`

###### other\_organizations

`string`

###### scientificAreas

`string`

###### email

`string`

###### phone

`string`

###### description

`string`

###### expert\_fields

`string`

###### economic

`boolean`

###### science

`boolean`

###### social

`boolean`

###### last\_contact?

`string`

###### Returns

[`ExpertFormData`](#expertformdata)

#### Properties

##### \_description

> `private` **\_description**: `string`

Defined in: [lib/types.ts:868](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L868)

Eine detaillierte Beschreibung oder Kurzbiografie des Experten.

##### \_economic

> `private` **\_economic**: `boolean`

Defined in: [lib/types.ts:872](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L872)

Indikator, ob der Experte im wirtschaftlichen Bereich tätig ist.

##### \_email

> `private` **\_email**: `string`

Defined in: [lib/types.ts:862](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L862)

Die E-Mail-Adresse des Experten.

##### \_expert\_fields

> `private` **\_expert\_fields**: `string`

Defined in: [lib/types.ts:870](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L870)

Spezifische Fachbereiche oder Felder, in denen der Experte tätig ist.

##### \_last\_contact?

> `private` `optional` **\_last\_contact?**: `string`

Defined in: [lib/types.ts:866](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L866)

Datum des letzten Kontakts (optional).

##### \_name

> `private` **\_name**: `string`

Defined in: [lib/types.ts:850](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L850)

Der Nachname des Experten.

##### \_other\_organizations

> `private` **\_other\_organizations**: `string`

Defined in: [lib/types.ts:858](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L858)

Weitere Zugehörigkeiten oder Organisationen (kommagetrennt).

##### \_phone

> `private` **\_phone**: `string`

Defined in: [lib/types.ts:864](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L864)

Die Telefonnummer des Experten.

##### \_prename

> `private` **\_prename**: `string`

Defined in: [lib/types.ts:852](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L852)

Der Vorname des Experten.

##### \_primary\_organization

> `private` **\_primary\_organization**: `string`

Defined in: [lib/types.ts:856](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L856)

Die primäre Zugehörigkeit oder Organisation.

##### \_science

> `private` **\_science**: `boolean`

Defined in: [lib/types.ts:874](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L874)

Indikator, ob der Experte im wissenschaftlichen Bereich tätig ist.

##### \_scientificAreas

> `private` **\_scientificAreas**: `string`

Defined in: [lib/types.ts:860](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L860)

Wissenschaftliche oder fachliche Arbeitsbereiche.

##### \_social

> `private` **\_social**: `boolean`

Defined in: [lib/types.ts:876](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L876)

Indikator, ob der Experte im sozialen Bereich tätig ist.

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:854](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L854)

Der Titel oder akademische Grad (z. B. "Prof. Dr.").

#### Accessors

##### description

###### Get Signature

> **get** **description**(): `string`

Defined in: [lib/types.ts:982](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L982)

###### Returns

`string`

###### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:986](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L986)

###### Parameters

###### value

`string`

###### Returns

`void`

##### economic

###### Get Signature

> **get** **economic**(): `boolean`

Defined in: [lib/types.ts:998](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L998)

###### Returns

`boolean`

###### Set Signature

> **set** **economic**(`value`): `void`

Defined in: [lib/types.ts:1002](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1002)

###### Parameters

###### value

`boolean`

###### Returns

`void`

##### email

###### Get Signature

> **get** **email**(): `string`

Defined in: [lib/types.ts:958](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L958)

###### Returns

`string`

###### Set Signature

> **set** **email**(`value`): `void`

Defined in: [lib/types.ts:962](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L962)

###### Parameters

###### value

`string`

###### Returns

`void`

##### expert\_fields

###### Get Signature

> **get** **expert\_fields**(): `string`

Defined in: [lib/types.ts:990](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L990)

###### Returns

`string`

###### Set Signature

> **set** **expert\_fields**(`value`): `void`

Defined in: [lib/types.ts:994](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L994)

###### Parameters

###### value

`string`

###### Returns

`void`

##### last\_contact

###### Get Signature

> **get** **last\_contact**(): `string` \| `undefined`

Defined in: [lib/types.ts:974](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L974)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **last\_contact**(`value`): `void`

Defined in: [lib/types.ts:978](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L978)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:910](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L910)

###### Returns

`string`

###### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:914](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L914)

###### Parameters

###### value

`string`

###### Returns

`void`

##### other\_organizations

###### Get Signature

> **get** **other\_organizations**(): `string`

Defined in: [lib/types.ts:942](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L942)

###### Returns

`string`

###### Set Signature

> **set** **other\_organizations**(`value`): `void`

Defined in: [lib/types.ts:946](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L946)

###### Parameters

###### value

`string`

###### Returns

`void`

##### phone

###### Get Signature

> **get** **phone**(): `string`

Defined in: [lib/types.ts:966](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L966)

###### Returns

`string`

###### Set Signature

> **set** **phone**(`value`): `void`

Defined in: [lib/types.ts:970](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L970)

###### Parameters

###### value

`string`

###### Returns

`void`

##### prename

###### Get Signature

> **get** **prename**(): `string`

Defined in: [lib/types.ts:918](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L918)

###### Returns

`string`

###### Set Signature

> **set** **prename**(`value`): `void`

Defined in: [lib/types.ts:922](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L922)

###### Parameters

###### value

`string`

###### Returns

`void`

##### primary\_organization

###### Get Signature

> **get** **primary\_organization**(): `string`

Defined in: [lib/types.ts:934](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L934)

###### Returns

`string`

###### Set Signature

> **set** **primary\_organization**(`value`): `void`

Defined in: [lib/types.ts:938](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L938)

###### Parameters

###### value

`string`

###### Returns

`void`

##### science

###### Get Signature

> **get** **science**(): `boolean`

Defined in: [lib/types.ts:1006](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1006)

###### Returns

`boolean`

###### Set Signature

> **set** **science**(`value`): `void`

Defined in: [lib/types.ts:1010](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1010)

###### Parameters

###### value

`boolean`

###### Returns

`void`

##### scientificAreas

###### Get Signature

> **get** **scientificAreas**(): `string`

Defined in: [lib/types.ts:950](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L950)

###### Returns

`string`

###### Set Signature

> **set** **scientificAreas**(`value`): `void`

Defined in: [lib/types.ts:954](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L954)

###### Parameters

###### value

`string`

###### Returns

`void`

##### social

###### Get Signature

> **get** **social**(): `boolean`

Defined in: [lib/types.ts:1014](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1014)

###### Returns

`boolean`

###### Set Signature

> **set** **social**(`value`): `void`

Defined in: [lib/types.ts:1018](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1018)

###### Parameters

###### value

`boolean`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:926](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L926)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:930](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L930)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### ExpertOption

Defined in: [lib/types.ts:479](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L479)

Struktur für die Auswahlliste (Dropdown) der verfügbaren Experten.
* ```mermaid
classDiagram
class ExpertOption {
+id: number | string
+string name
}
```

#### Constructors

##### Constructor

> **new ExpertOption**(`id`, `name`): [`ExpertOption`](#expertoption)

Defined in: [lib/types.ts:485](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L485)

###### Parameters

###### id

`string` \| `number`

###### name

`string`

###### Returns

[`ExpertOption`](#expertoption)

#### Properties

##### \_id

> `private` **\_id**: `string` \| `number`

Defined in: [lib/types.ts:481](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L481)

Die ID des Experten (as number or string).

##### \_name

> `private` **\_name**: `string`

Defined in: [lib/types.ts:483](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L483)

Der vollständige Name des Experten.

#### Accessors

##### id

###### Get Signature

> **get** **id**(): `string` \| `number`

Defined in: [lib/types.ts:490](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L490)

###### Returns

`string` \| `number`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:494](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L494)

###### Parameters

###### value

`string` \| `number`

###### Returns

`void`

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:498](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L498)

###### Returns

`string`

###### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:502](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L502)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### NewProject

Defined in: [lib/types.ts:526](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L526)

Struktur für das State-Objekt eines neu anzulegenden Projekts.
* ```mermaid
classDiagram
direction LR
NewProject "1" --* "many" ProjectMember : enthält
class NewProject {
+string title
+string description
+string startDate
+string endDate
+string state
+string location
+string websiteUrl
+string details
+ProjectMember[] members
}
```

#### Constructors

##### Constructor

> **new NewProject**(`title`, `description`, `startDate`, `endDate`, `state`, `location`, `websiteUrl`, `details`, `members`): [`NewProject`](#newproject)

Defined in: [lib/types.ts:546](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L546)

###### Parameters

###### title

`string`

###### description

`string`

###### startDate

`string`

###### endDate

`string`

###### state

`string`

###### location

`string`

###### websiteUrl

`string`

###### details

`string`

###### members

[`ProjectMember`](#projectmember)[]

###### Returns

[`NewProject`](#newproject)

#### Properties

##### \_description

> `private` **\_description**: `string`

Defined in: [lib/types.ts:530](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L530)

Eine kurze Zusammenfassung oder Beschreibung des Projekts.

##### \_details

> `private` **\_details**: `string`

Defined in: [lib/types.ts:542](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L542)

Zusätzliche, detaillierte Projektinformationen.

##### \_endDate

> `private` **\_endDate**: `string`

Defined in: [lib/types.ts:534](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L534)

Das Enddatum des Projekts (Format: YYYY-MM-DD).

##### \_location

> `private` **\_location**: `string`

Defined in: [lib/types.ts:538](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L538)

Der geografische oder organisatorische Ort des Projekts.

##### \_members

> `private` **\_members**: [`ProjectMember`](#projectmember)[]

Defined in: [lib/types.ts:544](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L544)

Liste der dem Projekt zugewiesenen Mitglieder.

##### \_startDate

> `private` **\_startDate**: `string`

Defined in: [lib/types.ts:532](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L532)

Das Startdatum des Projekts (Format: YYYY-MM-DD).

##### \_state

> `private` **\_state**: `string`

Defined in: [lib/types.ts:536](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L536)

Der aktuelle Projektstatus (z. B. 'Ideen-Phase').

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:528](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L528)

Der Titel des Projekts.

##### \_websiteUrl

> `private` **\_websiteUrl**: `string`

Defined in: [lib/types.ts:540](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L540)

Optionale URL zur Projekt-Website.

#### Accessors

##### description

###### Get Signature

> **get** **description**(): `string`

Defined in: [lib/types.ts:576](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L576)

###### Returns

`string`

###### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:580](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L580)

###### Parameters

###### value

`string`

###### Returns

`void`

##### details

###### Get Signature

> **get** **details**(): `string`

Defined in: [lib/types.ts:624](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L624)

###### Returns

`string`

###### Set Signature

> **set** **details**(`value`): `void`

Defined in: [lib/types.ts:628](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L628)

###### Parameters

###### value

`string`

###### Returns

`void`

##### endDate

###### Get Signature

> **get** **endDate**(): `string`

Defined in: [lib/types.ts:592](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L592)

###### Returns

`string`

###### Set Signature

> **set** **endDate**(`value`): `void`

Defined in: [lib/types.ts:596](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L596)

###### Parameters

###### value

`string`

###### Returns

`void`

##### location

###### Get Signature

> **get** **location**(): `string`

Defined in: [lib/types.ts:608](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L608)

###### Returns

`string`

###### Set Signature

> **set** **location**(`value`): `void`

Defined in: [lib/types.ts:612](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L612)

###### Parameters

###### value

`string`

###### Returns

`void`

##### members

###### Get Signature

> **get** **members**(): [`ProjectMember`](#projectmember)[]

Defined in: [lib/types.ts:632](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L632)

###### Returns

[`ProjectMember`](#projectmember)[]

###### Set Signature

> **set** **members**(`value`): `void`

Defined in: [lib/types.ts:636](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L636)

###### Parameters

###### value

[`ProjectMember`](#projectmember)[]

###### Returns

`void`

##### startDate

###### Get Signature

> **get** **startDate**(): `string`

Defined in: [lib/types.ts:584](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L584)

###### Returns

`string`

###### Set Signature

> **set** **startDate**(`value`): `void`

Defined in: [lib/types.ts:588](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L588)

###### Parameters

###### value

`string`

###### Returns

`void`

##### state

###### Get Signature

> **get** **state**(): `string`

Defined in: [lib/types.ts:600](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L600)

###### Returns

`string`

###### Set Signature

> **set** **state**(`value`): `void`

Defined in: [lib/types.ts:604](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L604)

###### Parameters

###### value

`string`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:568](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L568)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:572](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L572)

###### Parameters

###### value

`string`

###### Returns

`void`

##### websiteUrl

###### Get Signature

> **get** **websiteUrl**(): `string`

Defined in: [lib/types.ts:616](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L616)

###### Returns

`string`

###### Set Signature

> **set** **websiteUrl**(`value`): `void`

Defined in: [lib/types.ts:620](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L620)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### Organization

Defined in: [lib/types.ts:1033](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1033)

Repräsentiert eine Organisation.
* ```mermaid
classDiagram
class Organization {
+number id
+string name
}
```

#### Constructors

##### Constructor

> **new Organization**(`id`, `name`): [`Organization`](#organization)

Defined in: [lib/types.ts:1039](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1039)

###### Parameters

###### id

`number`

###### name

`string`

###### Returns

[`Organization`](#organization)

#### Properties

##### \_id

> `private` **\_id**: `number`

Defined in: [lib/types.ts:1035](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1035)

Eindeutige ID der Organisation.

##### \_name

> `private` **\_name**: `string`

Defined in: [lib/types.ts:1037](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1037)

Der Name der Organisation.

#### Accessors

##### id

###### Get Signature

> **get** **id**(): `number`

Defined in: [lib/types.ts:1044](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1044)

###### Returns

`number`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:1048](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1048)

###### Parameters

###### value

`number`

###### Returns

`void`

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:1052](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1052)

###### Returns

`string`

###### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:1056](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1056)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### ProblemItem

Defined in: [lib/types.ts:251](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L251)

Repräsentiert eine Herausforderung oder ein Problem im System.
* ```mermaid
classDiagram
class ProblemItem {
+number id
+number problem_id
+string title
+string tags
+string category
+string status
+string statusColor
+string description
+string summary
+string impact
+string stakeholders
+string nextSteps
}
```

#### Constructors

##### Constructor

> **new ProblemItem**(`title`, `category`, `status`, `statusColor`, `id?`, `problem_id?`, `tags?`, `description?`, `summary?`, `impact?`, `stakeholders?`, `nextSteps?`): [`ProblemItem`](#problemitem)

Defined in: [lib/types.ts:277](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L277)

###### Parameters

###### title

`string`

###### category

`string`

###### status

`"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

###### statusColor

`"amber"` \| `"green"` \| `"slate"`

###### id?

`number`

###### problem\_id?

`number`

###### tags?

`string`

###### description?

`string`

###### summary?

`string`

###### impact?

`string`

###### stakeholders?

`string`

###### nextSteps?

`string`

###### Returns

[`ProblemItem`](#problemitem)

#### Properties

##### \_category

> `private` **\_category**: `string`

Defined in: [lib/types.ts:261](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L261)

Die übergeordnete Kategorie des Problems.

##### \_description?

> `private` `optional` **\_description?**: `string`

Defined in: [lib/types.ts:267](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L267)

Eine detaillierte Beschreibung des Problems oder kurze Zusammenfassung.

##### \_id?

> `private` `optional` **\_id?**: `number`

Defined in: [lib/types.ts:253](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L253)

Eindeutige ID des Problems (Primärschlüssel).

##### \_impact?

> `private` `optional` **\_impact?**: `string`

Defined in: [lib/types.ts:271](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L271)

Die Auswirkungen oder Konsequenzen, die das Problem verursacht.

##### \_nextSteps?

> `private` `optional` **\_nextSteps?**: `string`

Defined in: [lib/types.ts:275](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L275)

Die nächsten geplanten Schritte zur Lösung des Problems.

##### \_problem\_id?

> `private` `optional` **\_problem\_id?**: `number`

Defined in: [lib/types.ts:255](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L255)

Alternativer Feldname für die Problem-ID.

##### \_stakeholders?

> `private` `optional` **\_stakeholders?**: `string`

Defined in: [lib/types.ts:273](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L273)

Die betroffenen Personen, Abteilungen oder Stakeholder.

##### \_status

> `private` **\_status**: `"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

Defined in: [lib/types.ts:263](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L263)

Der aktuelle Bearbeitungsstatus.

##### \_statusColor

> `private` **\_statusColor**: `"amber"` \| `"green"` \| `"slate"`

Defined in: [lib/types.ts:265](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L265)

Die dem Status zugewiesene UI-Farbe.

##### \_summary?

> `private` `optional` **\_summary?**: `string`

Defined in: [lib/types.ts:269](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L269)

Alternativer Feldname für Beschreibung.

##### \_tags?

> `private` `optional` **\_tags?**: `string`

Defined in: [lib/types.ts:259](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L259)

Kommagetrennte oder formatierte Tags/Schlagworte zur Verschlagwortung.

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:257](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L257)

Der Titel oder die Überschrift des Problems.

#### Accessors

##### category

###### Get Signature

> **get** **category**(): `string`

Defined in: [lib/types.ts:337](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L337)

###### Returns

`string`

###### Set Signature

> **set** **category**(`value`): `void`

Defined in: [lib/types.ts:341](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L341)

###### Parameters

###### value

`string`

###### Returns

`void`

##### description

###### Get Signature

> **get** **description**(): `string` \| `undefined`

Defined in: [lib/types.ts:361](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L361)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:365](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L365)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### id

###### Get Signature

> **get** **id**(): `number` \| `undefined`

Defined in: [lib/types.ts:305](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L305)

###### Returns

`number` \| `undefined`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:309](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L309)

###### Parameters

###### value

`number` \| `undefined`

###### Returns

`void`

##### impact

###### Get Signature

> **get** **impact**(): `string` \| `undefined`

Defined in: [lib/types.ts:377](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L377)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **impact**(`value`): `void`

Defined in: [lib/types.ts:381](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L381)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### nextSteps

###### Get Signature

> **get** **nextSteps**(): `string` \| `undefined`

Defined in: [lib/types.ts:393](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L393)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **nextSteps**(`value`): `void`

Defined in: [lib/types.ts:397](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L397)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### problem\_id

###### Get Signature

> **get** **problem\_id**(): `number` \| `undefined`

Defined in: [lib/types.ts:313](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L313)

###### Returns

`number` \| `undefined`

###### Set Signature

> **set** **problem\_id**(`value`): `void`

Defined in: [lib/types.ts:317](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L317)

###### Parameters

###### value

`number` \| `undefined`

###### Returns

`void`

##### stakeholders

###### Get Signature

> **get** **stakeholders**(): `string` \| `undefined`

Defined in: [lib/types.ts:385](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L385)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **stakeholders**(`value`): `void`

Defined in: [lib/types.ts:389](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L389)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### status

###### Get Signature

> **get** **status**(): `"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

Defined in: [lib/types.ts:345](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L345)

###### Returns

`"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

###### Set Signature

> **set** **status**(`value`): `void`

Defined in: [lib/types.ts:349](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L349)

###### Parameters

###### value

`"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

###### Returns

`void`

##### statusColor

###### Get Signature

> **get** **statusColor**(): `"amber"` \| `"green"` \| `"slate"`

Defined in: [lib/types.ts:353](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L353)

###### Returns

`"amber"` \| `"green"` \| `"slate"`

###### Set Signature

> **set** **statusColor**(`value`): `void`

Defined in: [lib/types.ts:357](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L357)

###### Parameters

###### value

`"amber"` \| `"green"` \| `"slate"`

###### Returns

`void`

##### summary

###### Get Signature

> **get** **summary**(): `string` \| `undefined`

Defined in: [lib/types.ts:369](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L369)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **summary**(`value`): `void`

Defined in: [lib/types.ts:373](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L373)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### tags

###### Get Signature

> **get** **tags**(): `string` \| `undefined`

Defined in: [lib/types.ts:329](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L329)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **tags**(`value`): `void`

Defined in: [lib/types.ts:333](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L333)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:321](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L321)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:325](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L325)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### Project

Defined in: [lib/types.ts:78](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L78)

Repräsentiert ein registriertes (Smart-City-)Projekt.
* ```mermaid
classDiagram
class Project {
+string id
+string title
+string stage
+string topics
+string location
+string[] actors
+string value
}
```

#### Constructors

##### Constructor

> **new Project**(`id`, `title`, `stage?`, `topics?`, `location?`, `actors?`, `value?`): [`Project`](#project)

Defined in: [lib/types.ts:94](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L94)

###### Parameters

###### id

`string`

###### title

`string`

###### stage?

`string`

###### topics?

`string`

###### location?

`string`

###### actors?

`string`[]

###### value?

`string`

###### Returns

[`Project`](#project)

#### Properties

##### \_actors?

> `private` `optional` **\_actors?**: `string`[]

Defined in: [lib/types.ts:90](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L90)

Eine Liste der Namen aller beteiligten Akteure/Experten.

##### \_id

> `private` **\_id**: `string`

Defined in: [lib/types.ts:80](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L80)

Eindeutige ID des Projekts.

##### \_location?

> `private` `optional` **\_location?**: `string`

Defined in: [lib/types.ts:88](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L88)

Der geografische Ort oder Stadtteil des Projekts.

##### \_stage?

> `private` `optional` **\_stage?**: `string`

Defined in: [lib/types.ts:84](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L84)

Die aktuelle Projektphase oder Themen (z. B. "Test-Phase", "Technik").

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:82](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L82)

Der Projekttitel.

##### \_topics?

> `private` `optional` **\_topics?**: `string`

Defined in: [lib/types.ts:86](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L86)

Alternativer Feldname für Themen oder Standort.

##### \_value?

> `private` `optional` **\_value?**: `string`

Defined in: [lib/types.ts:92](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L92)

Ein dynamischer UI-Anzeigewert (Teaser-Text, URL oder formatiertes Update-Datum).

#### Accessors

##### actors

###### Get Signature

> **get** **actors**(): `string`[] \| `undefined`

Defined in: [lib/types.ts:152](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L152)

###### Returns

`string`[] \| `undefined`

###### Set Signature

> **set** **actors**(`value`): `void`

Defined in: [lib/types.ts:156](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L156)

###### Parameters

###### value

`string`[] \| `undefined`

###### Returns

`void`

##### id

###### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:112](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L112)

###### Returns

`string`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:116](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L116)

###### Parameters

###### value

`string`

###### Returns

`void`

##### location

###### Get Signature

> **get** **location**(): `string` \| `undefined`

Defined in: [lib/types.ts:144](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L144)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **location**(`value`): `void`

Defined in: [lib/types.ts:148](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L148)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### stage

###### Get Signature

> **get** **stage**(): `string` \| `undefined`

Defined in: [lib/types.ts:128](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L128)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **stage**(`value`): `void`

Defined in: [lib/types.ts:132](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L132)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:120](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L120)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:124](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L124)

###### Parameters

###### value

`string`

###### Returns

`void`

##### topics

###### Get Signature

> **get** **topics**(): `string` \| `undefined`

Defined in: [lib/types.ts:136](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L136)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **topics**(`value`): `void`

Defined in: [lib/types.ts:140](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L140)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### value

###### Get Signature

> **get** **value**(): `string` \| `undefined`

Defined in: [lib/types.ts:160](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L160)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **value**(`value`): `void`

Defined in: [lib/types.ts:164](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L164)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

***

### ProjectDetails

Defined in: [lib/types.ts:662](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L662)

Struktur für die vollständigen Details eines Projekts.
* ```mermaid
classDiagram
direction LR
ProjectDetails "1" --* "many" ProjectMember : besitzt
class ProjectDetails {
+string id
+string title
+string description
+string startDate
+string endDate
+string state
+string project_state
+string location
+string websiteUrl
+string details
+ProjectMember[] experts
}
```

#### Constructors

##### Constructor

> **new ProjectDetails**(`id`, `title`, `description`, `startDate`, `endDate`, `state`, `location`, `websiteUrl`, `details`, `experts`, `project_state?`): [`ProjectDetails`](#projectdetails)

Defined in: [lib/types.ts:686](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L686)

###### Parameters

###### id

`string`

###### title

`string`

###### description

`string`

###### startDate

`string`

###### endDate

`string`

###### state

`string`

###### location

`string`

###### websiteUrl

`string`

###### details

`string`

###### experts

[`ProjectMember`](#projectmember)[]

###### project\_state?

`string`

###### Returns

[`ProjectDetails`](#projectdetails)

#### Properties

##### \_description

> `private` **\_description**: `string`

Defined in: [lib/types.ts:668](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L668)

Kurze Zusammenfassung oder Beschreibung des Projekts.

##### \_details

> `private` **\_details**: `string`

Defined in: [lib/types.ts:682](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L682)

Zusätzliche, detaillierte Projektbeschreibungen oder Notizen.

##### \_endDate

> `private` **\_endDate**: `string`

Defined in: [lib/types.ts:672](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L672)

Enddatum des Projekts (Format: YYYY-MM-DD).

##### \_experts

> `private` **\_experts**: [`ProjectMember`](#projectmember)[]

Defined in: [lib/types.ts:684](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L684)

Liste aller dem Projekt zugewiesenen Experten.

##### \_id

> `private` **\_id**: `string`

Defined in: [lib/types.ts:664](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L664)

Eindeutige ID des Projekts.

##### \_location

> `private` **\_location**: `string`

Defined in: [lib/types.ts:678](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L678)

Geografischer oder organisatorischer Standort des Projekts.

##### \_project\_state?

> `private` `optional` **\_project\_state?**: `string`

Defined in: [lib/types.ts:676](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L676)

Alternativer oder datenbankspezifischer Projektstatus.

##### \_startDate

> `private` **\_startDate**: `string`

Defined in: [lib/types.ts:670](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L670)

Startdatum des Projekts (Format: YYYY-MM-DD).

##### \_state

> `private` **\_state**: `string`

Defined in: [lib/types.ts:674](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L674)

Der aktuelle Projektstatus (z. B. 'Ideen-Phase').

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:666](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L666)

Der Projekttitel.

##### \_websiteUrl

> `private` **\_websiteUrl**: `string`

Defined in: [lib/types.ts:680](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L680)

Optionale Projekt-Website-URL.

#### Accessors

##### description

###### Get Signature

> **get** **description**(): `string`

Defined in: [lib/types.ts:728](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L728)

###### Returns

`string`

###### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:732](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L732)

###### Parameters

###### value

`string`

###### Returns

`void`

##### details

###### Get Signature

> **get** **details**(): `string`

Defined in: [lib/types.ts:784](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L784)

###### Returns

`string`

###### Set Signature

> **set** **details**(`value`): `void`

Defined in: [lib/types.ts:788](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L788)

###### Parameters

###### value

`string`

###### Returns

`void`

##### endDate

###### Get Signature

> **get** **endDate**(): `string`

Defined in: [lib/types.ts:744](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L744)

###### Returns

`string`

###### Set Signature

> **set** **endDate**(`value`): `void`

Defined in: [lib/types.ts:748](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L748)

###### Parameters

###### value

`string`

###### Returns

`void`

##### experts

###### Get Signature

> **get** **experts**(): [`ProjectMember`](#projectmember)[]

Defined in: [lib/types.ts:792](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L792)

###### Returns

[`ProjectMember`](#projectmember)[]

###### Set Signature

> **set** **experts**(`value`): `void`

Defined in: [lib/types.ts:796](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L796)

###### Parameters

###### value

[`ProjectMember`](#projectmember)[]

###### Returns

`void`

##### id

###### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:712](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L712)

###### Returns

`string`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:716](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L716)

###### Parameters

###### value

`string`

###### Returns

`void`

##### location

###### Get Signature

> **get** **location**(): `string`

Defined in: [lib/types.ts:768](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L768)

###### Returns

`string`

###### Set Signature

> **set** **location**(`value`): `void`

Defined in: [lib/types.ts:772](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L772)

###### Parameters

###### value

`string`

###### Returns

`void`

##### project\_state

###### Get Signature

> **get** **project\_state**(): `string` \| `undefined`

Defined in: [lib/types.ts:760](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L760)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **project\_state**(`value`): `void`

Defined in: [lib/types.ts:764](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L764)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### startDate

###### Get Signature

> **get** **startDate**(): `string`

Defined in: [lib/types.ts:736](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L736)

###### Returns

`string`

###### Set Signature

> **set** **startDate**(`value`): `void`

Defined in: [lib/types.ts:740](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L740)

###### Parameters

###### value

`string`

###### Returns

`void`

##### state

###### Get Signature

> **get** **state**(): `string`

Defined in: [lib/types.ts:752](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L752)

###### Returns

`string`

###### Set Signature

> **set** **state**(`value`): `void`

Defined in: [lib/types.ts:756](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L756)

###### Parameters

###### value

`string`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:720](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L720)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:724](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L724)

###### Parameters

###### value

`string`

###### Returns

`void`

##### websiteUrl

###### Get Signature

> **get** **websiteUrl**(): `string`

Defined in: [lib/types.ts:776](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L776)

###### Returns

`string`

###### Set Signature

> **set** **websiteUrl**(`value`): `void`

Defined in: [lib/types.ts:780](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L780)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### ProjectMember

Defined in: [lib/types.ts:414](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L414)

Repräsentiert ein Mitglied innerhalb eines Projekts inklusive seiner RACI-Rolle.
* ```mermaid
classDiagram
class ProjectMember {
+string id
+number expertId
+string name
+string role
}
```

#### Constructors

##### Constructor

> **new ProjectMember**(`id`, `name`, `role`, `expertId?`): [`ProjectMember`](#projectmember)

Defined in: [lib/types.ts:429](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L429)

###### Parameters

###### id

`string`

###### name

`string`

###### role

`"R"` \| `"A"` \| `"C"` \| `"I"`

###### expertId?

`number`

###### Returns

[`ProjectMember`](#projectmember)

#### Properties

##### \_expertId?

> `private` `optional` **\_expertId?**: `number`

Defined in: [lib/types.ts:418](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L418)

Die echte ID des Experten aus der Datenbank (optional).

##### \_id

> `private` **\_id**: `string`

Defined in: [lib/types.ts:416](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L416)

Eindeutige temporäre ID für das UI-Mapping (z. B. generiert über `Date.now()`).

##### \_name

> `private` **\_name**: `string`

Defined in: [lib/types.ts:420](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L420)

Der Name des Experten.

##### \_role

> `private` **\_role**: `"R"` \| `"A"` \| `"C"` \| `"I"`

Defined in: [lib/types.ts:427](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L427)

Die RACI-Rolle des Mitglieds im Projekt:
- `R`: Responsible (Durchführungsverantwortlich)
- `A`: Accountable (Kosten-/Gesamtverantwortlich)
- `C`: Consulted (Fachlich beratend)
- `I`: Informed (Zu informieren)

#### Accessors

##### expertId

###### Get Signature

> **get** **expertId**(): `number` \| `undefined`

Defined in: [lib/types.ts:444](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L444)

###### Returns

`number` \| `undefined`

###### Set Signature

> **set** **expertId**(`value`): `void`

Defined in: [lib/types.ts:448](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L448)

###### Parameters

###### value

`number` \| `undefined`

###### Returns

`void`

##### id

###### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:436](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L436)

###### Returns

`string`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:440](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L440)

###### Parameters

###### value

`string`

###### Returns

`void`

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:452](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L452)

###### Returns

`string`

###### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:456](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L456)

###### Parameters

###### value

`string`

###### Returns

`void`

##### role

###### Get Signature

> **get** **role**(): `"R"` \| `"A"` \| `"C"` \| `"I"`

Defined in: [lib/types.ts:460](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L460)

###### Returns

`"R"` \| `"A"` \| `"C"` \| `"I"`

###### Set Signature

> **set** **role**(`value`): `void`

Defined in: [lib/types.ts:464](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L464)

###### Parameters

###### value

`"R"` \| `"A"` \| `"C"` \| `"I"`

###### Returns

`void`

## Interfaces

### AddExpertViewProps

Defined in: [lib/types.ts:814](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L814)

Eigenschaften (Props) für eine Komponente zum Hinzufügen oder Bearbeiten eines Experten.
Callbacks sind optional, da die Komponente alternativ integrierte Fallback-Navigation besitzt.
* ```mermaid
classDiagram
direction LR
AddExpertViewProps ..> ExpertFormData : nutzt
class AddExpertViewProps {
+onSave(formData: ExpertFormData) void
+onCancel() void
}
```

#### Properties

##### onCancel?

> `optional` **onCancel?**: () => `void`

Defined in: [lib/types.ts:823](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L823)

Callback-Funktion, um den Vorgang abzubrechen und zur vorherigen Ansicht zurückzukehren.

###### Returns

`void`

##### onSave?

> `optional` **onSave?**: (`formData`) => `void`

Defined in: [lib/types.ts:819](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L819)

Callback-Funktion, die aufgerufen wird, wenn die Expertendaten erfolgreich validiert und gespeichert wurden.

###### Parameters

###### formData

[`ExpertFormData`](#expertformdata)

Die eingegebenen Formulardaten des Experten.

###### Returns

`void`


<a name="modulesmd"></a>

[**Documentation**](#readmemd)

***

# Documentation

## Modules

- [app/api/challenges/add/route](#appapichallengesaddroutemd)
- [app/api/challenges/delete/route](#appapichallengesdeleteroutemd)
- [app/api/challenges/list/route](#appapichallengeslistroutemd)
- [app/api/sandbox/add/route](#appapisandboxaddroutemd)
- [app/api/sandbox/list/route](#appapisandboxlistroutemd)
- [app/api/sandbox/update/route](#appapisandboxupdateroutemd)
- [app/api/users/create/route](#appapiuserscreateroutemd)
- [app/api/users/delete/route](#appapiusersdeleteroutemd)
- [app/api/users/list/route](#appapiuserslistroutemd)
- [app/api/users/update/route](#appapiusersupdateroutemd)
- [app/challenge/add/page](#appchallengeaddpagemd)
- [app/challenge/page](#appchallengepagemd)
- [app/components/Agentbar](#appcomponentsagentbarmd)
- [app/components/Sidebar](#appcomponentssidebarmd)
- [app/components/Topbar](#appcomponentstopbarmd)
- [app/layout](#applayoutmd)
- [app/page](#apppagemd)
- [app/relations/add/page](#apprelationsaddpagemd)
- [app/relations/page](#apprelationspagemd)
- [app/relations/Person](#apprelationspersonmd)
- [app/relations/update/page](#apprelationsupdatepagemd)
- [app/sandbox/add/page](#appsandboxaddpagemd)
- [app/sandbox/page](#appsandboxpagemd)
- [app/sandbox/project/details/page](#appsandboxprojectdetailspagemd)
- [app/search/page](#appsearchpagemd)
- [lib/db](#libdbmd)
- [lib/types](#libtypesmd)
- [next.config](#nextconfigmd)
- [prisma.config](#prismaconfigmd)


<a name="nextconfigmd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / next.config

# next.config

## Variables

### default

> `const` **default**: `NextConfig` = `{}`

Defined in: [next.config.ts:3](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/next.config.ts#L3)


<a name="prismaconfigmd"></a>

[**Documentation**](#readmemd)

***

[Documentation](#modulesmd) / prisma.config

# prisma.config

## Variables

### default

> **default**: `PrismaConfigInternal`

Defined in: [prisma.config.ts:6](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/prisma.config.ts#L6)
