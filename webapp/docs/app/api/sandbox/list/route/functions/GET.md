[**webapp**](../../../../../../README.md)

***

[webapp](../../../../../../modules.md) / [app/api/sandbox/list/route](../README.md) / GET

# Function: GET()

> **GET**(): `Promise`\<`NextResponse`\<\{ `count`: `number`; `projects`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/sandbox/list/route.ts:84](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/app/api/sandbox/list/route.ts#L84)

Handler für HTTP GET-Anfragen zum Abrufen der Sandbox-Projektliste.

Delegiert die Datenbankabfrage an `getListOfSandboxProjects()` und gibt
die Ergebnisse als JSON-Antwort zurück.

## Returns

`Promise`\<`NextResponse`\<\{ `count`: `number`; `projects`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein JSON-Antwortobjekt mit:
  - `success`: Boolean, ob die Anfrage erfolgreich war
  - `projects`: Array der Projekt-Objekte
  - `count`: Anzahl der zurückgegebenen Projekte

## Throws

Gibt bei Fehlern eine JSON-Antwort mit Status 500 zurück
        und enthält Fehlerdetails im `details`-Feld.

## Example

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
