SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 25/02/2022
Purpose: Malzeme talep bilgilerini getirir.
Last Modified By:
Last Modification Date:
*/

ALTER PROCEDURE [ERP].[sel_ProductDemands]
(
    @Recived BIT 
)
AS
SET NOCOUNT ON
BEGIN

SELECT DISTINCT 
 PS.ProductId,
 PS.ProductName,
 PS.ProductCode,
 PS.ProductLink
FROM ERP.TeamsProductDemands TP  WITH (NOLOCK)
INNER JOIN ERP.ProductDemands PS WITH (NOLOCK) 
ON TP.ProductId = PS.ProductId
INNER JOIN ERP.Teams TS WITH (NOLOCK)
ON TS.TeamId = TP.TeamId
WHERE TP.Recived = @Recived AND TP.IsDeleted = 0

END
GO
