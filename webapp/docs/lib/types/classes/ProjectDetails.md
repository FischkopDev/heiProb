[**Documentation**](../../../README.md)

***

[Documentation](../../../modules.md) / [lib/types](../README.md) / ProjectDetails

# Class: ProjectDetails

Defined in: [lib/types.ts:662](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L662)

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

## Constructors

### Constructor

> **new ProjectDetails**(`id`, `title`, `description`, `startDate`, `endDate`, `state`, `location`, `websiteUrl`, `details`, `experts`, `project_state?`): `ProjectDetails`

Defined in: [lib/types.ts:686](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L686)

#### Parameters

##### id

`string`

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

##### experts

[`ProjectMember`](ProjectMember.md)[]

##### project\_state?

`string`

#### Returns

`ProjectDetails`

## Accessors

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [lib/types.ts:728](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L728)

##### Returns

`string`

#### Set Signature

> **set** **description**(`value`): `void`

Defined in: [lib/types.ts:732](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L732)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### details

#### Get Signature

> **get** **details**(): `string`

Defined in: [lib/types.ts:784](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L784)

##### Returns

`string`

#### Set Signature

> **set** **details**(`value`): `void`

Defined in: [lib/types.ts:788](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L788)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### endDate

#### Get Signature

> **get** **endDate**(): `string`

Defined in: [lib/types.ts:744](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L744)

##### Returns

`string`

#### Set Signature

> **set** **endDate**(`value`): `void`

Defined in: [lib/types.ts:748](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L748)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### experts

#### Get Signature

> **get** **experts**(): [`ProjectMember`](ProjectMember.md)[]

Defined in: [lib/types.ts:792](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L792)

##### Returns

[`ProjectMember`](ProjectMember.md)[]

#### Set Signature

> **set** **experts**(`value`): `void`

Defined in: [lib/types.ts:796](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L796)

##### Parameters

###### value

[`ProjectMember`](ProjectMember.md)[]

##### Returns

`void`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [lib/types.ts:712](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L712)

##### Returns

`string`

#### Set Signature

> **set** **id**(`value`): `void`

Defined in: [lib/types.ts:716](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L716)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### location

#### Get Signature

> **get** **location**(): `string`

Defined in: [lib/types.ts:768](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L768)

##### Returns

`string`

#### Set Signature

> **set** **location**(`value`): `void`

Defined in: [lib/types.ts:772](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L772)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### project\_state

#### Get Signature

> **get** **project\_state**(): `string` \| `undefined`

Defined in: [lib/types.ts:760](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L760)

##### Returns

`string` \| `undefined`

#### Set Signature

> **set** **project\_state**(`value`): `void`

Defined in: [lib/types.ts:764](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L764)

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### startDate

#### Get Signature

> **get** **startDate**(): `string`

Defined in: [lib/types.ts:736](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L736)

##### Returns

`string`

#### Set Signature

> **set** **startDate**(`value`): `void`

Defined in: [lib/types.ts:740](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L740)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### state

#### Get Signature

> **get** **state**(): `string`

Defined in: [lib/types.ts:752](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L752)

##### Returns

`string`

#### Set Signature

> **set** **state**(`value`): `void`

Defined in: [lib/types.ts:756](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L756)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### title

#### Get Signature

> **get** **title**(): `string`

Defined in: [lib/types.ts:720](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L720)

##### Returns

`string`

#### Set Signature

> **set** **title**(`value`): `void`

Defined in: [lib/types.ts:724](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L724)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### websiteUrl

#### Get Signature

> **get** **websiteUrl**(): `string`

Defined in: [lib/types.ts:776](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L776)

##### Returns

`string`

#### Set Signature

> **set** **websiteUrl**(`value`): `void`

Defined in: [lib/types.ts:780](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L780)

##### Parameters

###### value

`string`

##### Returns

`void`
