SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Takım ve Ürünlerin eşleştiği tabloda güncelleme yapar.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[upd_TeamProductDemand]
(
    @TeamProductDemandId INT,
    @ProductId INT,
    @TeamId INT,
    @Quantity INT,
    @QuantityPrice DECIMAL(18,2),
    @TotalPrice DECIMAL(18,2)
)
AS
SET NOCOUNT ON
BEGIN
UPDATE ERP.TeamsProductDemands  
SET ProductId = @ProductId,
    TeamId = @TeamId,
    Quantity = @Quantity,
    QuantityPrice = @QuantityPrice,
    TotalPrice = @TotalPrice,
    UpdateSystemDate = GETDATE()

WHERE TeamProductDemandId = @TeamProductDemandId

END
GO
