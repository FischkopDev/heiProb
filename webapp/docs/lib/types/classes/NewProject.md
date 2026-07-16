[**Heiprob**](../../../README.md)

***

[Heiprob](../../../modules.md) / [lib/types](../README.md) / NewProject

# Class: NewProject

Defined in: [lib/types.ts:526](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L526)

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

## Constructors

### Constructor

> **new NewProject**(`title`, `description`, `startDate`, `endDate`, `state`, `location`, `websiteUrl`, `details`, `members`): `NewProject`

Defined in: [lib/types.ts:546](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L546)

#### Parameters

##### title

`string`

##### description

`string`

##### startDate

`string`

##### endDate

`string`

##### state

`string`

##### location

`string`

##### websiteUrl

`string`

##### details

`string`

##### members

[`ProjectMember`](ProjectMember.md)[]

#### Returns

`NewProject`

## Accessors

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [lib/types.ts:576](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L576)

##### Returns

`string`

#### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:580](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L580)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### details

#### Get Signature

> **get** **details**(): `string`

Defined in: [lib/types.ts:624](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L624)

##### Returns

`string`

#### Set Signature

> **set** **details**(`value`): `void`

Defined in: [lib/types.ts:628](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L628)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### endDate

#### Get Signature

> **get** **endDate**(): `string`

Defined in: [lib/types.ts:592](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L592)

##### Returns

`string`

#### Set Signature

> **set** **endDate**(`value`): `void`

Defined in: [lib/types.ts:596](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L596)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### location

#### Get Signature

> **get** **location**(): `string`

Defined in: [lib/types.ts:608](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L608)

##### Returns

`string`

#### Set Signature

> **set** **location**(`value`): `void`

Defined in: [lib/types.ts:612](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L612)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### members

#### Get Signature

> **get** **members**(): [`ProjectMember`](ProjectMember.md)[]

Defined in: [lib/types.ts:632](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L632)

##### Returns

[`ProjectMember`](ProjectMember.md)[]

#### Set Signature

> **set** **members**(`value`): `void`

Defined in: [lib/types.ts:636](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L636)

##### Parameters

###### value

[`ProjectMember`](ProjectMember.md)[]

##### Returns

`void`

***

### startDate

#### Get Signature

> **get** **startDate**(): `string`

Defined in: [lib/types.ts:584](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L584)

##### Returns

`string`

#### Set Signature

> **set** **startDate**(`value`): `void`

Defined in: [lib/types.ts:588](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L588)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### state

#### Get Signature

> **get** **state**(): `string`

Defined in: [lib/types.ts:600](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L600)

##### Returns

`string`

#### Set Signature

> **set** **state**(`value`): `void`

Defined in: [lib/types.ts:604](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L604)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### title

#### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:568](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L568)

##### Returns

`string`

#### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:572](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L572)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### websiteUrl

#### Get Signature

> **get** **websiteUrl**(): `string`

Defined in: [lib/types.ts:616](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L616)

##### Returns

`string`

#### Set Signature

> **set** **websiteUrl**(`value`): `void`

Defined in: [lib/types.ts:620](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L620)

##### Parameters

###### value

`string`

##### Returns

`void`
