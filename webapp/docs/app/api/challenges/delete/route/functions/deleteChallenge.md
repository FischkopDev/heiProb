[**Documentation**](../../../../../../README.md)

***

[Documentation](../../../../../../modules.md) / [app/api/challenges/delete/route](../README.md) / deleteChallenge

# Function: deleteChallenge()

> **deleteChallenge**(`id`): `Promise`\<`boolean`\>

Defined in: [app/api/challenges/delete/route.ts:28](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/challenges/delete/route.ts#L28)

Löscht ein Problem (Challenge) aus der Datenbank basierend auf seiner ID.

Diese Funktion führt einen SQL-DELETE-Befehl aus und überprüft, ob tatsächlich
eine Zeile betroffen war. Sie wirft einen Fehler, wenn die Datenbankabfrage
selbst fehlschlägt (z.B. Verbindungsproblem).

## Parameters

### id

`number`

Die eindeutige ID des Problems (`problem_id`), das gelöscht werden soll.

## Returns

`Promise`\<`boolean`\>

`true`, wenn ein Datensatz mit der angegebenen ID gefunden und gelöscht wurde.
         `false`, wenn kein Datensatz mit dieser ID existierte (aber keine Datenbankfehler auftraten).

## Throws

Wirft einen Fehler, wenn die Datenbankverbindung unterbrochen wird oder
                die SQL-Abfrage syntaktisch/logisch fehlschlägt. Dieser Fehler muss vom
                Aufrufer (z.B. dem API-Handler) abgefangen werden.

## Example

```ts
const success = await deleteChallenge(123);
if (success) {
  console.log("Challenge gelöscht.");
} else {
  console.log("Challenge nicht gefunden.");
}
```
