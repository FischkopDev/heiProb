[**Documentation**](../../../../../../README.md)

***

[Documentation](../../../../../../modules.md) / [app/api/users/update/route](../README.md) / updateExpert

# Function: updateExpert()

> **updateExpert**(`id`, `body`): `Promise`\<`any`\>

Defined in: [app/api/users/update/route.ts:99](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/update/route.ts#L99)

Aktualisiert die Daten eines Experten in der Datenbank.

Dieser Prozess beinhaltet:
1. Prüfung und ggf. automatische Erstellung der angegebenen `primary_organization`.
2. Aktualisierung der Expertenfelder unter Verwendung von `COALESCE`, um nicht übergebene Werte beizubehalten.

## Parameters

### id

`number`

Die ID des zu aktualisierenden Experten (`expert_id`).

### body

`any`

Das Objekt mit den zu aktualisierenden Daten.

## Returns

`Promise`\<`any`\>

Das aktualisierte Experten-Objekt (inkl. aller Felder) bei Erfolg.
         Gibt `undefined` zurück, wenn kein Experte mit der angegebenen ID existiert.

## Remarks

- Wenn `primary_organization` angegeben ist, wird geprüft, ob sie existiert. Falls nicht, 
  wird sie mit dem aktuellen `location` (falls vorhanden) und leeren Feldern für `field`/`description` erstellt.
- Die SQL-Abfrage nutzt `COALESCE($1, column)`, um nur übermittelte Werte zu überschreiben.
- Falls `primary_organization` nicht im Body ist, bleibt die bisherige Zuordnung erhalten.
