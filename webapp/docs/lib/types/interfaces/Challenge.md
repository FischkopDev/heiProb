[**webapp**](../../../README.md)

***

[webapp](../../../modules.md) / [lib/types](../README.md) / Challenge

# Interface: Challenge

Defined in: [lib/types.ts:13](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L13)

Repräsentiert eine städtische oder organisatorische Herausforderung (Challenge).
* ```mermaid
classDiagram
class Challenge {
+string id
+string title
+string department
+string status
}
```

## Properties

### department

> **department**: `string`

Defined in: [lib/types.ts:19](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L19)

Das zuständige Amt oder die Abteilung.

***

### id

> **id**: `string`

Defined in: [lib/types.ts:15](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L15)

Eindeutige ID der Challenge.

***

### status

> **status**: `string`

Defined in: [lib/types.ts:21](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L21)

Der aktuelle Status der Challenge (z. B. "Aktiv", "In Vorbereitung").

***

### title

> **title**: `string`

Defined in: [lib/types.ts:17](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L17)

Der Titel oder die Überschrift der Challenge.
