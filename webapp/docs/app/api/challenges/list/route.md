[**Documentation**](../../../../README.md)

***

[Documentation](../../../../modules.md) / app/api/challenges/list/route

# app/api/challenges/list/route

## Functions

### GET()

> **GET**(): `Promise`\<`NextResponse`\<\{ `challenges`: `any`[]; `count`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/challenges/list/route.ts:63](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/challenges/list/route.ts#L63)

HTTP GET-Handler zum Abrufen der Liste aller Challenges.

Dieser Endpunkt ruft die Funktion `getListOfChallenges` auf und gibt die Ergebnisse
als JSON-Objekt zurück. Er enthält Metadaten über den Erfolg und die Anzahl der Ergebnisse.

#### Returns

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

#### Example

```ts
// Beispiel für einen erfolgreichen Request
const response = await fetch('/api/challenges');
const data = await response.json();
console.log(data.challenges); // Array der Challenges
console.log(data.count); // Anzahl der Ergebnisse
```

***

### getListOfChallenges()

> **getListOfChallenges**(): `Promise`\<`any`[]\>

Defined in: [app/api/challenges/list/route.ts:23](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/challenges/list/route.ts#L23)

Holt eine Liste aller verfügbaren Challenges (Probleme) aus der Datenbank.

Diese Funktion führt eine SQL-Abfrage aus, die alle Einträge aus der Tabelle `"Problem"`
auswählt und nach Titel alphabetisch sortiert.

#### Returns

`Promise`\<`any`[]\>

Ein Array mit den Datenbankzeilen (Objekten), die die Challenges repräsentieren.
         Jede Zeile enthält mindestens die Spalten der `"Problem"`-Tabelle.
         Gibt ein leeres Array zurück, wenn keine Einträge vorhanden sind.

#### Throws

Wirft einen Fehler, wenn die Datenbankverbindung fehlschlägt oder die Abfrage
                syntaktisch ungültig ist. Der Fehler wird nicht abgefangen und muss vom
                Aufrufer (z.B. dem API-Handler) behandelt werden.

#### Example

```ts
const challenges = await getListOfChallenges();
console.log(`Found ${challenges.length} challenges.`);
console.log(challenges[0]?.title); // Titel des ersten Challenges
```
