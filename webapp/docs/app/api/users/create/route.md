[**Documentation**](../../../../README.md)

***

[Documentation](../../../../modules.md) / app/api/users/create/route

# app/api/users/create/route

## Functions

### addExpert()

> **addExpert**(`body`): `Promise`\<\{ `expertId`: `any`; `fields`: `QueryResult`\<`any`\>[]; \}\>

Defined in: [app/api/users/create/route.ts:139](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/create/route.ts#L139)

Erstellt einen neuen Experten in der Datenbank.

Dieser Prozess beinhaltet:
1. Prüfung, ob die angegebene `primary_organization` existiert.
2. Falls nein: Automatische Erstellung der Organisation mit Standardwerten für `field` und `description`.
3. Einfügen des Experten mit der aufgelösten Organisations-ID.
4. Optional: Einfügen der Expertisefelder (expertFields).

#### Parameters

##### body

`any`

Das Objekt mit den Experten-Daten.

#### Returns

`Promise`\<\{ `expertId`: `any`; `fields`: `QueryResult`\<`any`\>[]; \}\>

Objekt mit `expertId` und `fields` (Array von Einfügeergebnissen).

#### Remarks

- Die Funktion erstellt automatisch eine Organisation, wenn sie nicht existiert, 
  wobei `field` und `description` leer gesetzt werden.
- Boolesche Felder (`economic`, `science`, `social`) defaults auf `false`, wenn nicht übergeben.
- Expertisefelder werden nach dem Einfügen des Experten hinzugefügt.

***

### addExpertFields()

> **addExpertFields**(`expertId`, `expertFields`): `Promise`\<`QueryResult`\<`any`\>[]\>

Defined in: [app/api/users/create/route.ts:82](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/create/route.ts#L82)

Fügt Expertisefelder für einen Experten in die Datenbank ein.

#### Parameters

##### expertId

`number`

Die ID des Experten.

##### expertFields

`string`[]

Array von Feld-Strings, die die Expertisen des Experten darstellen.

#### Returns

`Promise`\<`QueryResult`\<`any`\>[]\>

Array der Datenbank-Einfügeergebnisse (pg.QueryResult[]).

#### Remarks

- Fängt Fehler ab und loggt sie, wirft aber keine Exception.
- Gibt ein leeres Array zurück, wenn expertFields leer oder undefined ist.

***

### addOrganization()

> **addOrganization**(`name`, `location`, `field`, `description`): `Promise`\<`any`\>

Defined in: [app/api/users/create/route.ts:19](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/create/route.ts#L19)

Fügt eine neue Organisation in die Datenbank ein.

#### Parameters

##### name

`string`

Der Name der Organisation (erforderlich).

##### location

`string`

Der Standort der Organisation.

##### field

`string`

Das Tätigkeitsfeld der Organisation.

##### description

`string`

Eine Beschreibung der Organisation.

#### Returns

`Promise`\<`any`\>

Die neu generierte `organization_id` bei Erfolg.
         Gibt `0` zurück, wenn ein Fehler auftritt oder kein ID-Wert zurückgegeben wird.

#### Remarks

- Logs Fehler an die Konsole, wirft aber keinen Exception, um den Aufrufer nicht zu blockieren.
- Die Rückgabe von `0` bei Fehlern erfordert eine explizite Prüfung durch den Aufrufer.

***

### getOrganizationIdByName()

> **getOrganizationIdByName**(`name`): `Promise`\<`number` \| `null`\>

Defined in: [app/api/users/create/route.ts:48](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/create/route.ts#L48)

Sucht die eindeutige ID einer Organisation anhand ihres Namens.

#### Parameters

##### name

`string`

Der Name der Organisation, nach dem gesucht werden soll.

#### Returns

`Promise`\<`number` \| `null`\>

Die `organization_id` als Zahl, falls gefunden, sonst `null`.

#### Remarks

- Nutzt `LIMIT 1`, da von eindeutigen Namen ausgegangen wird.
- Fängt Datenbankfehler ab und gibt `null` zurück.

***

### POST()

> **POST**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `expertId`: `any`; `fieldsAdded`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/users/create/route.ts:195](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/create/route.ts#L195)

Handler für HTTP POST-Anfragen zum Erstellen eines neuen Experten.

Validiert die erforderlichen Felder (`name`, `prename`, `email`) und delegiert 
die Erstellung an `addExpert()`.

#### Parameters

##### request

`Request`

Die eingehende HTTP-Anfrage.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; `required`: `string`[]; \}\> \| `NextResponse`\<\{ `expertId`: `any`; `fieldsAdded`: `number`; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein JSON-Antwortobjekt:
  - `200`: Erfolg mit `{ success: true, expertId: number, fieldsAdded: number }`
  - `400`: Fehlende Pflichtfelder
  - `500`: Interner Serverfehler

#### Example

```ts
// Erwartetes Body-Format:
{
  "name": "Max",
  "prename": "Mustermann",
  "email": "max@example.com",
  "primary_organization": "Beispiel GmbH",
  "title": "Dr.",
  "location": "Berlin",
  "economic": true,
  "expertFields": ["KI", "Machine Learning", "Data Science"]
}
```
