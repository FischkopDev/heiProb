[**Documentation**](../README.md)

***

[Documentation](../modules.md) / lib/types

# lib/types

## Classes

### Challenge

Defined in: [lib/types.ts:13](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L13)

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

#### Constructors

##### Constructor

> **new Challenge**(`id`, `title`, `department`, `status`): [`Challenge`](#challenge)

Defined in: [lib/types.ts:23](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L23)

###### Parameters

###### id

`string`

###### title

`string`

###### department

`string`

###### status

`string`

###### Returns

[`Challenge`](#challenge)

#### Properties

##### \_department

> `private` **\_department**: `string`

Defined in: [lib/types.ts:19](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L19)

Das zuständige Amt oder die Abteilung.

##### \_id

> `private` **\_id**: `string`

Defined in: [lib/types.ts:15](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L15)

Eindeutige ID der Challenge.

##### \_status

> `private` **\_status**: `string`

Defined in: [lib/types.ts:21](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L21)

Der aktuelle Status der Challenge (z. B. "Aktiv", "In Vorbereitung").

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:17](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L17)

Der Titel oder die Überschrift der Challenge.

#### Accessors

##### department

###### Get Signature

> **get** **department**(): `string`

Defined in: [lib/types.ts:46](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L46)

###### Returns

`string`

###### Set Signature

> **set** **department**(`value`): `void`

Defined in: [lib/types.ts:50](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L50)

###### Parameters

###### value

`string`

###### Returns

`void`

##### id

###### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:30](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L30)

###### Returns

`string`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:34](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L34)

###### Parameters

###### value

`string`

###### Returns

`void`

##### status

###### Get Signature

> **get** **status**(): `string`

Defined in: [lib/types.ts:54](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L54)

###### Returns

`string`

###### Set Signature

> **set** **status**(`value`): `void`

Defined in: [lib/types.ts:58](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L58)

###### Parameters

###### value

`string`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:38](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L38)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:42](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L42)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### Expert

Defined in: [lib/types.ts:181](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L181)

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

#### Constructors

##### Constructor

> **new Expert**(`id`, `name`, `role`, `skills`): [`Expert`](#expert)

Defined in: [lib/types.ts:191](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L191)

###### Parameters

###### id

`string`

###### name

`string`

###### role

`string`

###### skills

`string`[]

###### Returns

[`Expert`](#expert)

#### Properties

##### \_id

> `private` **\_id**: `string`

Defined in: [lib/types.ts:183](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L183)

Eindeutige ID der Expert*in.

##### \_name

> `private` **\_name**: `string`

Defined in: [lib/types.ts:185](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L185)

Der vollständige Name.

##### \_role

> `private` **\_role**: `string`

Defined in: [lib/types.ts:187](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L187)

Die fachliche Rolle oder Kernkompetenz.

##### \_skills

> `private` **\_skills**: `string`[]

Defined in: [lib/types.ts:189](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L189)

Eine Liste von spezifischen Fähigkeiten oder Schlagworten (Skills).

#### Accessors

##### id

###### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:198](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L198)

###### Returns

`string`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:202](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L202)

###### Parameters

###### value

`string`

###### Returns

`void`

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:206](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L206)

###### Returns

`string`

###### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:210](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L210)

###### Parameters

###### value

`string`

###### Returns

`void`

##### role

###### Get Signature

> **get** **role**(): `string`

Defined in: [lib/types.ts:214](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L214)

###### Returns

`string`

###### Set Signature

> **set** **role**(`value`): `void`

Defined in: [lib/types.ts:218](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L218)

###### Parameters

###### value

`string`

###### Returns

`void`

##### skills

###### Get Signature

> **get** **skills**(): `string`[]

Defined in: [lib/types.ts:222](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L222)

###### Returns

`string`[]

###### Set Signature

> **set** **skills**(`value`): `void`

Defined in: [lib/types.ts:226](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L226)

###### Parameters

###### value

`string`[]

###### Returns

`void`

***

### ExpertFormData

Defined in: [lib/types.ts:848](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L848)

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

#### Constructors

##### Constructor

> **new ExpertFormData**(`name`, `prename`, `title`, `primary_organization`, `other_organizations`, `scientificAreas`, `email`, `phone`, `description`, `expert_fields`, `economic`, `science`, `social`, `last_contact?`): [`ExpertFormData`](#expertformdata)

Defined in: [lib/types.ts:878](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L878)

###### Parameters

###### name

`string`

###### prename

`string`

###### title

`string`

###### primary\_organization

`string`

###### other\_organizations

`string`

###### scientificAreas

`string`

###### email

`string`

###### phone

`string`

###### description

`string`

###### expert\_fields

`string`

###### economic

`boolean`

###### science

`boolean`

###### social

`boolean`

###### last\_contact?

`string`

###### Returns

[`ExpertFormData`](#expertformdata)

#### Properties

##### \_description

> `private` **\_description**: `string`

Defined in: [lib/types.ts:868](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L868)

Eine detaillierte Beschreibung oder Kurzbiografie des Experten.

##### \_economic

> `private` **\_economic**: `boolean`

Defined in: [lib/types.ts:872](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L872)

Indikator, ob der Experte im wirtschaftlichen Bereich tätig ist.

##### \_email

> `private` **\_email**: `string`

Defined in: [lib/types.ts:862](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L862)

Die E-Mail-Adresse des Experten.

##### \_expert\_fields

> `private` **\_expert\_fields**: `string`

Defined in: [lib/types.ts:870](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L870)

Spezifische Fachbereiche oder Felder, in denen der Experte tätig ist.

##### \_last\_contact?

> `private` `optional` **\_last\_contact?**: `string`

Defined in: [lib/types.ts:866](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L866)

Datum des letzten Kontakts (optional).

##### \_name

> `private` **\_name**: `string`

Defined in: [lib/types.ts:850](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L850)

Der Nachname des Experten.

##### \_other\_organizations

> `private` **\_other\_organizations**: `string`

Defined in: [lib/types.ts:858](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L858)

Weitere Zugehörigkeiten oder Organisationen (kommagetrennt).

##### \_phone

> `private` **\_phone**: `string`

Defined in: [lib/types.ts:864](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L864)

Die Telefonnummer des Experten.

##### \_prename

> `private` **\_prename**: `string`

Defined in: [lib/types.ts:852](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L852)

Der Vorname des Experten.

##### \_primary\_organization

> `private` **\_primary\_organization**: `string`

Defined in: [lib/types.ts:856](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L856)

Die primäre Zugehörigkeit oder Organisation.

##### \_science

> `private` **\_science**: `boolean`

Defined in: [lib/types.ts:874](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L874)

Indikator, ob der Experte im wissenschaftlichen Bereich tätig ist.

##### \_scientificAreas

> `private` **\_scientificAreas**: `string`

Defined in: [lib/types.ts:860](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L860)

Wissenschaftliche oder fachliche Arbeitsbereiche.

##### \_social

> `private` **\_social**: `boolean`

Defined in: [lib/types.ts:876](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L876)

Indikator, ob der Experte im sozialen Bereich tätig ist.

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:854](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L854)

Der Titel oder akademische Grad (z. B. "Prof. Dr.").

#### Accessors

##### description

###### Get Signature

> **get** **description**(): `string`

Defined in: [lib/types.ts:982](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L982)

###### Returns

`string`

###### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:986](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L986)

###### Parameters

###### value

`string`

###### Returns

`void`

##### economic

###### Get Signature

> **get** **economic**(): `boolean`

Defined in: [lib/types.ts:998](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L998)

###### Returns

`boolean`

###### Set Signature

> **set** **economic**(`value`): `void`

Defined in: [lib/types.ts:1002](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1002)

###### Parameters

###### value

`boolean`

###### Returns

`void`

##### email

###### Get Signature

> **get** **email**(): `string`

Defined in: [lib/types.ts:958](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L958)

###### Returns

`string`

###### Set Signature

> **set** **email**(`value`): `void`

Defined in: [lib/types.ts:962](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L962)

###### Parameters

###### value

`string`

###### Returns

`void`

##### expert\_fields

###### Get Signature

> **get** **expert\_fields**(): `string`

Defined in: [lib/types.ts:990](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L990)

###### Returns

`string`

###### Set Signature

> **set** **expert\_fields**(`value`): `void`

Defined in: [lib/types.ts:994](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L994)

###### Parameters

###### value

`string`

###### Returns

`void`

##### last\_contact

###### Get Signature

> **get** **last\_contact**(): `string` \| `undefined`

Defined in: [lib/types.ts:974](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L974)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **last\_contact**(`value`): `void`

Defined in: [lib/types.ts:978](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L978)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:910](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L910)

###### Returns

`string`

###### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:914](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L914)

###### Parameters

###### value

`string`

###### Returns

`void`

##### other\_organizations

###### Get Signature

> **get** **other\_organizations**(): `string`

Defined in: [lib/types.ts:942](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L942)

###### Returns

`string`

###### Set Signature

> **set** **other\_organizations**(`value`): `void`

Defined in: [lib/types.ts:946](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L946)

###### Parameters

###### value

`string`

###### Returns

`void`

##### phone

###### Get Signature

> **get** **phone**(): `string`

Defined in: [lib/types.ts:966](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L966)

###### Returns

`string`

###### Set Signature

> **set** **phone**(`value`): `void`

Defined in: [lib/types.ts:970](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L970)

###### Parameters

###### value

`string`

###### Returns

`void`

##### prename

###### Get Signature

> **get** **prename**(): `string`

Defined in: [lib/types.ts:918](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L918)

###### Returns

`string`

###### Set Signature

> **set** **prename**(`value`): `void`

Defined in: [lib/types.ts:922](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L922)

###### Parameters

###### value

`string`

###### Returns

`void`

##### primary\_organization

###### Get Signature

> **get** **primary\_organization**(): `string`

Defined in: [lib/types.ts:934](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L934)

###### Returns

`string`

###### Set Signature

> **set** **primary\_organization**(`value`): `void`

Defined in: [lib/types.ts:938](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L938)

###### Parameters

###### value

`string`

###### Returns

`void`

##### science

###### Get Signature

> **get** **science**(): `boolean`

Defined in: [lib/types.ts:1006](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1006)

###### Returns

`boolean`

###### Set Signature

> **set** **science**(`value`): `void`

Defined in: [lib/types.ts:1010](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1010)

###### Parameters

###### value

`boolean`

###### Returns

`void`

##### scientificAreas

###### Get Signature

> **get** **scientificAreas**(): `string`

Defined in: [lib/types.ts:950](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L950)

###### Returns

`string`

###### Set Signature

> **set** **scientificAreas**(`value`): `void`

Defined in: [lib/types.ts:954](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L954)

###### Parameters

###### value

`string`

###### Returns

`void`

##### social

###### Get Signature

> **get** **social**(): `boolean`

Defined in: [lib/types.ts:1014](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1014)

###### Returns

`boolean`

###### Set Signature

> **set** **social**(`value`): `void`

Defined in: [lib/types.ts:1018](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1018)

###### Parameters

###### value

`boolean`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:926](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L926)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:930](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L930)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### ExpertOption

Defined in: [lib/types.ts:479](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L479)

Struktur für die Auswahlliste (Dropdown) der verfügbaren Experten.
* ```mermaid
classDiagram
class ExpertOption {
+id: number | string
+string name
}
```

#### Constructors

##### Constructor

> **new ExpertOption**(`id`, `name`): [`ExpertOption`](#expertoption)

Defined in: [lib/types.ts:485](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L485)

###### Parameters

###### id

`string` \| `number`

###### name

`string`

###### Returns

[`ExpertOption`](#expertoption)

#### Properties

##### \_id

> `private` **\_id**: `string` \| `number`

Defined in: [lib/types.ts:481](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L481)

Die ID des Experten (as number or string).

##### \_name

> `private` **\_name**: `string`

Defined in: [lib/types.ts:483](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L483)

Der vollständige Name des Experten.

#### Accessors

##### id

###### Get Signature

> **get** **id**(): `string` \| `number`

Defined in: [lib/types.ts:490](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L490)

###### Returns

`string` \| `number`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:494](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L494)

###### Parameters

###### value

`string` \| `number`

###### Returns

`void`

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:498](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L498)

###### Returns

`string`

###### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:502](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L502)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### NewProject

Defined in: [lib/types.ts:526](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L526)

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

#### Constructors

##### Constructor

> **new NewProject**(`title`, `description`, `startDate`, `endDate`, `state`, `location`, `websiteUrl`, `details`, `members`): [`NewProject`](#newproject)

Defined in: [lib/types.ts:546](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L546)

###### Parameters

###### title

`string`

###### description

`string`

###### startDate

`string`

###### endDate

`string`

###### state

`string`

###### location

`string`

###### websiteUrl

`string`

###### details

`string`

###### members

[`ProjectMember`](#projectmember)[]

###### Returns

[`NewProject`](#newproject)

#### Properties

##### \_description

> `private` **\_description**: `string`

Defined in: [lib/types.ts:530](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L530)

Eine kurze Zusammenfassung oder Beschreibung des Projekts.

##### \_details

> `private` **\_details**: `string`

Defined in: [lib/types.ts:542](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L542)

Zusätzliche, detaillierte Projektinformationen.

##### \_endDate

> `private` **\_endDate**: `string`

Defined in: [lib/types.ts:534](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L534)

Das Enddatum des Projekts (Format: YYYY-MM-DD).

##### \_location

> `private` **\_location**: `string`

Defined in: [lib/types.ts:538](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L538)

Der geografische oder organisatorische Ort des Projekts.

##### \_members

> `private` **\_members**: [`ProjectMember`](#projectmember)[]

Defined in: [lib/types.ts:544](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L544)

Liste der dem Projekt zugewiesenen Mitglieder.

##### \_startDate

> `private` **\_startDate**: `string`

Defined in: [lib/types.ts:532](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L532)

Das Startdatum des Projekts (Format: YYYY-MM-DD).

##### \_state

> `private` **\_state**: `string`

Defined in: [lib/types.ts:536](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L536)

Der aktuelle Projektstatus (z. B. 'Ideen-Phase').

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:528](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L528)

Der Titel des Projekts.

##### \_websiteUrl

> `private` **\_websiteUrl**: `string`

Defined in: [lib/types.ts:540](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L540)

Optionale URL zur Projekt-Website.

#### Accessors

##### description

###### Get Signature

> **get** **description**(): `string`

Defined in: [lib/types.ts:576](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L576)

###### Returns

`string`

###### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:580](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L580)

###### Parameters

###### value

`string`

###### Returns

`void`

##### details

###### Get Signature

> **get** **details**(): `string`

Defined in: [lib/types.ts:624](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L624)

###### Returns

`string`

###### Set Signature

> **set** **details**(`value`): `void`

Defined in: [lib/types.ts:628](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L628)

###### Parameters

###### value

`string`

###### Returns

`void`

##### endDate

###### Get Signature

> **get** **endDate**(): `string`

Defined in: [lib/types.ts:592](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L592)

###### Returns

`string`

###### Set Signature

> **set** **endDate**(`value`): `void`

Defined in: [lib/types.ts:596](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L596)

###### Parameters

###### value

`string`

###### Returns

`void`

##### location

###### Get Signature

> **get** **location**(): `string`

Defined in: [lib/types.ts:608](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L608)

###### Returns

`string`

###### Set Signature

> **set** **location**(`value`): `void`

Defined in: [lib/types.ts:612](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L612)

###### Parameters

###### value

`string`

###### Returns

`void`

##### members

###### Get Signature

> **get** **members**(): [`ProjectMember`](#projectmember)[]

Defined in: [lib/types.ts:632](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L632)

###### Returns

[`ProjectMember`](#projectmember)[]

###### Set Signature

> **set** **members**(`value`): `void`

Defined in: [lib/types.ts:636](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L636)

###### Parameters

###### value

[`ProjectMember`](#projectmember)[]

###### Returns

`void`

##### startDate

###### Get Signature

> **get** **startDate**(): `string`

Defined in: [lib/types.ts:584](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L584)

###### Returns

`string`

###### Set Signature

> **set** **startDate**(`value`): `void`

Defined in: [lib/types.ts:588](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L588)

###### Parameters

###### value

`string`

###### Returns

`void`

##### state

###### Get Signature

> **get** **state**(): `string`

Defined in: [lib/types.ts:600](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L600)

###### Returns

`string`

###### Set Signature

> **set** **state**(`value`): `void`

Defined in: [lib/types.ts:604](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L604)

###### Parameters

###### value

`string`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:568](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L568)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:572](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L572)

###### Parameters

###### value

`string`

###### Returns

`void`

##### websiteUrl

###### Get Signature

> **get** **websiteUrl**(): `string`

Defined in: [lib/types.ts:616](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L616)

###### Returns

`string`

###### Set Signature

> **set** **websiteUrl**(`value`): `void`

Defined in: [lib/types.ts:620](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L620)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### Organization

Defined in: [lib/types.ts:1033](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1033)

Repräsentiert eine Organisation.
* ```mermaid
classDiagram
class Organization {
+number id
+string name
}
```

#### Constructors

##### Constructor

> **new Organization**(`id`, `name`): [`Organization`](#organization)

Defined in: [lib/types.ts:1039](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1039)

###### Parameters

###### id

`number`

###### name

`string`

###### Returns

[`Organization`](#organization)

#### Properties

##### \_id

> `private` **\_id**: `number`

Defined in: [lib/types.ts:1035](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1035)

Eindeutige ID der Organisation.

##### \_name

> `private` **\_name**: `string`

Defined in: [lib/types.ts:1037](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1037)

Der Name der Organisation.

#### Accessors

##### id

###### Get Signature

> **get** **id**(): `number`

Defined in: [lib/types.ts:1044](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1044)

###### Returns

`number`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:1048](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1048)

###### Parameters

###### value

`number`

###### Returns

`void`

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:1052](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1052)

###### Returns

`string`

###### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:1056](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L1056)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### ProblemItem

Defined in: [lib/types.ts:251](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L251)

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

#### Constructors

##### Constructor

> **new ProblemItem**(`title`, `category`, `status`, `statusColor`, `id?`, `problem_id?`, `tags?`, `description?`, `summary?`, `impact?`, `stakeholders?`, `nextSteps?`): [`ProblemItem`](#problemitem)

Defined in: [lib/types.ts:277](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L277)

###### Parameters

###### title

`string`

###### category

`string`

###### status

`"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

###### statusColor

`"amber"` \| `"green"` \| `"slate"`

###### id?

`number`

###### problem\_id?

`number`

###### tags?

`string`

###### description?

`string`

###### summary?

`string`

###### impact?

`string`

###### stakeholders?

`string`

###### nextSteps?

`string`

###### Returns

[`ProblemItem`](#problemitem)

#### Properties

##### \_category

> `private` **\_category**: `string`

Defined in: [lib/types.ts:261](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L261)

Die übergeordnete Kategorie des Problems.

##### \_description?

> `private` `optional` **\_description?**: `string`

Defined in: [lib/types.ts:267](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L267)

Eine detaillierte Beschreibung des Problems oder kurze Zusammenfassung.

##### \_id?

> `private` `optional` **\_id?**: `number`

Defined in: [lib/types.ts:253](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L253)

Eindeutige ID des Problems (Primärschlüssel).

##### \_impact?

> `private` `optional` **\_impact?**: `string`

Defined in: [lib/types.ts:271](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L271)

Die Auswirkungen oder Konsequenzen, die das Problem verursacht.

##### \_nextSteps?

> `private` `optional` **\_nextSteps?**: `string`

Defined in: [lib/types.ts:275](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L275)

Die nächsten geplanten Schritte zur Lösung des Problems.

##### \_problem\_id?

> `private` `optional` **\_problem\_id?**: `number`

Defined in: [lib/types.ts:255](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L255)

Alternativer Feldname für die Problem-ID.

##### \_stakeholders?

> `private` `optional` **\_stakeholders?**: `string`

Defined in: [lib/types.ts:273](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L273)

Die betroffenen Personen, Abteilungen oder Stakeholder.

##### \_status

> `private` **\_status**: `"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

Defined in: [lib/types.ts:263](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L263)

Der aktuelle Bearbeitungsstatus.

##### \_statusColor

> `private` **\_statusColor**: `"amber"` \| `"green"` \| `"slate"`

Defined in: [lib/types.ts:265](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L265)

Die dem Status zugewiesene UI-Farbe.

##### \_summary?

> `private` `optional` **\_summary?**: `string`

Defined in: [lib/types.ts:269](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L269)

Alternativer Feldname für Beschreibung.

##### \_tags?

> `private` `optional` **\_tags?**: `string`

Defined in: [lib/types.ts:259](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L259)

Kommagetrennte oder formatierte Tags/Schlagworte zur Verschlagwortung.

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:257](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L257)

Der Titel oder die Überschrift des Problems.

#### Accessors

##### category

###### Get Signature

> **get** **category**(): `string`

Defined in: [lib/types.ts:337](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L337)

###### Returns

`string`

###### Set Signature

> **set** **category**(`value`): `void`

Defined in: [lib/types.ts:341](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L341)

###### Parameters

###### value

`string`

###### Returns

`void`

##### description

###### Get Signature

> **get** **description**(): `string` \| `undefined`

Defined in: [lib/types.ts:361](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L361)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:365](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L365)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### id

###### Get Signature

> **get** **id**(): `number` \| `undefined`

Defined in: [lib/types.ts:305](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L305)

###### Returns

`number` \| `undefined`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:309](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L309)

###### Parameters

###### value

`number` \| `undefined`

###### Returns

`void`

##### impact

###### Get Signature

> **get** **impact**(): `string` \| `undefined`

Defined in: [lib/types.ts:377](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L377)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **impact**(`value`): `void`

Defined in: [lib/types.ts:381](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L381)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### nextSteps

###### Get Signature

> **get** **nextSteps**(): `string` \| `undefined`

Defined in: [lib/types.ts:393](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L393)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **nextSteps**(`value`): `void`

Defined in: [lib/types.ts:397](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L397)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### problem\_id

###### Get Signature

> **get** **problem\_id**(): `number` \| `undefined`

Defined in: [lib/types.ts:313](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L313)

###### Returns

`number` \| `undefined`

###### Set Signature

> **set** **problem\_id**(`value`): `void`

Defined in: [lib/types.ts:317](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L317)

###### Parameters

###### value

`number` \| `undefined`

###### Returns

`void`

##### stakeholders

###### Get Signature

> **get** **stakeholders**(): `string` \| `undefined`

Defined in: [lib/types.ts:385](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L385)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **stakeholders**(`value`): `void`

Defined in: [lib/types.ts:389](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L389)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### status

###### Get Signature

> **get** **status**(): `"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

Defined in: [lib/types.ts:345](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L345)

###### Returns

`"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

###### Set Signature

> **set** **status**(`value`): `void`

Defined in: [lib/types.ts:349](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L349)

###### Parameters

###### value

`"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

###### Returns

`void`

##### statusColor

###### Get Signature

> **get** **statusColor**(): `"amber"` \| `"green"` \| `"slate"`

Defined in: [lib/types.ts:353](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L353)

###### Returns

`"amber"` \| `"green"` \| `"slate"`

###### Set Signature

> **set** **statusColor**(`value`): `void`

Defined in: [lib/types.ts:357](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L357)

###### Parameters

###### value

`"amber"` \| `"green"` \| `"slate"`

###### Returns

`void`

##### summary

###### Get Signature

> **get** **summary**(): `string` \| `undefined`

Defined in: [lib/types.ts:369](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L369)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **summary**(`value`): `void`

Defined in: [lib/types.ts:373](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L373)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### tags

###### Get Signature

> **get** **tags**(): `string` \| `undefined`

Defined in: [lib/types.ts:329](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L329)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **tags**(`value`): `void`

Defined in: [lib/types.ts:333](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L333)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:321](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L321)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:325](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L325)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### Project

Defined in: [lib/types.ts:78](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L78)

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

#### Constructors

##### Constructor

> **new Project**(`id`, `title`, `stage?`, `topics?`, `location?`, `actors?`, `value?`): [`Project`](#project)

Defined in: [lib/types.ts:94](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L94)

###### Parameters

###### id

`string`

###### title

`string`

###### stage?

`string`

###### topics?

`string`

###### location?

`string`

###### actors?

`string`[]

###### value?

`string`

###### Returns

[`Project`](#project)

#### Properties

##### \_actors?

> `private` `optional` **\_actors?**: `string`[]

Defined in: [lib/types.ts:90](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L90)

Eine Liste der Namen aller beteiligten Akteure/Experten.

##### \_id

> `private` **\_id**: `string`

Defined in: [lib/types.ts:80](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L80)

Eindeutige ID des Projekts.

##### \_location?

> `private` `optional` **\_location?**: `string`

Defined in: [lib/types.ts:88](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L88)

Der geografische Ort oder Stadtteil des Projekts.

##### \_stage?

> `private` `optional` **\_stage?**: `string`

Defined in: [lib/types.ts:84](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L84)

Die aktuelle Projektphase oder Themen (z. B. "Test-Phase", "Technik").

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:82](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L82)

Der Projekttitel.

##### \_topics?

> `private` `optional` **\_topics?**: `string`

Defined in: [lib/types.ts:86](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L86)

Alternativer Feldname für Themen oder Standort.

##### \_value?

> `private` `optional` **\_value?**: `string`

Defined in: [lib/types.ts:92](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L92)

Ein dynamischer UI-Anzeigewert (Teaser-Text, URL oder formatiertes Update-Datum).

#### Accessors

##### actors

###### Get Signature

> **get** **actors**(): `string`[] \| `undefined`

Defined in: [lib/types.ts:152](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L152)

###### Returns

`string`[] \| `undefined`

###### Set Signature

> **set** **actors**(`value`): `void`

Defined in: [lib/types.ts:156](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L156)

###### Parameters

###### value

`string`[] \| `undefined`

###### Returns

`void`

##### id

###### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:112](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L112)

###### Returns

`string`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:116](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L116)

###### Parameters

###### value

`string`

###### Returns

`void`

##### location

###### Get Signature

> **get** **location**(): `string` \| `undefined`

Defined in: [lib/types.ts:144](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L144)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **location**(`value`): `void`

Defined in: [lib/types.ts:148](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L148)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### stage

###### Get Signature

> **get** **stage**(): `string` \| `undefined`

Defined in: [lib/types.ts:128](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L128)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **stage**(`value`): `void`

Defined in: [lib/types.ts:132](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L132)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:120](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L120)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:124](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L124)

###### Parameters

###### value

`string`

###### Returns

`void`

##### topics

###### Get Signature

> **get** **topics**(): `string` \| `undefined`

Defined in: [lib/types.ts:136](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L136)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **topics**(`value`): `void`

Defined in: [lib/types.ts:140](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L140)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### value

###### Get Signature

> **get** **value**(): `string` \| `undefined`

Defined in: [lib/types.ts:160](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L160)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **value**(`value`): `void`

Defined in: [lib/types.ts:164](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L164)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

***

### ProjectDetails

Defined in: [lib/types.ts:662](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L662)

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

#### Constructors

##### Constructor

> **new ProjectDetails**(`id`, `title`, `description`, `startDate`, `endDate`, `state`, `location`, `websiteUrl`, `details`, `experts`, `project_state?`): [`ProjectDetails`](#projectdetails)

Defined in: [lib/types.ts:686](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L686)

###### Parameters

###### id

`string`

###### title

`string`

###### description

`string`

###### startDate

`string`

###### endDate

`string`

###### state

`string`

###### location

`string`

###### websiteUrl

`string`

###### details

`string`

###### experts

[`ProjectMember`](#projectmember)[]

###### project\_state?

`string`

###### Returns

[`ProjectDetails`](#projectdetails)

#### Properties

##### \_description

> `private` **\_description**: `string`

Defined in: [lib/types.ts:668](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L668)

Kurze Zusammenfassung oder Beschreibung des Projekts.

##### \_details

> `private` **\_details**: `string`

Defined in: [lib/types.ts:682](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L682)

Zusätzliche, detaillierte Projektbeschreibungen oder Notizen.

##### \_endDate

> `private` **\_endDate**: `string`

Defined in: [lib/types.ts:672](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L672)

Enddatum des Projekts (Format: YYYY-MM-DD).

##### \_experts

> `private` **\_experts**: [`ProjectMember`](#projectmember)[]

Defined in: [lib/types.ts:684](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L684)

Liste aller dem Projekt zugewiesenen Experten.

##### \_id

> `private` **\_id**: `string`

Defined in: [lib/types.ts:664](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L664)

Eindeutige ID des Projekts.

##### \_location

> `private` **\_location**: `string`

Defined in: [lib/types.ts:678](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L678)

Geografischer oder organisatorischer Standort des Projekts.

##### \_project\_state?

> `private` `optional` **\_project\_state?**: `string`

Defined in: [lib/types.ts:676](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L676)

Alternativer oder datenbankspezifischer Projektstatus.

##### \_startDate

> `private` **\_startDate**: `string`

Defined in: [lib/types.ts:670](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L670)

Startdatum des Projekts (Format: YYYY-MM-DD).

##### \_state

> `private` **\_state**: `string`

Defined in: [lib/types.ts:674](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L674)

Der aktuelle Projektstatus (z. B. 'Ideen-Phase').

##### \_title

> `private` **\_title**: `string`

Defined in: [lib/types.ts:666](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L666)

Der Projekttitel.

##### \_websiteUrl

> `private` **\_websiteUrl**: `string`

Defined in: [lib/types.ts:680](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L680)

Optionale Projekt-Website-URL.

#### Accessors

##### description

###### Get Signature

> **get** **description**(): `string`

Defined in: [lib/types.ts:728](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L728)

###### Returns

`string`

###### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:732](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L732)

###### Parameters

###### value

`string`

###### Returns

`void`

##### details

###### Get Signature

> **get** **details**(): `string`

Defined in: [lib/types.ts:784](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L784)

###### Returns

`string`

###### Set Signature

> **set** **details**(`value`): `void`

Defined in: [lib/types.ts:788](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L788)

###### Parameters

###### value

`string`

###### Returns

`void`

##### endDate

###### Get Signature

> **get** **endDate**(): `string`

Defined in: [lib/types.ts:744](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L744)

###### Returns

`string`

###### Set Signature

> **set** **endDate**(`value`): `void`

Defined in: [lib/types.ts:748](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L748)

###### Parameters

###### value

`string`

###### Returns

`void`

##### experts

###### Get Signature

> **get** **experts**(): [`ProjectMember`](#projectmember)[]

Defined in: [lib/types.ts:792](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L792)

###### Returns

[`ProjectMember`](#projectmember)[]

###### Set Signature

> **set** **experts**(`value`): `void`

Defined in: [lib/types.ts:796](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L796)

###### Parameters

###### value

[`ProjectMember`](#projectmember)[]

###### Returns

`void`

##### id

###### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:712](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L712)

###### Returns

`string`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:716](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L716)

###### Parameters

###### value

`string`

###### Returns

`void`

##### location

###### Get Signature

> **get** **location**(): `string`

Defined in: [lib/types.ts:768](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L768)

###### Returns

`string`

###### Set Signature

> **set** **location**(`value`): `void`

Defined in: [lib/types.ts:772](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L772)

###### Parameters

###### value

`string`

###### Returns

`void`

##### project\_state

###### Get Signature

> **get** **project\_state**(): `string` \| `undefined`

Defined in: [lib/types.ts:760](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L760)

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **project\_state**(`value`): `void`

Defined in: [lib/types.ts:764](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L764)

###### Parameters

###### value

`string` \| `undefined`

###### Returns

`void`

##### startDate

###### Get Signature

> **get** **startDate**(): `string`

Defined in: [lib/types.ts:736](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L736)

###### Returns

`string`

###### Set Signature

> **set** **startDate**(`value`): `void`

Defined in: [lib/types.ts:740](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L740)

###### Parameters

###### value

`string`

###### Returns

`void`

##### state

###### Get Signature

> **get** **state**(): `string`

Defined in: [lib/types.ts:752](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L752)

###### Returns

`string`

###### Set Signature

> **set** **state**(`value`): `void`

Defined in: [lib/types.ts:756](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L756)

###### Parameters

###### value

`string`

###### Returns

`void`

##### title

###### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:720](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L720)

###### Returns

`string`

###### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:724](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L724)

###### Parameters

###### value

`string`

###### Returns

`void`

##### websiteUrl

###### Get Signature

> **get** **websiteUrl**(): `string`

Defined in: [lib/types.ts:776](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L776)

###### Returns

`string`

###### Set Signature

> **set** **websiteUrl**(`value`): `void`

Defined in: [lib/types.ts:780](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L780)

###### Parameters

###### value

`string`

###### Returns

`void`

***

### ProjectMember

Defined in: [lib/types.ts:414](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L414)

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

#### Constructors

##### Constructor

> **new ProjectMember**(`id`, `name`, `role`, `expertId?`): [`ProjectMember`](#projectmember)

Defined in: [lib/types.ts:429](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L429)

###### Parameters

###### id

`string`

###### name

`string`

###### role

`"R"` \| `"A"` \| `"C"` \| `"I"`

###### expertId?

`number`

###### Returns

[`ProjectMember`](#projectmember)

#### Properties

##### \_expertId?

> `private` `optional` **\_expertId?**: `number`

Defined in: [lib/types.ts:418](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L418)

Die echte ID des Experten aus der Datenbank (optional).

##### \_id

> `private` **\_id**: `string`

Defined in: [lib/types.ts:416](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L416)

Eindeutige temporäre ID für das UI-Mapping (z. B. generiert über `Date.now()`).

##### \_name

> `private` **\_name**: `string`

Defined in: [lib/types.ts:420](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L420)

Der Name des Experten.

##### \_role

> `private` **\_role**: `"R"` \| `"A"` \| `"C"` \| `"I"`

Defined in: [lib/types.ts:427](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L427)

Die RACI-Rolle des Mitglieds im Projekt:
- `R`: Responsible (Durchführungsverantwortlich)
- `A`: Accountable (Kosten-/Gesamtverantwortlich)
- `C`: Consulted (Fachlich beratend)
- `I`: Informed (Zu informieren)

#### Accessors

##### expertId

###### Get Signature

> **get** **expertId**(): `number` \| `undefined`

Defined in: [lib/types.ts:444](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L444)

###### Returns

`number` \| `undefined`

###### Set Signature

> **set** **expertId**(`value`): `void`

Defined in: [lib/types.ts:448](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L448)

###### Parameters

###### value

`number` \| `undefined`

###### Returns

`void`

##### id

###### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:436](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L436)

###### Returns

`string`

###### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:440](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L440)

###### Parameters

###### value

`string`

###### Returns

`void`

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:452](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L452)

###### Returns

`string`

###### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:456](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L456)

###### Parameters

###### value

`string`

###### Returns

`void`

##### role

###### Get Signature

> **get** **role**(): `"R"` \| `"A"` \| `"C"` \| `"I"`

Defined in: [lib/types.ts:460](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L460)

###### Returns

`"R"` \| `"A"` \| `"C"` \| `"I"`

###### Set Signature

> **set** **role**(`value`): `void`

Defined in: [lib/types.ts:464](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L464)

###### Parameters

###### value

`"R"` \| `"A"` \| `"C"` \| `"I"`

###### Returns

`void`

## Interfaces

### AddExpertViewProps

Defined in: [lib/types.ts:814](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L814)

Eigenschaften (Props) für eine Komponente zum Hinzufügen oder Bearbeiten eines Experten.
Callbacks sind optional, da die Komponente alternativ integrierte Fallback-Navigation besitzt.
* ```mermaid
classDiagram
direction LR
AddExpertViewProps ..> ExpertFormData : nutzt
class AddExpertViewProps {
+onSave(formData: ExpertFormData) void
+onCancel() void
}
```

#### Properties

##### onCancel?

> `optional` **onCancel?**: () => `void`

Defined in: [lib/types.ts:823](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L823)

Callback-Funktion, um den Vorgang abzubrechen und zur vorherigen Ansicht zurückzukehren.

###### Returns

`void`

##### onSave?

> `optional` **onSave?**: (`formData`) => `void`

Defined in: [lib/types.ts:819](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/lib/types.ts#L819)

Callback-Funktion, die aufgerufen wird, wenn die Expertendaten erfolgreich validiert und gespeichert wurden.

###### Parameters

###### formData

[`ExpertFormData`](#expertformdata)

Die eingegebenen Formulardaten des Experten.

###### Returns

`void`
