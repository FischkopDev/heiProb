[**Documentation**](../../../../../../README.md)

***

[Documentation](../../../../../../modules.md) / [app/api/users/list/route](../README.md) / GET

# Function: GET()

> **GET**(): `Promise`\<`NextResponse`\<\{ `count`: `number`; `experts`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/users/list/route.ts:82](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/list/route.ts#L82)

Handler für HTTP GET-Anfragen zum Abrufen der Liste aller Personen mit Organisationsdaten und Expertisefeldern.

Delegiert die Datenbankabfrage an `getListOfPeopleWithOrganization()` und formatiert 
die Antwort als JSON mit Erfolgsmeldung, Ergebnisliste und Gesamtanzahl.

## Returns

`Promise`\<`NextResponse`\<\{ `count`: `number`; `experts`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein JSON-Antwortobjekt mit:
  - `success`: Boolean, ob die Anfrage erfolgreich war
  - `experts`: Array der Experten-Objekte (inkl. Organisations- und Expertisefelder-Daten)
  - `count`: Anzahl der zurückgegebenen Experten

## Throws

Gibt bei Fehlern eine JSON-Antwort mit Status 500 zurück
        und enthält Fehlerdetails im `details`-Feld.

## Example

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
