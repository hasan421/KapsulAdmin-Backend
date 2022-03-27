"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDemandScript = void 0;
class ProductDemandScript {
}
exports.ProductDemandScript = ProductDemandScript;
ProductDemandScript.insertProductDemandScript = "EXEC ERP.ins_ProductDemands @0,@1,@2,@3,@4";
ProductDemandScript.selectProductDemandScript = "EXEC ERP.sel_ProductDemands @0";
ProductDemandScript.selectPurchasedProduct = "EXEC ERP.sel_PurchasedProducts";
ProductDemandScript.insertTeamsProduct = "EXEC ERP.ins_TeamsProductDemands @0,@1,@2,@3,@4,@5";
ProductDemandScript.updatePurchasedProduct = "EXEC ERP.upd_PurchasedProduct @0";
ProductDemandScript.updateProductDemand = "EXEC ERP.upd_ProductDemand @0,@1,@2,@3,@4,@5";
ProductDemandScript.deleteProductDemand = "EXEC ERP.del_ProductDemand @0,@1,@2";
ProductDemandScript.selectProductQuantity = "EXEC ERP.sel_ProductQuantity @0,@1";
ProductDemandScript.selectControlProductDemandByProductCode = "EXEC ERP.sel_ControlProductDemandsByProductCode @0";
ProductDemandScript.updateTeamProductDemand = "EXEC ERP.upd_TeamProductDemand @0,@1,@2,@3,@4,@5";
//# sourceMappingURL=product-demand-script.js.map