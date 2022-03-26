SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Stoktaki ürün miktarını günceller
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[upd_StockQuantity]
(   @StockId INT,
    @StockQuantity INT
)
AS
SET NOCOUNT ON
BEGIN
UPDATE ERP.Stocks  
SET StockQuantity = @StockQuantity,
    UpdateSystemDate = GETDATE()
WHERE StockId = @StockId

END
GO
