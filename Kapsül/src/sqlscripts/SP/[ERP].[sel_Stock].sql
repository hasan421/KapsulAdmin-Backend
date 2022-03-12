USE [KAPSUL]
GO
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Stok bilgilerini getirir.
Last Modified By:
Last Modification Date:
*/

ALTER PROCEDURE [ERP].[sel_Stock]

AS
SET NOCOUNT ON
BEGIN

SELECT 
PS.ProductName,
PS.ProductCode,
TP.Quantity,
TP.QuantityPrice,
TP.TotalPrice,
TS.TeamName
FROM ERP.Stocks S WITH (NOLOCK)
INNER JOIN ERP.TeamsProductDemands TP WITH (NOLOCK)
ON TP.ProductId = S.ProductId AND 
                  TP.TeamId = S.TeamId
INNER JOIN ERP.ProductDemands PS WITH (NOLOCK)
ON PS.ProductId = S.ProductId
INNER JOIN ERP.Teams TS WITH (NOLOCK) 
ON TS.TeamId = S.TeamId
WHERE TP.Recived = 0 AND TP.IsDeleted = 0

END
