USE [KAPSUL]
GO
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Stok bilgilerini günceller.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[upd_Stock]
(
    @StockId INT,
    @ProductId INT,
    @TeamId INT,
    @StockQuantity INT,
    @QuantityType TINYINT
)
AS
SET NOCOUNT ON
BEGIN
UPDATE ERP.Stocks  
SET ProductId = @ProductId,
    TeamId = @TeamId,
    StockQuantity = @StockQuantity,
    QuantityType = @QuantityType,
    UpdateSystemDate = GETDATE()

WHERE ProductId = @ProductId

END
