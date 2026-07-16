[**webapp**](../../../README.md)

***

[webapp](../../../modules.md) / [lib/types](../README.md) / Expert

# Interface: Expert

Defined in: [lib/types.ts:68](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L68)

Repräsentiert ein Profil einer Expert*in oder einer Ansprechperson.
* ```mermaid
classDiagram
class Expert {
+string id
+string name
+string role
+string[] skills
}
```

## Properties

### id

> **id**: `string`

Defined in: [lib/types.ts:70](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L70)

Eindeutige ID der Expert*in.

***

### name

> **name**: `string`

Defined in: [lib/types.ts:72](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L72)

Der vollständige Name.

***

### role

> **role**: `string`

Defined in: [lib/types.ts:74](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L74)

Die fachliche Rolle oder Kernkompetenz.

***

### skills

> **skills**: `string`[]

Defined in: [lib/types.ts:76](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L76)

Eine Liste von spezifischen Fähigkeiten oder Schlagworten (Skills).
