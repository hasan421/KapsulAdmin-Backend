SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Alınan malzeme durumunu günceller.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[upd_PurchasedProduct]
(
    @ProductId INT
)
AS
SET NOCOUNT ON
BEGIN
UPDATE ERP.TeamsProductDemands 
SET Recived = 1
WHERE Recived = 0 AND 
      ProductId = @ProductId

END
GO
