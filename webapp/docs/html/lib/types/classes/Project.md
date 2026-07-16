[**Heiprob**](../../../README.md)

***

[Heiprob](../../../modules.md) / [lib/types](../README.md) / Project

# Class: Project

Defined in: [lib/types.ts:78](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L78)

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

## Constructors

### Constructor

> **new Project**(`id`, `title`, `stage?`, `topics?`, `location?`, `actors?`, `value?`): `Project`

Defined in: [lib/types.ts:94](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L94)

#### Parameters

##### id

`string`

##### title

`string`

##### stage?

`string`

##### topics?

`string`

##### location?

`string`

##### actors?

`string`[]

##### value?

`string`

#### Returns

`Project`

## Accessors

### actors

#### Get Signature

> **get** **actors**(): `string`[] \| `undefined`

Defined in: [lib/types.ts:152](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L152)

##### Returns

`string`[] \| `undefined`

#### Set Signature

> **set** **actors**(`value`): `void`

Defined in: [lib/types.ts:156](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L156)

##### Parameters

###### value

`string`[] \| `undefined`

##### Returns

`void`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:112](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L112)

##### Returns

`string`

#### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:116](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L116)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### location

#### Get Signature

> **get** **location**(): `string` \| `undefined`

Defined in: [lib/types.ts:144](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L144)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **location**(`value`): `void`

Defined in: [lib/types.ts:148](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L148)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### stage

#### Get Signature

> **get** **stage**(): `string` \| `undefined`

Defined in: [lib/types.ts:128](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L128)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **stage**(`value`): `void`

Defined in: [lib/types.ts:132](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L132)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### title

#### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:120](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L120)

##### Returns

`string`

#### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:124](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L124)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### topics

#### Get Signature

> **get** **topics**(): `string` \| `undefined`

Defined in: [lib/types.ts:136](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L136)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **topics**(`value`): `void`

Defined in: [lib/types.ts:140](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L140)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### value

#### Get Signature

> **get** **value**(): `string` \| `undefined`

Defined in: [lib/types.ts:160](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L160)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [lib/types.ts:164](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L164)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`
