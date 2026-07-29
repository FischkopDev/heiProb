[**Documentation**](../../../README.md)

***

[Documentation](../../../modules.md) / [lib/types](../README.md) / AddExpertViewProps

# Interface: AddExpertViewProps

Defined in: [lib/types.ts:814](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L814)

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

## Properties

### onCancel?

> `optional` **onCancel?**: () => `void`

Defined in: [lib/types.ts:823](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L823)

Callback-Funktion, um den Vorgang abzubrechen und zur vorherigen Ansicht zurückzukehren.

#### Returns

`void`

***

### onSave?

> `optional` **onSave?**: (`formData`) => `void`

Defined in: [lib/types.ts:819](https://github.com/FischkopDev/heiProb/blob/7708c3dd15480b42ba53ddfac1ab1c1f80c23057/webapp/lib/types.ts#L819)

Callback-Funktion, die aufgerufen wird, wenn die Expertendaten erfolgreich validiert und gespeichert wurden.

#### Parameters

##### formData

[`ExpertFormData`](../classes/ExpertFormData.md)

Die eingegebenen Formulardaten des Experten.

#### Returns

`void`
