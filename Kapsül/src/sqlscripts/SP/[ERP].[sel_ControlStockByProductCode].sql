SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Stokta aynı ürün olup olmadığını kontrol eder.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[sel_ControlStockByProductCode]
(
    @ProductCode VARCHAR(100)
)
AS
SET NOCOUNT ON
BEGIN

SELECT 
TOP 1 1
FROM ERP.Stocks SC  WITH (NOLOCK)
INNER JOIN ERP.ProductDemands PS WITH (NOLOCK)
ON PS.ProductId = SC.ProductId
WHERE PS.ProductCode = @ProductCode
END
GO
