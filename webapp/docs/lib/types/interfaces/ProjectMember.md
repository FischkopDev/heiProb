[**webapp**](../../../README.md)

***

[webapp](../../../modules.md) / [lib/types](../README.md) / ProjectMember

# Interface: ProjectMember

Defined in: [lib/types.ts:138](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L138)

Repräsentiert ein Mitglied innerhalb eines Projekts inklusive seiner RACI-Rolle.
* ```mermaid
classDiagram
class ProjectMember {
+string id
+number expertId
+string name
+string role
}
```

## Properties

### expertId?

> `optional` **expertId?**: `number`

Defined in: [lib/types.ts:142](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L142)

Die echte ID des Experten aus der Datenbank (optional).

***

### id

> **id**: `string`

Defined in: [lib/types.ts:140](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L140)

Eindeutige temporäre ID für das UI-Mapping (z. B. generiert über `Date.now()`).

***

### name

> **name**: `string`

Defined in: [lib/types.ts:144](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L144)

Der Name des Experten.

***

### role

> **role**: `"R"` \| `"A"` \| `"C"` \| `"I"`

Defined in: [lib/types.ts:151](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L151)

Die RACI-Rolle des Mitglieds im Projekt:
- `R`: Responsible (Durchführungsverantwortlich)
- `A`: Accountable (Kosten-/Gesamtverantwortlich)
- `C`: Consulted (Fachlich beratend)
- `I`: Informed (Zu informieren)
