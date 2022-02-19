CREATE TABLE ERP.ProductDemands
(
    ProductId INT IDENTITY(1,1) PRIMARY KEY,
    ProductName VARCHAR(30) NOT NULL,
    ProductType TINYINT,
    ProductCode VARCHAR(100) NOT NULL,
    Quantity INT NOT NULL,
    QuantityPrice NUMERIC(18,2) NOT NULL,
    TotalPrice NUMERIC(18,2) NOT NULL,
    ProductLink VARCHAR(500),
    ProductImage VARCHAR (100),
    Recived TINYINT NOT NULL,
    SystemDate DATETIME,
    UpdateSystemDate DATETIME





)