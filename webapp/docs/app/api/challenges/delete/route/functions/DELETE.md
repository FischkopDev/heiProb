[**webapp**](../../../../../../README.md)

***

[webapp](../../../../../../modules.md) / [app/api/challenges/delete/route](../README.md) / DELETE

# Function: DELETE()

> **DELETE**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `message`: `string`; `success`: `boolean`; \}\>\>

Defined in: [app/api/challenges/delete/route.ts:74](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/app/api/challenges/delete/route.ts#L74)

HTTP DELETE-Handler zum Entfernen eines Challenges.

Dieser Endpunkt erwartet eine JSON mit der `challenge_id`.
Er validiert die Eingabe, ruft die Löschfunktion auf und gibt entsprechende
Statuscodes zurück (200, 400, 404, 500).

## Parameters

### request

`Request`

Das HTTP-Request-Objekt, das den JSON-Body mit der `challenge_id` enthalten muss.

## Returns

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

## Example

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
