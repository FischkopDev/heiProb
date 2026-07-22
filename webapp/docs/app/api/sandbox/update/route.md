[**Documentation**](../../../../README.md)

***

[Documentation](../../../../modules.md) / app/api/sandbox/update/route

# app/api/sandbox/update/route

## Functions

### PATCH()

> **PATCH**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `projectId`: `any`; `success`: `boolean`; \}\>\>

Defined in: [app/api/sandbox/update/route.ts:186](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/sandbox/update/route.ts#L186)

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
