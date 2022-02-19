CREATE TABLE ERP.Users
(
    UserId INT IDENTITY(1,1) PRIMARY KEY,
    UserName VARCHAR(30) NOT NULL,
    PasswordHash VARCHAR(100) NOT NULL,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30) NOT NULL,
    Phone VARCHAR(20),
    SuperVisorId INT ,
    JobId INT FOREIGN KEY REFERENCES ERP.Jobs(JobId),
    IsDeleted BIT DEFAULT 0,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME

)