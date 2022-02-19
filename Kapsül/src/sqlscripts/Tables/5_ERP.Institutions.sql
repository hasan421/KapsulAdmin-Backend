CREATE TABLE ERP.Institutions
(
    InstitutionId INT IDENTITY(1,1) PRIMARY KEY,
    InstitutionName VARCHAR(50) NOT NULL,
    InstitutionAddress VARCHAR(100) NOT NULL,
    InstitutionType TINYINT,
    InstitutionPhone VARCHAR(20) NOT NULL,
    InstitutionMailAddress VARCHAR(100) NOT NULL,
    IsDeleted BIT,
    SystemDate DATETIME,
    UpDateSystemDate DATETIME
)