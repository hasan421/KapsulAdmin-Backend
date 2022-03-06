USE [KAPSUL]
GO
SET ANSI_NULLS ON
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
UPDATE ERP.ProductDemands  
SET Recived = 1
WHERE ProductId = @ProductId

END