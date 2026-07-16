[**webapp**](../../../README.md)

***

[webapp](../../../modules.md) / [lib/types](../README.md) / AddExpertViewProps

# Interface: AddExpertViewProps

Defined in: [lib/types.ts:270](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L270)

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

Defined in: [lib/types.ts:279](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L279)

Callback-Funktion, um den Vorgang abzubrechen und zur vorherigen Ansicht zurückzukehren.

#### Returns

`void`

***

### onSave?

> `optional` **onSave?**: (`formData`) => `void`

Defined in: [lib/types.ts:275](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/lib/types.ts#L275)

Callback-Funktion, die aufgerufen wird, wenn die Expertendaten erfolgreich validiert und gespeichert wurden.

#### Parameters

##### formData

[`ExpertFormData`](ExpertFormData.md)

Die eingegebenen Formulardaten des Experten.

#### Returns

`void`
