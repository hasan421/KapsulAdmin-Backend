USE [KAPSUL]
GO
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Malzeme tablosundan kayıt siler.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[del_ProductDemand]
(
    @ProductId INT
)
AS
SET NOCOUNT ON
BEGIN
UPDATE ERP.ProductDemands  
SET IsDeleted = 1
WHERE ProductId = @ProductId

END
