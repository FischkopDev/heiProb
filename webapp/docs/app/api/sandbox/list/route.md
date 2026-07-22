[**Documentation**](../../../../README.md)

***

[Documentation](../../../../modules.md) / app/api/sandbox/list/route

# app/api/sandbox/list/route

## Functions

### GET()

> **GET**(): `Promise`\<`NextResponse`\<\{ `count`: `number`; `projects`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Defined in: [app/api/sandbox/list/route.ts:84](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/sandbox/list/route.ts#L84)

Handler für HTTP GET-Anfragen zum Abrufen der Sandbox-Projektliste.

Delegiert die Datenbankabfrage an `getListOfSandboxProjects()` und gibt
die Ergebnisse als JSON-Antwort zurück.

#### Returns

`Promise`\<`NextResponse`\<\{ `count`: `number`; `projects`: `any`[]; `success`: `boolean`; \}\> \| `NextResponse`\<\{ `details`: `any`; `error`: `string`; \}\>\>

Ein JSON-Antwortobjekt mit:
  - `success`: Boolean, ob die Anfrage erfolgreich war
  - `projects`: Array der Projekt-Objekte
  - `count`: Anzahl der zurückgegebenen Projekte

#### Throws

Gibt bei Fehlern eine JSON-Antwort mit Status 500 zurück
        und enthält Fehlerdetails im `details`-Feld.

#### Example

```ts
// Beispielantwort bei Erfolg:
{
  "success": true,
  "projects": [
    {
      "id": 1,
      "title": "Beispielprojekt",
      "experts": [
        { "expert_id": 5, "name": "Max Mustermann", "role": "Lead" }
      ]
    }
  ],
  "count": 1
}
```

***

### getListOfSandboxProjects()

> **getListOfSandboxProjects**(): `Promise`\<`any`[]\>

Defined in: [app/api/sandbox/list/route.ts:21](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/api/sandbox/list/route.ts#L21)

Ruft eine Liste von Sandbox-Projekten aus der Datenbank ab.

Diese Funktion führt eine komplexe Abfrage durch, die:
1. Alle Projekte aus der Tabelle "Project" selektiert
2. Über "ProjectRelation" mit Experten verknüpft (LEFT JOIN)
3. Experteninformationen als JSON-Array aggregiert
4. Nach dem letzten Update-Datum absteigend sortiert

#### Returns

`Promise`\<`any`[]\>

Ein Array von Projekt-Objekten, wobei jedes Projekt ein Feld `experts` 
         enthält, das ein Array von Experten mit `expert_id`, `name` und `role` ist.

#### Remarks

- Verwendet `COALESCE` und `FILTER` um leere Experten-Arrays als `[]` zurückzugeben
- `DISTINCT` verhindert Duplikate bei Mehrfachverknüpfungen
- Die Abfrage ist auf 50 Ergebnisse limitiert für Performance
