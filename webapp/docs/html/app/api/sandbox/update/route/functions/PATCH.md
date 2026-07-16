[**Heiprob**](../../../../../../README.md)

***

[Heiprob](../../../../../../modules.md) / [app/api/sandbox/update/route](../README.md) / PATCH

# Function: PATCH()

> **PATCH**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `projectId`: `any`; `success`: `boolean`; \}\>\>

Defined in: [app/api/sandbox/update/route.ts:186](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/app/api/sandbox/update/route.ts#L186)

Handler für HTTP PATCH-Anfragen zum Aktualisieren eines bestehenden Projekts.

Validiert die Anwesenheit der `project_id`, ruft die Update-Funktion auf 
und gibt das Ergebnis als JSON zurück.

## Parameters

### request

`Request`

Die eingehende HTTP-Anfrage.

## Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `projectId`: `any`; `success`: `boolean`; \}\>\>

Ein JSON-Antwortobjekt:
  - `200`: Erfolg mit `projectId`
  - `400`: Fehlende `project_id`
  - `404`: Projekt nicht gefunden
  - `500`: Interner Serverfehler

## Example

```ts
// Erwartetes Body-Format:
{
  "project_id": 123,
  "title": "Neuer Titel",
  "members": [{ "name": "Anna Schmidt", "role": "Developer" }]
}
```
