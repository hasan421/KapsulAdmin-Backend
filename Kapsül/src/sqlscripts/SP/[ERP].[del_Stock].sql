SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Stok tablosundan kayıt siler.
Last Modified By:
Last Modification Date:
*/

ALTER PROCEDURE [ERP].[del_Stock]
(
    @StockId INT
)
AS
SET NOCOUNT ON
BEGIN
UPDATE ERP.Stocks  
SET IsDeleted = 1
WHERE StockId = @StockId

END
GO
