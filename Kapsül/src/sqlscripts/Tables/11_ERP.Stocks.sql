CREATE TABLE ERP.Stocks
(
    StockId INT IDENTITY(1,1) PRIMARY KEY,
    ProductId INT FOREIGN KEY REFERENCES ERP.ProductDemand(ProductId),
    TeamId INT FOREIGN KEY REFERENCES ERP.Teams(TeamId),
    StockQuantity INT NOT NULL,
    QuantityType TINYINT NOT NULL,
    IsDeleted BIT DEFAULT 0,
    SystemDate DATETIME ,
    UpdateSystemDate DATETIME

)