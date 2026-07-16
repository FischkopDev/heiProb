[**webapp**](../../../../../../README.md)

***

[webapp](../../../../../../modules.md) / [app/api/users/delete/route](../README.md) / deleteExpert

# Function: deleteExpert()

> **deleteExpert**(`id`): `Promise`\<`boolean`\>

Defined in: [app/api/users/delete/route.ts:19](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/app/api/users/delete/route.ts#L19)

Löscht einen Experten aus der Datenbank basierend auf der ID.

## Parameters

### id

`number`

Die eindeutige ID des zu löschenden Experten (`expert_id`).

## Returns

`Promise`\<`boolean`\>

`true`, wenn ein Datensatz erfolgreich gelöscht wurde.
         `false`, wenn kein Datensatz mit dieser ID existierte (und somit nichts gelöscht wurde).

## Throws

Wirft den ursprünglichen Datenbankfehler, falls die Abfrage technisch fehlschlägt 
        (z.B. Verbindungsfehler, Syntaxfehler), damit der Aufrufer dies behandeln kann.

## Remarks

- Die Abfrage nutzt `RETURNING expert_id`, um zu prüfen, ob tatsächlich eine Zeile betroffen war.
- Ein `false`-Rückgabewert bedeutet nicht zwangsläufig einen Fehler, sondern dass die ID nicht existierte.
