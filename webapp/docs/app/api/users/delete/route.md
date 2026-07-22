[**Documentation**](../../../../README.md)

***

[Documentation](../../../../modules.md) / app/api/users/delete/route

# app/api/users/delete/route

## Functions

### DELETE()

> **DELETE**(`request`): `Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `message`: `string`; `success`: `boolean`; \}\>\>

Defined in: [app/api/users/delete/route.ts:75](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/delete/route.ts#L75)

Handler für HTTP DELETE-Anfragen zum Entfernen eines Experten.

Extrahiert die `expert_id` aus dem Request-Body, validiert sie und ruft 
die Löschfunktion auf. Unterscheidet zwischen fehlender ID, nicht existierendem 
Experten und technischen Fehlern.

#### Parameters

##### request

`Request`

Die eingehende HTTP-Anfrage.

#### Returns

`Promise`\<`NextResponse`\<\{ `error`: `string`; \}\> \| `NextResponse`\<\{ `message`: `string`; `success`: `boolean`; \}\>\>

Ein JSON-Antwortobjekt:
  - `200`: Erfolg mit Bestätigungsmeldung.
  - `400`: Fehlende oder ungültige `expert_id` im Body.
  - `404`: Kein Experte mit der angegebenen ID gefunden.
  - `500`: Interner Serverfehler bei der Datenbankabfrage.

#### Example

```ts
// Erwarteter Request-Body:
{ "expert_id": 123 }
```

#### Remarks

- Die Validierungsmeldungen sind teilweise auf Deutsch ("User ist nicht vorhanden"), 
  während die Erfolgsnachrichten auf Englisch sind. Für Konsistenz könnte man die 
  Sprache vereinheitlichen.

***

### deleteExpert()

> **deleteExpert**(`id`): `Promise`\<`boolean`\>

Defined in: [app/api/users/delete/route.ts:19](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/users/delete/route.ts#L19)

Löscht einen Experten aus der Datenbank basierend auf der ID.

#### Parameters

##### id

`number`

Die eindeutige ID des zu löschenden Experten (`expert_id`).

#### Returns

`Promise`\<`boolean`\>

`true`, wenn ein Datensatz erfolgreich gelöscht wurde.
         `false`, wenn kein Datensatz mit dieser ID existierte (und somit nichts gelöscht wurde).

#### Throws

Wirft den ursprünglichen Datenbankfehler, falls die Abfrage technisch fehlschlägt 
        (z.B. Verbindungsfehler, Syntaxfehler), damit der Aufrufer dies behandeln kann.

#### Remarks

- Die Abfrage nutzt `RETURNING expert_id`, um zu prüfen, ob tatsächlich eine Zeile betroffen war.
- Ein `false`-Rückgabewert bedeutet nicht zwangsläufig einen Fehler, sondern dass die ID nicht existierte.
