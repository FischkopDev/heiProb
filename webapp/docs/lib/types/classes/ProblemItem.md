[**Heiprob**](../../../README.md)

***

[Heiprob](../../../modules.md) / [lib/types](../README.md) / ProblemItem

# Class: ProblemItem

Defined in: [lib/types.ts:251](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L251)

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

## Constructors

### Constructor

> **new ProblemItem**(`title`, `category`, `status`, `statusColor`, `id?`, `problem_id?`, `tags?`, `description?`, `summary?`, `impact?`, `stakeholders?`, `nextSteps?`): `ProblemItem`

Defined in: [lib/types.ts:277](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L277)

#### Parameters

##### title

`string`

##### category

`string`

##### status

`"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

##### statusColor

`"amber"` \| `"green"` \| `"slate"`

##### id?

`number`

##### problem\_id?

`number`

##### tags?

`string`

##### description?

`string`

##### summary?

`string`

##### impact?

`string`

##### stakeholders?

`string`

##### nextSteps?

`string`

#### Returns

`ProblemItem`

## Accessors

### category

#### Get Signature

> **get** **category**(): `string`

Defined in: [lib/types.ts:337](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L337)

##### Returns

`string`

#### Set Signature

> **set** **category**(`value`): `void`

Defined in: [lib/types.ts:341](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L341)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### description

#### Get Signature

> **get** **description**(): `string` \| `undefined`

Defined in: [lib/types.ts:361](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L361)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:365](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L365)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### id

#### Get Signature

> **get** **id**(): `number` \| `undefined`

Defined in: [lib/types.ts:305](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L305)

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:309](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L309)

##### Parameters

###### value

`number` \| `undefined`

##### Returns

`void`

***

### impact

#### Get Signature

> **get** **impact**(): `string` \| `undefined`

Defined in: [lib/types.ts:377](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L377)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **impact**(`value`): `void`

Defined in: [lib/types.ts:381](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L381)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### nextSteps

#### Get Signature

> **get** **nextSteps**(): `string` \| `undefined`

Defined in: [lib/types.ts:393](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L393)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **nextSteps**(`value`): `void`

Defined in: [lib/types.ts:397](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L397)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### problem\_id

#### Get Signature

> **get** **problem\_id**(): `number` \| `undefined`

Defined in: [lib/types.ts:313](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L313)

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **problem\_id**(`value`): `void`

Defined in: [lib/types.ts:317](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L317)

##### Parameters

###### value

`number` \| `undefined`

##### Returns

`void`

***

### stakeholders

#### Get Signature

> **get** **stakeholders**(): `string` \| `undefined`

Defined in: [lib/types.ts:385](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L385)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **stakeholders**(`value`): `void`

Defined in: [lib/types.ts:389](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L389)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### status

#### Get Signature

> **get** **status**(): `"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

Defined in: [lib/types.ts:345](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L345)

##### Returns

`"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

#### Set Signature

> **set** **status**(`value`): `void`

Defined in: [lib/types.ts:349](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L349)

##### Parameters

###### value

`"Ungelöst"` \| `"In Bearbeitung"` \| `"Gelöst"`

##### Returns

`void`

***

### statusColor

#### Get Signature

> **get** **statusColor**(): `"amber"` \| `"green"` \| `"slate"`

Defined in: [lib/types.ts:353](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L353)

##### Returns

`"amber"` \| `"green"` \| `"slate"`

#### Set Signature

> **set** **statusColor**(`value`): `void`

Defined in: [lib/types.ts:357](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L357)

##### Parameters

###### value

`"amber"` \| `"green"` \| `"slate"`

##### Returns

`void`

***

### summary

#### Get Signature

> **get** **summary**(): `string` \| `undefined`

Defined in: [lib/types.ts:369](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L369)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **summary**(`value`): `void`

Defined in: [lib/types.ts:373](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L373)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### tags

#### Get Signature

> **get** **tags**(): `string` \| `undefined`

Defined in: [lib/types.ts:329](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L329)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **tags**(`value`): `void`

Defined in: [lib/types.ts:333](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L333)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### title

#### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:321](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L321)

##### Returns

`string`

#### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:325](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/lib/types.ts#L325)

##### Parameters

###### value

`string`

##### Returns

`void`
