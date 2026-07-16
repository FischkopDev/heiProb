[**webapp**](../../../../../../README.md)

***

[webapp](../../../../../../modules.md) / [app/api/users/list/route](../README.md) / getListOfPeopleWithOrganization

# Function: getListOfPeopleWithOrganization()

> **getListOfPeopleWithOrganization**(): `Promise`\<`any`[]\>

Defined in: [app/api/users/list/route.ts:21](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/app/api/users/list/route.ts#L21)

Ruft eine Liste von Experten aus der Datenbank ab, jeweils ergänzt um ihre zugehörige Organisation und Expertisefelder.

Diese Funktion führt JOINs zwischen den Tabellen `"Expert"`, `"Organization"` und `"ExpertField"` durch,
um die Organisationsdaten und Expertisefelder als verschachtelte JSON-Objekte zurückzugeben.

## Returns

`Promise`\<`any`[]\>

Ein Array von Objekten, wobei jedes Objekt alle Felder des Experten (`e.*`) 
         sowie folgende Felder enthält:
         - `organization`: JSON-Objekt mit Organisations-Daten (organization_id, name, location, field, description)
         - `expertFields`: JSON-Array der Expertisefelder des Experten

## Remarks

- Die Ergebnisse sind alphabetisch nach dem Vornamen (`e.name`) sortiert.
- Die Abfrage ist auf maximal 50 Ergebnisse begrenzt (`LIMIT 50`).
- Nur Experten mit einer gültigen Zuordnung zu einer Organisation werden zurückgegeben (INNER JOIN).
- Expertisefelder werden mittels LEFT JOIN und Aggregation geladen, Experten ohne Felder erhalten ein leeres Array.
