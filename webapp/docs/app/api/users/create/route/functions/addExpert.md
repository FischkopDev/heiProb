[**Documentation**](../../../../../../README.md)

***

[Documentation](../../../../../../modules.md) / [app/api/users/create/route](../README.md) / addExpert

# Function: addExpert()

> **addExpert**(`body`): `Promise`\<\{ `expertId`: `any`; `fields`: `QueryResult`\<`any`\>[]; \}\>

Defined in: [app/api/users/create/route.ts:139](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/app/api/users/create/route.ts#L139)

Erstellt einen neuen Experten in der Datenbank.

Dieser Prozess beinhaltet:
1. Prüfung, ob die angegebene `primary_organization` existiert.
2. Falls nein: Automatische Erstellung der Organisation mit Standardwerten für `field` und `description`.
3. Einfügen des Experten mit der aufgelösten Organisations-ID.
4. Optional: Einfügen der Expertisefelder (expertFields).

## Parameters

### body

`any`

Das Objekt mit den Experten-Daten.

## Returns

`Promise`\<\{ `expertId`: `any`; `fields`: `QueryResult`\<`any`\>[]; \}\>

Objekt mit `expertId` und `fields` (Array von Einfügeergebnissen).

## Remarks

- Die Funktion erstellt automatisch eine Organisation, wenn sie nicht existiert, 
  wobei `field` und `description` leer gesetzt werden.
- Boolesche Felder (`economic`, `science`, `social`) defaults auf `false`, wenn nicht übergeben.
- Expertisefelder werden nach dem Einfügen des Experten hinzugefügt.
