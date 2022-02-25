USE [KAPSUL]
GO
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 25/02/2022
Purpose: Malzeme talep bilgilerini getirir.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[sel_ProductDemands]

AS
SET NOCOUNT ON
BEGIN

SELECT 
PS.ProductName,
PS.ProductCode,
PS.Quantity,
PS.QuantityPrice,
PS.TotalPrice,
PS.ProductLink,
TS.TeamName
FROM ERP.TeamsProductDemands TP  WITH (NOLOCK)
INNER JOIN ERP.ProductDemands PS WITH (NOLOCK) 
ON TP.ProductId = PS.ProductId
INNER JOIN ERP.Teams TS WITH (NOLOCK)
ON TS.TeamId = TP.TeamId
WHERE Recived = 0

END
