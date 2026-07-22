[**Documentation**](../../../../README.md)

***

[Documentation](../../../../modules.md) / app/api/challenges/delete/route

# app/api/challenges/delete/route

## Functions

### DELETE()

> **DELETE**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `message`: `string`; `success`: `boolean`; \}\>\>

Defined in: [app/api/challenges/delete/route.ts:74](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/challenges/delete/route.ts#L74)

HTTP DELETE-Handler zum Entfernen eines Challenges.

Dieser Endpunkt erwartet eine JSON mit der `challenge_id`.
Er validiert die Eingabe, ruft die Löschfunktion auf und gibt entsprechende
Statuscodes zurück (200, 400, 404, 500).

#### Parameters

##### request

`Request`

Das HTTP-Request-Objekt, das den JSON-Body mit der `challenge_id` enthalten muss.

#### Returns

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

#### Example

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

***

### deleteChallenge()

> **deleteChallenge**(`id`): `Promise`\<`boolean`\>

Defined in: [app/api/challenges/delete/route.ts:28](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/challenges/delete/route.ts#L28)

Löscht ein Problem (Challenge) aus der Datenbank basierend auf seiner ID.

Diese Funktion führt einen SQL-DELETE-Befehl aus und überprüft, ob tatsächlich
eine Zeile betroffen war. Sie wirft einen Fehler, wenn die Datenbankabfrage
selbst fehlschlägt (z.B. Verbindungsproblem).

#### Parameters

##### id

`number`

Die eindeutige ID des Problems (`problem_id`), das gelöscht werden soll.

#### Returns

`Promise`\<`boolean`\>

`true`, wenn ein Datensatz mit der angegebenen ID gefunden und gelöscht wurde.
         `false`, wenn kein Datensatz mit dieser ID existierte (aber keine Datenbankfehler auftraten).

#### Throws

Wirft einen Fehler, wenn die Datenbankverbindung unterbrochen wird oder
                die SQL-Abfrage syntaktisch/logisch fehlschlägt. Dieser Fehler muss vom
                Aufrufer (z.B. dem API-Handler) abgefangen werden.

#### Example

```ts
const success = await deleteChallenge(123);
if (success) {
  console.log("Challenge gelöscht.");
} else {
  console.log("Challenge nicht gefunden.");
}
```
