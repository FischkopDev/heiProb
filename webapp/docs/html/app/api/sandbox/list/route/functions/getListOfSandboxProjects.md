[**Heiprob**](../../../../../../README.md)

***

[Heiprob](../../../../../../modules.md) / [app/api/sandbox/list/route](../README.md) / getListOfSandboxProjects

# Function: getListOfSandboxProjects()

> **getListOfSandboxProjects**(): `Promise`\<`any`[]\>

Defined in: [app/api/sandbox/list/route.ts:21](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/app/api/sandbox/list/route.ts#L21)

Ruft eine Liste von Sandbox-Projekten aus der Datenbank ab.

Diese Funktion führt eine komplexe Abfrage durch, die:
1. Alle Projekte aus der Tabelle "Project" selektiert
2. Über "ProjectRelation" mit Experten verknüpft (LEFT JOIN)
3. Experteninformationen als JSON-Array aggregiert
4. Nach dem letzten Update-Datum absteigend sortiert

## Returns

`Promise`\<`any`[]\>

Ein Array von Projekt-Objekten, wobei jedes Projekt ein Feld `experts` 
         enthält, das ein Array von Experten mit `expert_id`, `name` und `role` ist.

## Remarks

- Verwendet `COALESCE` und `FILTER` um leere Experten-Arrays als `[]` zurückzugeben
- `DISTINCT` verhindert Duplikate bei Mehrfachverknüpfungen
- Die Abfrage ist auf 50 Ergebnisse limitiert für Performance
