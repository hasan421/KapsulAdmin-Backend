CREATE TABLE ERP.Participants
(
    ParticipantId INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    Sex BIT NOT NULL,
    Age CHAR(3) NOT NULL,
    Education TINYINT NOT NULL,
    InstitutionId  INT NOT NULL FOREIGN KEY REFERENCES ERP.Institutions(InstitutionId),
    IsDeleted BIT,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME

) 