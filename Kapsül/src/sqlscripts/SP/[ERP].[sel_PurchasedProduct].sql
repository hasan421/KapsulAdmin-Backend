USE [KAPSUL]
GO
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Alınan malzemeleri listeler.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[sel_PurchasedProducts]

AS
SET NOCOUNT ON
BEGIN

SELECT 
PS.ProductName,
PS.ProductCode,
TP.Quantity,
TP.QuantityPrice,
TP.TotalPrice,
PS.ProductLink,
TS.TeamName
FROM ERP.TeamsProductDemands TP  WITH (NOLOCK)
INNER JOIN ERP.ProductDemands PS WITH (NOLOCK) 
ON TP.ProductId = PS.ProductId
INNER JOIN ERP.Teams TS WITH (NOLOCK)
ON TS.TeamId = TP.TeamId
WHERE TP.Recived = 1 AND TP.IsDeleted = 0

END
