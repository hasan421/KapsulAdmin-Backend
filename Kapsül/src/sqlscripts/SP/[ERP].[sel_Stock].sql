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

CREATE PROCEDURE [ERP].[sel_Stock]

AS
SET NOCOUNT ON
BEGIN

SELECT 
PS.ProductName,
PS.ProductCode,
PS.Quantity,
PS.QuantityPrice,
PS.TotalPrice,
TS.TeamName
FROM ERP.Stocks S WITH (NOLOCK)
INNER JOIN ERP.ProductDemands PS WITH (NOLOCK)
ON PS.ProductId = S.ProductId
INNER JOIN ERP.Teams TS WITH (NOLOCK) 
ON TS.TeamId = S.TeamId
WHERE PS.Recived = 0 AND PS.IsDeleted = 0

END
