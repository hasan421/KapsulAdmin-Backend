USE [KAPSUL]
GO
SET ANSI_NULLS ON
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
SET StockQuantity = @StockQuantity
WHERE StockId = @StockId

END
