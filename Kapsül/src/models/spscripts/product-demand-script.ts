export abstract class ProductDemandScript {
  public static insertProductDemandScript: string =
    "EXEC ERP.ins_ProductDemands @0,@1,@2,@3,@4,@5,@6,@7,@8";
  public static selectProductDemandScript = "EXEC ERP.sel_ProductDemands";
}
