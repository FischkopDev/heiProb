[**Documentation**](../../../../README.md)

***

[Documentation](../../../../modules.md) / app/api/challenges/add/route

# app/api/challenges/add/route

## Functions

### addChallenge()

> **addChallenge**(`body`): `Promise`\<`number`\>

Defined in: [app/api/challenges/add/route.ts:21](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/challenges/add/route.ts#L21)

Fügt ein neues Problem (Challenge) in die Datenbank ein.

#### Parameters

##### body

Der Inhalt aus der JSON-Anfrage, der die Details des Problems enthält.

###### category

`string`

Die Kategorie des Problems.

###### description?

`string`

Eine detaillierte Beschreibung des Problems.

###### state

`string`

Der aktuelle Status/Zustand des Problems (z.B. "open", "closed").

###### title

`string`

Der Titel des Problems.

#### Returns

`Promise`\<`number`\>

Die ID des neu erstellten Problems als Zahl.
         Gibt `0` zurück, falls ein Fehler auftritt oder kein ID-Wert generiert wurde.

#### Throws

Wirft einen Fehler, wenn die Datenbankverbindung fehlschlägt oder die Abfrage ungültig ist.
                Der Fehler wird jedoch im `catch`-Block abgefangen und loggt, gibt aber `0` zurück.

***

### POST()

> **POST**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `status`: `number`; `success`: `boolean`; `warning`: `string`; \}\> \| `NextResponse`\<\{ `problemId`: `number`; `status`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/challenges/add/route.ts:80](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/challenges/add/route.ts#L80)

HTTP POST-Handler zum Erstellen eines neuen Challenges.

Dieser Endpunkt validiert die eingehenden Daten, prüft auf erforderliche Felder
und ruft die interne Funktion `addChallenge` auf, um den Datensatz zu speichern.

#### Parameters

##### request

`Request`

Das HTTP-Request-Objekt, das den JSON-Body enthält.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `status`: `number`; `success`: `boolean`; `warning`: `string`; \}\> \| `NextResponse`\<\{ `problemId`: `number`; `status`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein `NextResponse`-Objekt mit folgendem Inhalt:
         - **200 OK**: Bei Erfolg. `{ success: true, status: 200 }`
         - **400 Bad Request**: Wenn erforderliche Felder fehlen.
           `{ error: "Missing required fields", required: [...] }`
         - **500 Internal Server Error**: Bei Datenbankfehlern oder unerwarteten Ausnahmen.
           `{ error: "Failed to add challenge", details: error.message }`

#### Example

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
