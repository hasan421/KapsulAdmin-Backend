CREATE TABLE ERP.Teams
(
    TeamId INT IDENTITY(1,1) PRIMARY KEY,
    TeamName VARCHAR(30) NOT NULL,
    EstablishmentDate DATETIME ,
    NumberOfMembers SMALLINT NOT NULL,
    TeamWorkType TINYINT NOT NULL,
    TeamMail VARCHAR(30),
    TeamPhone VARCHAR(20),
    AdvisorId INT NOT NULL FOREIGN KEY REFERENCES ERP.Advisors(AdvisorId),
    AffiliatedInstitutionId INT NOT NULL FOREIGN KEY REFERENCES ERP.Institutions(InstitutionId),
    IsDeleted BIT NOT NULL DEFAULT 0,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME
)