CREATE TABLE ERP.TeamsProductDemands
(
    TeamProductDemandId INT IDENTITY(1,1) PRIMARY KEY,
    TeamId INT NOT NULL FOREIGN KEY REFERENCES ERP.Teams(TeamId),
    ProductId INT NOT NULL FOREIGN KEY REFERENCES ERP.ProductDemands(ProductId),
    IsDeleted BIT DEFAULT 0,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME
)