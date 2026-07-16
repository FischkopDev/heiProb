[**webapp**](../../../README.md)

***

[webapp](../../../modules.md) / [lib/types](../README.md) / Project

# Interface: Project

Defined in: [lib/types.ts:39](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L39)

Repräsentiert ein registriertes (Smart-City-)Projekt.
* ```mermaid
classDiagram
class Project {
+string id
+string title
+string stage
+string topics
+string location
+string[] actors
+string value
}
```

## Properties

### actors?

> `optional` **actors?**: `string`[]

Defined in: [lib/types.ts:51](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L51)

Eine Liste der Namen aller beteiligten Akteure/Experten.

***

### id

> **id**: `string`

Defined in: [lib/types.ts:41](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L41)

Eindeutige ID des Projekts.

***

### location?

> `optional` **location?**: `string`

Defined in: [lib/types.ts:49](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L49)

Der geografische Ort oder Stadtteil des Projekts.

***

### stage?

> `optional` **stage?**: `string`

Defined in: [lib/types.ts:45](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L45)

Die aktuelle Projektphase oder Themen (z. B. "Test-Phase", "Technik").

***

### title

> **title**: `string`

Defined in: [lib/types.ts:43](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L43)

Der Projekttitel.

***

### topics?

> `optional` **topics?**: `string`

Defined in: [lib/types.ts:47](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L47)

Alternativer Feldname für Themen oder Standort.

***

### value?

> `optional` **value?**: `string`

Defined in: [lib/types.ts:53](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L53)

Ein dynamischer UI-Anzeigewert (Teaser-Text, URL oder formatiertes Update-Datum).
