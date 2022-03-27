SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: İlgili ürün koduna göre toplam miktarını ve toplam fiyatını getirir.
Last Modified By:
Last Modification Date:
*/

ALTER PROCEDURE [ERP].[sel_ProductQuantity]
(
    @ProductCode VARCHAR(100),
    @Recived BIT 
)
AS
SET NOCOUNT ON
BEGIN

SELECT SUM(TP.Quantity) AS Quantity, 
SUM(TP.TotalPrice) AS TotalPrice,
TP.QuantityPrice
FROM ERP.TeamsProductDemands TP
INNER JOIN ERP.ProductDemands PS ON PS.ProductId = TP.ProductId
INNER JOIN ERP.Teams TS ON TS.TeamId = TP.TeamId
WHERE PS.ProductCode = @ProductCode AND 
      TP.Recived = @Recived
GROUP BY PS.ProductCode,TP.QuantityPrice
END
GO
