CREATE TABLE ERP.Advisors
(
    AdvisorId INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30 ) NOT NULL,
    Phone VARCHAR(20),
    Sex BIT NOT NULL,
    Age CHAR(3) NOT NULL,
    WorkInstitutionId INT NOT NULL FOREIGN KEY REFERENCES ERP.Institutions(InstitutionId),
    IsDeleted BIT DEFAULT 0,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME

)