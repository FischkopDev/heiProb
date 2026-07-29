[**Documentation**](../../../../../../README.md)

***

[Documentation](../../../../../../modules.md) / [app/api/challenges/add/route](../README.md) / addChallenge

# Function: addChallenge()

> **addChallenge**(`body`): `Promise`\<`number`\>

Defined in: [app/api/challenges/add/route.ts:21](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/challenges/add/route.ts#L21)

Fügt ein neues Problem (Challenge) in die Datenbank ein.

## Parameters

### body

Der Inhalt aus der JSON-Anfrage, der die Details des Problems enthält.

#### category

`string`

Die Kategorie des Problems.

#### description?

`string`

Eine detaillierte Beschreibung des Problems.

#### state

`string`

Der aktuelle Status/Zustand des Problems (z.B. "open", "closed").

#### title

`string`

Der Titel des Problems.

## Returns

`Promise`\<`number`\>

Die ID des neu erstellten Problems als Zahl.
         Gibt `0` zurück, falls ein Fehler auftritt oder kein ID-Wert generiert wurde.

## Throws

Wirft einen Fehler, wenn die Datenbankverbindung fehlschlägt oder die Abfrage ungültig ist.
                Der Fehler wird jedoch im `catch`-Block abgefangen und loggt, gibt aber `0` zurück.
