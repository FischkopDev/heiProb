[**Heiprob**](../../../../../../README.md)

***

[Heiprob](../../../../../../modules.md) / [app/api/users/create/route](../README.md) / addExpertFields

# Function: addExpertFields()

> **addExpertFields**(`expertId`, `expertFields`): `Promise`\<`QueryResult`\<`any`\>[]\>

Defined in: [app/api/users/create/route.ts:82](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/app/api/users/create/route.ts#L82)

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
