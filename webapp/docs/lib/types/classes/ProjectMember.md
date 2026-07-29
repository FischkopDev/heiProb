[**Documentation**](../../../README.md)

***

[Documentation](../../../modules.md) / [lib/types](../README.md) / ProjectMember

# Class: ProjectMember

Defined in: [lib/types.ts:414](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L414)

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

## Constructors

### Constructor

> **new ProjectMember**(`id`, `name`, `role`, `expertId?`): `ProjectMember`

Defined in: [lib/types.ts:429](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L429)

#### Parameters

##### id

`string`

##### name

`string`

##### role

`"R"` \| `"A"` \| `"C"` \| `"I"`

##### expertId?

`number`

#### Returns

`ProjectMember`

## Accessors

### expertId

#### Get Signature

> **get** **expertId**(): `number` \| `undefined`

Defined in: [lib/types.ts:444](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L444)

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **expertId**(`value`): `void`

Defined in: [lib/types.ts:448](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L448)

##### Parameters

###### value

`number` \| `undefined`

##### Returns

`void`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:436](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L436)

##### Returns

`string`

#### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:440](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L440)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [lib/types.ts:452](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L452)

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [lib/types.ts:456](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L456)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### role

#### Get Signature

> **get** **role**(): `"R"` \| `"A"` \| `"C"` \| `"I"`

Defined in: [lib/types.ts:460](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L460)

##### Returns

`"R"` \| `"A"` \| `"C"` \| `"I"`

#### Set Signature

> **set** **role**(`value`): `void`

Defined in: [lib/types.ts:464](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L464)

##### Parameters

###### value

`"R"` \| `"A"` \| `"C"` \| `"I"`

##### Returns

`void`
