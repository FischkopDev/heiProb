[**webapp**](../../../../../README.md)

***

[webapp](../../../../../modules.md) / [app/relations/update/page](../README.md) / default

# Function: default()

> **default**(`props`): `Element`

Defined in: [app/relations/update/page.tsx:15](https://github.com/FischkopDev/heiProb/blob/54ba7323aa531a9efde7470a7e0e509b8bffc8ae/webapp/app/relations/update/page.tsx#L15)

Eine Next.js-Client-Komponente, die als Formular zum Bearbeiten oder Erstellen
eines Experten-Profils dient. Wenn ein `expertId`-Query-Parameter in der URL existiert,
schaltet die Ansicht in den **Bearbeitungsmodus** und lädt die bestehenden Daten vorab aus der Datenbank.
*

## Parameters

### props

[`AddExpertViewProps`](../../../../../lib/types/interfaces/AddExpertViewProps.md)

Die Props für die Komponente.

## Returns

`Element`

Ein gerendertes UI-Formular zur Expert*innen-Verwaltung.
