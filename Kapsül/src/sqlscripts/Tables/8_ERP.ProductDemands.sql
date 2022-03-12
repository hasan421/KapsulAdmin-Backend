  
CREATE TABLE ERP.ProductDemands
(
    ProductId INT IDENTITY(1,1) PRIMARY KEY,
    ProductName VARCHAR(30) NOT NULL,
    ProductType TINYINT,
    ProductCode VARCHAR(100) NOT NULL,
    ProductLink VARCHAR(500),
    ProductImage VARCHAR (100),
    IsDeleted BIT DEFAULT 0,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME
)