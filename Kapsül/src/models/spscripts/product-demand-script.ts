export abstract class ProductDemandScript {
  public static readonly insertProductDemandScript: string =
    "EXEC ERP.ins_ProductDemands @0,@1,@2,@3,@4";
  public static readonly selectProductDemandScript =
    "EXEC ERP.sel_ProductDemands @0";
  public static readonly selectPurchasedProduct =
    "EXEC ERP.sel_PurchasedProducts";
  public static readonly insertTeamsProduct =
    "EXEC ERP.ins_TeamsProductDemands @0,@1,@2,@3,@4,@5";
  public static readonly updatePurchasedProduct =
    "EXEC ERP.upd_PurchasedProduct @0";
  public static readonly updateProductDemand =
    "EXEC ERP.upd_ProductDemand @0,@1,@2,@3,@4,@5";
  public static readonly deleteProductDemand = "EXEC ERP.del_ProductDemand @0,@1,@2";
  public static readonly selectProductQuantity =
    "EXEC ERP.sel_ProductQuantity @0,@1";
  public static readonly selectControlProductDemandByProductCode =
    "EXEC ERP.sel_ControlProductDemandsByProductCode @0";
  public static readonly updateTeamProductDemand =
    "EXEC ERP.upd_TeamProductDemand @0,@1,@2,@3,@4,@5";
}
