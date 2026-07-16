[**Heiprob**](../../../../../README.md)

***

[Heiprob](../../../../../modules.md) / [app/relations/update/page](../README.md) / default

# Function: default()

> **default**(`props`): `Element`

Defined in: [app/relations/update/page.tsx:67](https://github.com/FischkopDev/heiProb/blob/273212ca3142618532c4f1a30b727aa47a99ce60/webapp/app/relations/update/page.tsx#L67)

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
