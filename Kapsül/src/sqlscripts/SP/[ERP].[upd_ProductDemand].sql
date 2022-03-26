SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Malzeme talep bilgilerini günceller.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[upd_ProductDemand]
(
    @ProductId INT,
    @ProductName VARCHAR(30) ,
    @ProductType TINYINT = NULL,
    @ProductCode VARCHAR(100),
    @ProductLink VARCHAR(500) = NULL,
    @ProductImage VARCHAR (100) = NULL
)
AS
SET NOCOUNT ON
BEGIN
UPDATE ERP.ProductDemands  
SET ProductName = @ProductName,
    ProductType = @ProductType,
    ProductCode = @ProductCode,
    ProductLink = @ProductLink,
    ProductImage = @ProductImage,
    UpdateSystemDate = GETDATE()

WHERE ProductId = @ProductId

END
GO
