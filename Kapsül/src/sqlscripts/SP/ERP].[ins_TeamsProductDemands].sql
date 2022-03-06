USE [KAPSUL]
GO
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 20/02/2022
Purpose: Kapsül takımlar ve ürünlerin ilişkisinin tutulduğu tablodur.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[ins_TeamsProductDemands]
(
    @TeamId INT,
    @ProductId INT
  
)
AS
SET NOCOUNT ON
BEGIN

INSERT INTO [ERP].[TeamsProductDemands]
(
   ProductId,
   TeamId,
   SystemDate

)
VALUES
(
    @ProductId,
    @TeamId,
    GETDATE()
)
SELECT CAST(SCOPE_IDENTITY() AS INT)
END
