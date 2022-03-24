export declare abstract class ProductDemandScript {
    static readonly insertProductDemandScript: string;
    static readonly selectProductDemandScript = "EXEC ERP.sel_ProductDemands";
    static readonly selectPurchasedProduct = "EXEC ERP.sel_PurchasedProducts";
    static readonly insertTeamsProduct = "EXEC ERP.ins_TeamsProductDemands @0,@1,@2,@3,@4,@5";
    static readonly updatePurchasedProduct = "EXEC ERP.upd_PurchasedProduct @0";
    static readonly updateProductDemand = "EXEC ERP.upd_ProductDemand @0,@1,@2,@3,@4,@5";
    static readonly deleteProductDemand = "EXEC ERP.del_ProductDemand @0,@1,@2";
    static readonly selectProductQuantity = "EXEC ERP.sel_ProductQuantity @0";
    static readonly selectControlProductDemandByProductCode = "EXEC ERP.sel_ControlProductDemandsByProductCode @0";
    static readonly updateTeamProductDemand = "EXEC ERP.upd_TeamProductDemand @0,@1,@2,@3,@4,@5";
}
