[**Documentation**](../../../README.md)

***

[Documentation](../../../modules.md) / [lib/types](../README.md) / ExpertFormData

# Class: ExpertFormData

Defined in: [lib/types.ts:848](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L848)

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

## Constructors

### Constructor

> **new ExpertFormData**(`name`, `prename`, `title`, `primary_organization`, `other_organizations`, `scientificAreas`, `email`, `phone`, `description`, `expert_fields`, `economic`, `science`, `social`, `last_contact?`): `ExpertFormData`

Defined in: [lib/types.ts:878](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L878)

#### Parameters

##### name

`string`

##### prename

`string`

##### title

`string`

##### primary\_organization

`string`

##### other\_organizations

`string`

##### scientificAreas

`string`

##### email

`string`

##### phone

`string`

##### description

`string`

##### expert\_fields

`string`

##### economic

`boolean`

##### science

`boolean`

##### social

`boolean`

##### last\_contact?

`string`

#### Returns

`ExpertFormData`

## Accessors

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [lib/types.ts:982](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L982)

##### Returns

`string`

#### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:986](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L986)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### economic

#### Get Signature

> **get** **economic**(): `boolean`

Defined in: [lib/types.ts:998](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L998)

##### Returns

`boolean`

#### Set Signature

> **set** **economic**(`value`): `void`

Defined in: [lib/types.ts:1002](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1002)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### email

#### Get Signature

> **get** **email**(): `string`

Defined in: [lib/types.ts:958](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L958)

##### Returns

`string`

#### Set Signature

> **set** **email**(`value`): `void`

Defined in: [lib/types.ts:962](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L962)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### expert\_fields

#### Get Signature

> **get** **expert\_fields**(): `string`

Defined in: [lib/types.ts:990](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L990)

##### Returns

`string`

#### Set Signature

> **set** **expert\_fields**(`value`): `void`

Defined in: [lib/types.ts:994](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L994)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### last\_contact

#### Get Signature

> **get** **last\_contact**(): `string` \| `undefined`

Defined in: [lib/types.ts:974](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L974)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **last\_contact**(`value`): `void`

Defined in: [lib/types.ts:978](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L978)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:910](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L910)

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:914](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L914)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### other\_organizations

#### Get Signature

> **get** **other\_organizations**(): `string`

Defined in: [lib/types.ts:942](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L942)

##### Returns

`string`

#### Set Signature

> **set** **other\_organizations**(`value`): `void`

Defined in: [lib/types.ts:946](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L946)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### phone

#### Get Signature

> **get** **phone**(): `string`

Defined in: [lib/types.ts:966](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L966)

##### Returns

`string`

#### Set Signature

> **set** **phone**(`value`): `void`

Defined in: [lib/types.ts:970](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L970)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### prename

#### Get Signature

> **get** **prename**(): `string`

Defined in: [lib/types.ts:918](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L918)

##### Returns

`string`

#### Set Signature

> **set** **prename**(`value`): `void`

Defined in: [lib/types.ts:922](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L922)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### primary\_organization

#### Get Signature

> **get** **primary\_organization**(): `string`

Defined in: [lib/types.ts:934](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L934)

##### Returns

`string`

#### Set Signature

> **set** **primary\_organization**(`value`): `void`

Defined in: [lib/types.ts:938](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L938)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### science

#### Get Signature

> **get** **science**(): `boolean`

Defined in: [lib/types.ts:1006](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1006)

##### Returns

`boolean`

#### Set Signature

> **set** **science**(`value`): `void`

Defined in: [lib/types.ts:1010](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1010)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scientificAreas

#### Get Signature

> **get** **scientificAreas**(): `string`

Defined in: [lib/types.ts:950](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L950)

##### Returns

`string`

#### Set Signature

> **set** **scientificAreas**(`value`): `void`

Defined in: [lib/types.ts:954](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L954)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### social

#### Get Signature

> **get** **social**(): `boolean`

Defined in: [lib/types.ts:1014](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1014)

##### Returns

`boolean`

#### Set Signature

> **set** **social**(`value`): `void`

Defined in: [lib/types.ts:1018](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L1018)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### title

#### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:926](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L926)

##### Returns

`string`

#### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:930](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L930)

##### Parameters

###### value

`string`

##### Returns

`void`
