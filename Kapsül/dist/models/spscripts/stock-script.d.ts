export declare abstract class StockScript {
    static readonly updateStockQuantity = "EXEC ERP.upd_StockQuantity @0,@1";
    static readonly selectStock = "EXEC ERP.upd_Stock";
    static readonly insertStock = "EXEC ERP.ins_Stock @0,@1,@2,@3";
    static readonly updateStock = "EXEC ERP.upd_Stock @0,@1,@2,@3,@4";
    static readonly deleteStock = "EXEC ERP.del_Stock @0";
}
