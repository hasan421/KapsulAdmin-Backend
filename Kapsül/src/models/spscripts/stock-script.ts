export abstract class StockScript {
  public static readonly updateStockQuantity =
    "EXEC ERP.upd_StockQuantity @0,@1";
  public static readonly selectStock = "EXEC ERP.upd_Stock";
  public static readonly insertStock = "EXEC ERP.ins_Stock @0,@1,@2,@3";
  public static readonly updateStock = "EXEC ERP.upd_Stock @0,@1,@2,@3,@4";
  public static readonly deleteStock = "EXEC ERP.del_Stock @0";
}
