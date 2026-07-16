[**webapp**](../../../README.md)

***

[webapp](../../../modules.md) / [lib/types](../README.md) / ProjectDetails

# Interface: ProjectDetails

Defined in: [lib/types.ts:232](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L232)

Struktur für die vollständigen Details eines Projekts.
* ```mermaid
classDiagram
direction LR
ProjectDetails "1" --* "many" ProjectMember : besitzt
class ProjectDetails {
+string id
+string title
+string description
+string startDate
+string endDate
+string state
+string project_state
+string location
+string websiteUrl
+string details
+ProjectMember[] experts
}
```

## Properties

### description

> **description**: `string`

Defined in: [lib/types.ts:238](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L238)

Kurze Zusammenfassung oder Beschreibung des Projekts.

***

### details

> **details**: `string`

Defined in: [lib/types.ts:252](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L252)

Zusätzliche, detaillierte Projektbeschreibungen oder Notizen.

***

### endDate

> **endDate**: `string`

Defined in: [lib/types.ts:242](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L242)

Enddatum des Projekts (Format: YYYY-MM-DD).

***

### experts

> **experts**: [`ProjectMember`](ProjectMember.md)[]

Defined in: [lib/types.ts:254](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L254)

Liste aller dem Projekt zugewiesenen Experten.

***

### id

> **id**: `string`

Defined in: [lib/types.ts:234](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L234)

Eindeutige ID des Projekts.

***

### location

> **location**: `string`

Defined in: [lib/types.ts:248](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L248)

Geografischer oder organisatorischer Standort des Projekts.

***

### project\_state?

> `optional` **project\_state?**: `string`

Defined in: [lib/types.ts:246](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L246)

Alternativer oder datenbankspezifischer Projektstatus.

***

### startDate

> **startDate**: `string`

Defined in: [lib/types.ts:240](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L240)

Startdatum des Projekts (Format: YYYY-MM-DD).

***

### state

> **state**: `string`

Defined in: [lib/types.ts:244](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L244)

Der aktuelle Projektstatus (z. B. 'Ideen-Phase').

***

### title

> **title**: `string`

Defined in: [lib/types.ts:236](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L236)

Der Projekttitel.

***

### websiteUrl

> **websiteUrl**: `string`

Defined in: [lib/types.ts:250](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L250)

Optionale Projekt-Website-URL.
