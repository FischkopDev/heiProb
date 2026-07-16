[**webapp**](../../../../../../README.md)

***

[webapp](../../../../../../modules.md) / [app/api/users/create/route](../README.md) / addOrganization

# Function: addOrganization()

> **addOrganization**(`name`, `location`, `field`, `description`): `Promise`\<`any`\>

Defined in: [app/api/users/create/route.ts:19](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/app/api/users/create/route.ts#L19)

Fügt eine neue Organisation in die Datenbank ein.

## Parameters

### name

`string`

Der Name der Organisation (erforderlich).

### location

`string`

Der Standort der Organisation.

### field

`string`

Das Tätigkeitsfeld der Organisation.

### description

`string`

Eine Beschreibung der Organisation.

## Returns

`Promise`\<`any`\>

Die neu generierte `organization_id` bei Erfolg.
         Gibt `0` zurück, wenn ein Fehler auftritt oder kein ID-Wert zurückgegeben wird.

## Remarks

- Logs Fehler an die Konsole, wirft aber keinen Exception, um den Aufrufer nicht zu blockieren.
- Die Rückgabe von `0` bei Fehlern erfordert eine explizite Prüfung durch den Aufrufer.
