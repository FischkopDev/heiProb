[**webapp**](../../../../../../README.md)

***

[webapp](../../../../../../modules.md) / [app/api/challenges/list/route](../README.md) / GET

# Function: GET()

> **GET**(): `Promise`\<`NextResponse`\<\{ `challenges`: `any`[]; `count`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/challenges/list/route.ts:63](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/app/api/challenges/list/route.ts#L63)

HTTP GET-Handler zum Abrufen der Liste aller Challenges.

Dieser Endpunkt ruft die Funktion `getListOfChallenges` auf und gibt die Ergebnisse
als JSON-Objekt zurück. Er enthält Metadaten über den Erfolg und die Anzahl der Ergebnisse.

## Returns

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

## Example

```ts
// Beispiel für einen erfolgreichen Request
const response = await fetch('/api/challenges');
const data = await response.json();
console.log(data.challenges); // Array der Challenges
console.log(data.count); // Anzahl der Ergebnisse
```
