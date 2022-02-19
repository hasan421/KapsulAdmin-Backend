CREATE TABLE ERP.Jobs
(
    JobId INT IDENTITY(1,1) PRIMARY KEY,
    JobName VARCHAR(30) NOT NULL,
    IsDeleted BIT,
    SystemDate DATETIME,
    UpDateSystemDate DATETIME

)