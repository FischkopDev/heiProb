[**Documentation**](../../../../README.md)

***

[Documentation](../../../../modules.md) / app/api/sandbox/add/route

# app/api/sandbox/add/route

## Functions

### POST()

> **POST**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `projectId`: `any`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/sandbox/add/route.ts:123](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/sandbox/add/route.ts#L123)

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
