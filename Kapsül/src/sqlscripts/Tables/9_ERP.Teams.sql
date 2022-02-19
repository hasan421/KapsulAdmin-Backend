CREATE TABLE ERP.Teams
(
    TeamId INT IDENTITY(1,1) PRIMARY KEY,
    TeamName VARCHAR(30) NOT NULL,
    EstablishmentDate DATETIME ,
    NumberOfMembers SMALLINT NOT NULL,
    TeamWorkType TINYINT NOT NULL,
    TeamMail VARCHAR(30),
    TeamPhone VARCHAR(20),
    TeamManagerId INT FOREIGN KEY REFERENCES ERP.Participants(ParticipantId),
    TeamLevel VARCHAR(30) NOT NULL,
    AdvisorId INT FOREIGN KEY REFERENCES ERP.Advisors(AdvisorId),
    AffiliatedInstitutionId INT FOREIGN KEY REFERENCES ERP.Institutions(InstitutionId),
    IsDeleted BIT NOT NULL,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME


)