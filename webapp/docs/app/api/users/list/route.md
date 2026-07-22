[**Documentation**](../../../../README.md)

***

[Documentation](../../../../modules.md) / app/api/users/list/route

# app/api/users/list/route

## Functions

### GET()

> **GET**(): `Promise`\<`NextResponse`\<\{ `count`: `number`; `experts`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/users/list/route.ts:82](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/list/route.ts#L82)

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

Defined in: [app/api/users/list/route.ts:21](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/list/route.ts#L21)

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
