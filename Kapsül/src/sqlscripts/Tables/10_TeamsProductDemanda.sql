CREATE TABLE ERP.TeamsProductDemands
(
    TeamProductDemandId INT IDENTITY(1,1) PRIMARY KEY,
    TeamId INT FOREIGN KEY REFERENCES ERP.Teams(TeamId),
    ProductId INT FOREIGN KEY REFERENCES ERP.ProductDemands(ProductId),
    IsDeleted BIT DEFAULT 0,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME
)