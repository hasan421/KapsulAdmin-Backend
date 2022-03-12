USE [KAPSUL]
GO
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 20/02/2022
Purpose: Kapsül takımları tarafından istedikleri ürünleri ilgili kişi sipariş talep ekranından girilen bilgileri kaydeder.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[ins_ProductDemands]
(
    @ProductName VARCHAR(30),
    @ProductType TINYINT = NULL,
    @ProductCode VARCHAR(100),
    @ProductLink VARCHAR(500) = NULL,
    @ProductImage VARCHAR(100) = NULL

)
AS
SET NOCOUNT ON
BEGIN

INSERT INTO [ERP].[ProductDemands]
(
    ProductName,
    ProductType,
    ProductCode,
    ProductLink,
    ProductImage,
    SystemDate

)
VALUES
(
    @ProductName,
    @ProductType,
    @ProductCode,
    @ProductLink,
    @ProductImage,
    GETDATE()
)
SELECT CAST(SCOPE_IDENTITY() AS INT)
END
