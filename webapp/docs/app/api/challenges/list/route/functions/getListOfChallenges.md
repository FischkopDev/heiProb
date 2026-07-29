[**Documentation**](../../../../../../README.md)

***

[Documentation](../../../../../../modules.md) / [app/api/challenges/list/route](../README.md) / getListOfChallenges

# Function: getListOfChallenges()

> **getListOfChallenges**(): `Promise`\<`any`[]\>

Defined in: [app/api/challenges/list/route.ts:23](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/challenges/list/route.ts#L23)

Holt eine Liste aller verfügbaren Challenges (Probleme) aus der Datenbank.

Diese Funktion führt eine SQL-Abfrage aus, die alle Einträge aus der Tabelle `"Problem"`
auswählt und nach Titel alphabetisch sortiert.

## Returns

`Promise`\<`any`[]\>

Ein Array mit den Datenbankzeilen (Objekten), die die Challenges repräsentieren.
         Jede Zeile enthält mindestens die Spalten der `"Problem"`-Tabelle.
         Gibt ein leeres Array zurück, wenn keine Einträge vorhanden sind.

## Throws

Wirft einen Fehler, wenn die Datenbankverbindung fehlschlägt oder die Abfrage
                syntaktisch ungültig ist. Der Fehler wird nicht abgefangen und muss vom
                Aufrufer (z.B. dem API-Handler) behandelt werden.

## Example

```ts
const challenges = await getListOfChallenges();
console.log(`Found ${challenges.length} challenges.`);
console.log(challenges[0]?.title); // Titel des ersten Challenges
```
