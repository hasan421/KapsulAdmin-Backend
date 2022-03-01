export abstract class ProductDemandScript {
  public static readonly insertProductDemandScript: string =
    "EXEC ERP.ins_ProductDemands @0,@1,@2,@3,@4,@5,@6,@7,@8";
  public static readonly selectProductDemandScript =
    "EXEC ERP.sel_ProductDemands";
}
