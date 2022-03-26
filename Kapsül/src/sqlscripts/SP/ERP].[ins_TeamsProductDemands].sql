SET ANSI_NULLS ON
GO
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
    @ProductId INT,    
    @Quantity INT,
    @QuantityPrice NUMERIC(18,2),
    @TotalPrice NUMERIC(18,2),
    @Recived TINYINT

  
)
AS
SET NOCOUNT ON
BEGIN

INSERT INTO [ERP].[TeamsProductDemands]
(
   ProductId,
   TeamId,
   Quantity,
   QuantityPrice,
   TotalPrice,
   Recived,
   SystemDate

)
VALUES
(
    @ProductId,
    @TeamId,
    @Quantity,
    @QuantityPrice,
    @TotalPrice,
    @Recived,
    GETDATE()
)
SELECT CAST(SCOPE_IDENTITY() AS INT)
END
GO
