[**webapp**](../../../README.md)

***

[webapp](../../../modules.md) / [lib/types](../README.md) / NewProject

# Interface: NewProject

Defined in: [lib/types.ts:190](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L190)

Struktur für das State-Objekt eines neu anzulegenden Projekts.
* ```mermaid
classDiagram
direction LR
NewProject "1" --* "many" ProjectMember : enthält
class NewProject {
+string title
+string description
+string startDate
+string endDate
+string state
+string location
+string websiteUrl
+string details
+ProjectMember[] members
}
```

## Properties

### description

> **description**: `string`

Defined in: [lib/types.ts:194](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L194)

Eine kurze Zusammenfassung oder Beschreibung des Projekts.

***

### details

> **details**: `string`

Defined in: [lib/types.ts:206](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L206)

Zusätzliche, detaillierte Projektinformationen.

***

### endDate

> **endDate**: `string`

Defined in: [lib/types.ts:198](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L198)

Das Enddatum des Projekts (Format: YYYY-MM-DD).

***

### location

> **location**: `string`

Defined in: [lib/types.ts:202](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L202)

Der geografische oder organisatorische Ort des Projekts.

***

### members

> **members**: [`ProjectMember`](ProjectMember.md)[]

Defined in: [lib/types.ts:208](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L208)

Liste der dem Projekt zugewiesenen Mitglieder.

***

### startDate

> **startDate**: `string`

Defined in: [lib/types.ts:196](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L196)

Das Startdatum des Projekts (Format: YYYY-MM-DD).

***

### state

> **state**: `string`

Defined in: [lib/types.ts:200](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L200)

Der aktuelle Projektstatus (z. B. 'Ideen-Phase').

***

### title

> **title**: `string`

Defined in: [lib/types.ts:192](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L192)

Der Titel des Projekts.

***

### websiteUrl

> **websiteUrl**: `string`

Defined in: [lib/types.ts:204](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L204)

Optionale URL zur Projekt-Website.
