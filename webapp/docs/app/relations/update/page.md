[**Documentation**](../../../README.md)

***

[Documentation](../../../modules.md) / app/relations/update/page

# app/relations/update/page

## Functions

### default()

> **default**(`props`): `Element`

Defined in: [app/relations/update/page.tsx:67](https://github.com/FischkopDev/heiProb/blob/cc2b142e4cc2b07adaf449ba35b6299aff86d204/webapp/app/relations/update/page.tsx#L67)

Eine Next.js-Client-Komponente, die als Formular zum Bearbeiten oder Erstellen
eines Experten-Profils dient. Wenn ein `expertId`-Query-Parameter in der URL existiert,
schaltet die Ansicht in den **Bearbeitungsmodus** und lädt die bestehenden Daten vorab aus der Datenbank.
*

#### Parameters

##### props

[`AddExpertViewProps`](../../../lib/types.md#addexpertviewprops)

Die Props für die Komponente.

#### Returns

`Element`

Ein gerendertes UI-Formular zur Expert*innen-Verwaltung.
