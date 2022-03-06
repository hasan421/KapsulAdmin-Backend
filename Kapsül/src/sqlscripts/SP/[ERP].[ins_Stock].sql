USE [KAPSUL]
GO
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 20/02/2022
Purpose: Stok oluşturur.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[ins_Stock]
(
    @ProductId INT,
    @TeamId INT,
    @StockQuantity INT,
    @QantityType TINYINT = NULL
   

)
AS
SET NOCOUNT ON
BEGIN

INSERT INTO [ERP].[Stocks]
(
    ProductId,
    TeamId,
    StockQuantity,
    QuantityType,
    SystemDate
)
VALUES
(
    @ProductId,
    @TeamId,
    @StockQuantity,
    @QantityType,
    GETDATE()
)
SELECT CAST(SCOPE_IDENTITY() AS INT)
END
