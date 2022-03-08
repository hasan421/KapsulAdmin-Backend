"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockScript = void 0;
class StockScript {
}
exports.StockScript = StockScript;
StockScript.updateStockQuantity = "EXEC ERP.upd_StockQuantity @0,@1";
StockScript.selectStock = "EXEC ERP.sel_Stock";
StockScript.insertStock = "EXEC ERP.ins_Stock @0,@1,@2,@3";
StockScript.updateStock = "EXEC ERP.upd_Stock @0,@1,@2,@3,@4";
StockScript.deleteStock = "EXEC ERP.del_Stock @0";
StockScript.selectControlStockByProductCode = "EXEC ERP.sel_ControlStockByProductCode @0";
//# sourceMappingURL=stock-script.js.map