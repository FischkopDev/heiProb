[**Documentation**](../README.md)

***

[Documentation](../modules.md) / ExpertUpdateUnitTests

# ExpertUpdateUnitTests

## Description

Unit-Tests für den Endpunkt zum Aktualisieren von Expertendaten (`PATCH /api/users/update`).
Nutzt Mocks für die Datenbank (`pool.query`), um das HTTP-Antwortverhalten (400, 200, 404, 500) 
isoliert von der physischen Datenbank zu überprüfen.
