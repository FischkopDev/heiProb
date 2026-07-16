[**webapp**](../../../README.md)

***

[webapp](../../../modules.md) / [lib/types](../README.md) / ExpertFormData

# Interface: ExpertFormData

Defined in: [lib/types.ts:304](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L304)

Formulardaten-Struktur für Expert*innen.
* ```mermaid
classDiagram
class ExpertFormData {
+string name
+string prename
+string title
+string primary_organization
+string other_organizations
+string scientificAreas
+string email
+string phone
+string last_contact
+string description
+string expert_fields
+boolean economic
+boolean science
+boolean social
}
```

## Properties

### description

> **description**: `string`

Defined in: [lib/types.ts:324](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L324)

Eine detaillierte Beschreibung oder Kurzbiografie des Experten.

***

### economic

> **economic**: `boolean`

Defined in: [lib/types.ts:328](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L328)

Indikator, ob der Experte im wirtschaftlichen Bereich tätig ist.

***

### email

> **email**: `string`

Defined in: [lib/types.ts:318](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L318)

Die E-Mail-Adresse des Experten.

***

### expert\_fields

> **expert\_fields**: `string`

Defined in: [lib/types.ts:326](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L326)

Spezifische Fachbereiche oder Felder, in denen der Experte tätig ist.

***

### last\_contact?

> `optional` **last\_contact?**: `string`

Defined in: [lib/types.ts:322](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L322)

Datum des letzten Kontakts (optional).

***

### name

> **name**: `string`

Defined in: [lib/types.ts:306](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L306)

Der Nachname des Experten.

***

### other\_organizations

> **other\_organizations**: `string`

Defined in: [lib/types.ts:314](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L314)

Weitere Zugehörigkeiten oder Organisationen (kommagetrennt).

***

### phone

> **phone**: `string`

Defined in: [lib/types.ts:320](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L320)

Die Telefonnummer des Experten.

***

### prename

> **prename**: `string`

Defined in: [lib/types.ts:308](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L308)

Der Vorname des Experten.

***

### primary\_organization

> **primary\_organization**: `string`

Defined in: [lib/types.ts:312](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L312)

Die primäre Zugehörigkeit oder Organisation.

***

### science

> **science**: `boolean`

Defined in: [lib/types.ts:330](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L330)

Indikator, ob der Experte im wissenschaftlichen Bereich tätig ist.

***

### scientificAreas

> **scientificAreas**: `string`

Defined in: [lib/types.ts:316](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L316)

Wissenschaftliche oder fachliche Arbeitsbereiche.

***

### social

> **social**: `boolean`

Defined in: [lib/types.ts:332](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L332)

Indikator, ob der Experte im sozialen Bereich tätig ist.

***

### title

> **title**: `string`

Defined in: [lib/types.ts:310](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L310)

Der Titel oder akademische Grad (z. B. "Prof. Dr.").
