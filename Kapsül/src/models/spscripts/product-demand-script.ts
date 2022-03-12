export abstract class ProductDemandScript {
  public static readonly insertProductDemandScript: string =
    "EXEC ERP.ins_ProductDemands @0,@1,@2,@3,@4";
  public static readonly selectProductDemandScript =
    "EXEC ERP.sel_ProductDemands";
  public static readonly selectPurchasedProduct =
    "EXEC ERP.sel_PurchasedProducts";
  public static readonly insertTeamsProduct =
    "EXEC ERP.ins_TeamsProductDemands @0,@1,@2,@3,@4,@5";
  public static readonly updatePurchasedProduct =
    "EXEC ERP.upd_PurchasedProduct @0";
  public static readonly updateProductDemand =
    "EXEC ERP.upd_ProductDemand @0,@1,@2,@3,@4,@5,@6,@7,@8";
  public static readonly deleteProductDemand = "EXEC ERP.del_ProductDemand @0"
}
