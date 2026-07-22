[**Documentation**](../../../../README.md)

***

[Documentation](../../../../modules.md) / app/api/users/update/route

# app/api/users/update/route

## Functions

### addOrganization()

> **addOrganization**(`name`, `location`, `field`, `description`): `Promise`\<`any`\>

Defined in: [app/api/users/update/route.ts:19](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/update/route.ts#L19)

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

- Logs Fehler an die Konsole, wirft aber keine Exception, um den Aufrufer nicht zu blockieren.
- Die Rückgabe von `0` bei Fehlern erfordert eine explizite Prüfung durch den Aufrufer.

***

### getOrganizationIdByName()

> **getOrganizationIdByName**(`name`): `Promise`\<`number` \| `null`\>

Defined in: [app/api/users/update/route.ts:48](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/update/route.ts#L48)

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

### PATCH()

> **PATCH**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `data`: `any`; `success`: `boolean`; \}\>\>

Defined in: [app/api/users/update/route.ts:173](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/update/route.ts#L173)

Handler für HTTP PATCH-Anfragen zum Aktualisieren eines bestehenden Experten.

Extrahiert die `expert_id` aus dem Request-Body, trennt sie von den Update-Daten 
und delegiert die Aktualisierung an `updateExpert()`.

#### Parameters

##### request

`Request`

Die eingehende HTTP-Anfrage.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `data`: `any`; `success`: `boolean`; \}\>\>

Ein JSON-Antwortobjekt:
  - `200`: Erfolg mit dem aktualisierten Experten-Objekt in `data`.
  - `400`: Fehlende `expert_id`.
  - `404`: Kein Experte mit der angegebenen ID gefunden.
  - `500`: Interner Serverfehler bei der Datenbankabfrage.

#### Example

```ts
// Erwarteter Request-Body:
{
  "expert_id": 123,
  "title": "Dr.",
  "primary_organization": "Neue Firma AG"
}
```

#### Remarks

- Nur die im Body enthaltenen Felder werden aktualisiert; alle anderen bleiben unverändert.
- Die Fehlermeldung bei fehlender ID ist auf Englisch, während andere Teile des Codes 
  teils Deutsch verwenden (Konsistenz könnte verbessert werden).

***

### updateExpert()

> **updateExpert**(`id`, `body`): `Promise`\<`any`\>

Defined in: [app/api/users/update/route.ts:99](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/update/route.ts#L99)

Aktualisiert die Daten eines Experten in der Datenbank.

Dieser Prozess beinhaltet:
1. Prüfung und ggf. automatische Erstellung der angegebenen `primary_organization`.
2. Aktualisierung der Expertenfelder unter Verwendung von `COALESCE`, um nicht übergebene Werte beizubehalten.

#### Parameters

##### id

`number`

Die ID des zu aktualisierenden Experten (`expert_id`).

##### body

`any`

Das Objekt mit den zu aktualisierenden Daten.

#### Returns

`Promise`\<`any`\>

Das aktualisierte Experten-Objekt (inkl. aller Felder) bei Erfolg.
         Gibt `undefined` zurück, wenn kein Experte mit der angegebenen ID existiert.

#### Remarks

- Wenn `primary_organization` angegeben ist, wird geprüft, ob sie existiert. Falls nicht, 
  wird sie mit dem aktuellen `location` (falls vorhanden) und leeren Feldern für `field`/`description` erstellt.
- Die SQL-Abfrage nutzt `COALESCE($1, column)`, um nur übermittelte Werte zu überschreiben.
- Falls `primary_organization` nicht im Body ist, bleibt die bisherige Zuordnung erhalten.
