CREATE TABLE ERP.TeamsProductDemands
(
    TeamProductDemandId INT IDENTITY(1,1) PRIMARY KEY,
    TeamId INT NOT NULL FOREIGN KEY REFERENCES ERP.Teams(TeamId),
    ProductId INT NOT NULL FOREIGN KEY REFERENCES ERP.ProductDemands(ProductId),
    Quantity INT NOT NULL,
    QuantityPrice NUMERIC(18,2) NOT NULL,
    TotalPrice NUMERIC(18,2) NOT NULL,
    Recived TINYINT NOT NULL,
    IsDeleted BIT DEFAULT 0,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME
)