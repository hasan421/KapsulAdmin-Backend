SET ANSI_NULLS ON
GO
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
(   @TeamProductDemandId INT = NULL,
    @ProductId INT = NULL,
    @TransactionType INT = NULL
)
AS
SET NOCOUNT ON
BEGIN
IF (@TransactionType IS NULL)
BEGIN
UPDATE TS
SET TS.IsDeleted = 1
FROM ERP.TeamsProductDemands AS TS
INNER JOIN ProductDemands  AS PS
       ON PS.ProductId = TS.ProductId
WHERE PS.ProductId = @ProductId
END
ELSE
BEGIN
UPDATE TS
SET TS.IsDeleted = 1
FROM ERP.TeamsProductDemands AS TS
INNER JOIN ProductDemands  AS PS
       ON PS.ProductId = TS.ProductId
WHERE TS.TeamProductDemandId = @TeamProductDemandId
END
END
GO
