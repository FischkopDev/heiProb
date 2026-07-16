[**webapp**](../../../README.md)

***

[webapp](../../../modules.md) / [lib/types](../README.md) / ProblemItem

# Interface: ProblemItem

Defined in: [lib/types.ts:99](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L99)

Repräsentiert eine Herausforderung oder ein Problem im System.
* ```mermaid
classDiagram
class ProblemItem {
+number id
+number problem_id
+string title
+string tags
+string category
+string status
+string statusColor
+string description
+string summary
+string impact
+string stakeholders
+string nextSteps
}
```

## Properties

### category

> **category**: `string`

Defined in: [lib/types.ts:109](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L109)

Die übergeordnete Kategorie des Problems.

***

### description?

> `optional` **description?**: `string`

Defined in: [lib/types.ts:115](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L115)

Eine detaillierte Beschreibung des Problems oder kurze Zusammenfassung.

***

### id?

> `optional` **id?**: `number`

Defined in: [lib/types.ts:101](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L101)

Eindeutige ID des Problems (Primärschlüssel).

***

### impact?

> `optional` **impact?**: `string`

Defined in: [lib/types.ts:119](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L119)

Die Auswirkungen oder Konsequenzen, die das Problem verursacht.

***

### nextSteps?

> `optional` **nextSteps?**: `string`

Defined in: [lib/types.ts:123](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L123)

Die nächsten geplanten Schritte zur Lösung des Problems.

***

### problem\_id?

> `optional` **problem\_id?**: `number`

Defined in: [lib/types.ts:103](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L103)

Alternativer Feldname für die Problem-ID.

***

### stakeholders?

> `optional` **stakeholders?**: `string`

Defined in: [lib/types.ts:121](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L121)

Die betroffenen Personen, Abteilungen oder Stakeholder.

***

### status

> **status**: `"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

Defined in: [lib/types.ts:111](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L111)

Der aktuelle Bearbeitungsstatus.

***

### statusColor

> **statusColor**: `"amber"` \| `"green"` \| `"slate"`

Defined in: [lib/types.ts:113](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L113)

Die dem Status zugewiesene UI-Farbe.

***

### summary?

> `optional` **summary?**: `string`

Defined in: [lib/types.ts:117](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L117)

Alternativer Feldname für Beschreibung.

***

### tags?

> `optional` **tags?**: `string`

Defined in: [lib/types.ts:107](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L107)

Kommagetrennte oder formatierte Tags/Schlagworte zur Verschlagwortung.

***

### title

> **title**: `string`

Defined in: [lib/types.ts:105](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L105)

Der Titel oder die Überschrift des Problems.
