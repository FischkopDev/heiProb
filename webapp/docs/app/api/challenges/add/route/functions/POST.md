[**Documentation**](../../../../../../README.md)

***

[Documentation](../../../../../../modules.md) / [app/api/challenges/add/route](../README.md) / POST

# Function: POST()

> **POST**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `status`: `number`; `success`: `boolean`; `warning`: `string`; \}\> \| `NextResponse`\<\{ `problemId`: `number`; `status`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/challenges/add/route.ts:80](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/challenges/add/route.ts#L80)

HTTP POST-Handler zum Erstellen eines neuen Challenges.

Dieser Endpunkt validiert die eingehenden Daten, prüft auf erforderliche Felder
und ruft die interne Funktion `addChallenge` auf, um den Datensatz zu speichern.

## Parameters

### request

`Request`

Das HTTP-Request-Objekt, das den JSON-Body enthält.

## Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `status`: `number`; `success`: `boolean`; `warning`: `string`; \}\> \| `NextResponse`\<\{ `problemId`: `number`; `status`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein `NextResponse`-Objekt mit folgendem Inhalt:
         - **200 OK**: Bei Erfolg. `{ success: true, status: 200 }`
         - **400 Bad Request**: Wenn erforderliche Felder fehlen.
           `{ error: "Missing required fields", required: [...] }`
         - **500 Internal Server Error**: Bei Datenbankfehlern oder unerwarteten Ausnahmen.
           `{ error: "Failed to add challenge", details: error.message }`

## Example

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
