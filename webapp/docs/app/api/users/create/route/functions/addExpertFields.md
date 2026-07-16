[**webapp**](../../../../../../README.md)

***

[webapp](../../../../../../modules.md) / [app/api/users/create/route](../README.md) / addExpertFields

# Function: addExpertFields()

> **addExpertFields**(`expertId`, `expertFields`): `Promise`\<`QueryResult`\<`any`\>[]\>

Defined in: [app/api/users/create/route.ts:82](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/app/api/users/create/route.ts#L82)

Fügt Expertisefelder für einen Experten in die Datenbank ein.

## Parameters

### expertId

`number`

Die ID des Experten.

### expertFields

`string`[]

Array von Feld-Strings, die die Expertisen des Experten darstellen.

## Returns

`Promise`\<`QueryResult`\<`any`\>[]\>

Array der Datenbank-Einfügeergebnisse (pg.QueryResult[]).

## Remarks

- Fängt Fehler ab und loggt sie, wirft aber keine Exception.
- Gibt ein leeres Array zurück, wenn expertFields leer oder undefined ist.
