[**Documentation**](../../../../../../README.md)

***

[Documentation](../../../../../../modules.md) / [app/api/users/delete/route](../README.md) / DELETE

# Function: DELETE()

> **DELETE**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `message`: `string`; `success`: `boolean`; \}\>\>

Defined in: [app/api/users/delete/route.ts:75](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/delete/route.ts#L75)

Handler für HTTP DELETE-Anfragen zum Entfernen eines Experten.

Extrahiert die `expert_id` aus dem Request-Body, validiert sie und ruft 
die Löschfunktion auf. Unterscheidet zwischen fehlender ID, nicht existierendem 
Experten und technischen Fehlern.

## Parameters

### request

`Request`

Die eingehende HTTP-Anfrage.

## Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `message`: `string`; `success`: `boolean`; \}\>\>

Ein JSON-Antwortobjekt:
  - `200`: Erfolg mit Bestätigungsmeldung.
  - `400`: Fehlende oder ungültige `expert_id` im Body.
  - `404`: Kein Experte mit der angegebenen ID gefunden.
  - `500`: Interner Serverfehler bei der Datenbankabfrage.

## Example

```ts
// Erwarteter Request-Body:
{ "expert_id": 123 }
```

## Remarks

- Die Validierungsmeldungen sind teilweise auf Deutsch ("User ist nicht vorhanden"), 
  während die Erfolgsnachrichten auf Englisch sind. Für Konsistenz könnte man die 
  Sprache vereinheitlichen.
