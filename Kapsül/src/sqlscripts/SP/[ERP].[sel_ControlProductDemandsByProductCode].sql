SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 25/02/2022
Purpose: Daha önce böyle bir ürünün tabloya eklenip eklenilmediği kontrol edilir.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[sel_ControlProductDemandsByProductCode]
(
    @ProductCode VARCHAR(100)
)
AS
SET NOCOUNT ON
BEGIN

SELECT 
 TOP 1 1
FROM ERP.TeamsProductDemands TP  WITH (NOLOCK)
INNER JOIN ERP.ProductDemands PS WITH (NOLOCK) 
ON TP.ProductId = PS.ProductId
INNER JOIN ERP.Teams TS WITH (NOLOCK)
ON TS.TeamId = TP.TeamId
WHERE PS.ProductCode = @ProductCode AND
      TP.Recived = 0 AND 
      TP.IsDeleted = 0

END
GO
