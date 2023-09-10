# InterNetX-GmbH

### README

#### 🇩🇪 Deutsch:

**Repository:** InterNetX-GmbH

**Aufgabe:**
Es soll eine Rest-API entwickelt werden mit folgenden Anforderungen:

1. **POST /user Route:** 
   - Hiermit soll ein neuer User angelegt werden.
   - Die Daten aus dem folgenden JSON sollen in einer MySQL Datenbank gespeichert werden:
     ```json
     {
     "email": "",
     "fname": "",
     "lname": "",
     "password": "",
     "admin": true
     }
     ```
   - Das "password" Feld soll nach gängigen Standards als Hash in der Datenbank gespeichert werden.

2. **GET /user/$email Route:** 
   - Hiermit sollen alle User-Daten bis auf das Passwort abgerufen werden.
   - Die Route darf nur mit gültigen Authentifizierungsdaten (email + password) per Basic Auth aufgerufen werden. Bei ungültigen Daten soll ein Fehler auftreten.

3. **DELETE /user/$email Route:** 
   - Hiermit soll ein User gelöscht werden.
   - Die Route darf nur mit gültigen Authentifizierungsdaten (email + password) per Basic Auth aufgerufen werden. Bei ungültigen Daten soll ein Fehler auftreten.
   - Die Route darf nur aufgerufen werden, wenn der authentifizierte User im "admin" Feld den Wert `true` gesetzt hat.

**Weitere Informationen:**
- Die Umsetzung kann mit einer Programmiersprache deiner Wahl erfolgen.
- Das Resultat soll am Ende auf Github hochgeladen werden.

#### 🇬🇧 English:

**Repository:** InterNetX-GmbH

**Task:**
Develop a Rest-API with the following requirements:

1. **POST /user Route:** 
   - This should create a new user.
   - The data from the following JSON should be saved in a MySQL database:
     ```json
     {
     "email": "",
     "fname": "",
     "lname": "",
     "password": "",
     "admin": true
     }
     ```
   - The "password" field should be stored in the database as a hash according to common standards.

2. **GET /user/$email Route:** 
   - This should retrieve all user data except the password.
   - The route can only be accessed with valid authentication data (email + password) using Basic Auth. An error should occur for invalid data.

3. **DELETE /user/$email Route:** 
   - This should delete a user.
   - The route can only be accessed with valid authentication data (email + password) using Basic Auth. An error should occur for invalid data.
   - The route can only be accessed if the authenticated user has set the value `true` in the "admin" field.

**Additional Information:**
- The implementation can be done in a programming language of your choice.
- The result should be uploaded to Github in the end.
