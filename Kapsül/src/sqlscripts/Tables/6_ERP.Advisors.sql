CREATE TABLE ERP.Advisors
(
    AdvisorId INT IDENTITY(1,1) PRIMARY KEY,
    FirsName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30 ) NOT NULL,
    Phone VARCHAR(20),
    Sex BIT NOT NULL,,
    Age CHAR(3) NOT NULL,
    WorkInstitutionId INT FOREIGN KEY REFERENCES ERP.Institutions(InstitutionId),
    IsDeleted BIT,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME

)