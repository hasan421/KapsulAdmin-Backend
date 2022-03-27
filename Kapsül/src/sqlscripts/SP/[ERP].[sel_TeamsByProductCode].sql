SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: İlgili ürünü ürün kodundan hangi takımlarda olduğu  bilgisini getirir.
Last Modified By:
Last Modification Date:
*/

ALTER PROCEDURE [ERP].[sel_TeamsByProductCode]
(
    @ProductCode VARCHAR(100),
    @Recived BIT 
)
AS
SET NOCOUNT ON
BEGIN

SELECT
TP.TeamProductDemandId,
TS.TeamName,
TP.Quantity
FROM ERP.TeamsProductDemands TP WITH (NOLOCK)
INNER JOIN ERP.Teams TS WITH (NOLOCK) 
ON TP.TeamId = TS.TeamId
INNER JOIN ERP.ProductDemands PS WITH (NOLOCK) 
ON PS.ProductId = TP.ProductId 
WHERE PS.ProductCode = @ProductCode AND  
      TP.Recived = @Recived AND 
      TP.IsDeleted = 0
END
GO
