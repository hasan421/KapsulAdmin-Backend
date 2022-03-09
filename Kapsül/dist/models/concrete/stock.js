"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
const http_error_1 = require("../../core/error/http-error");
const generic_response_1 = require("../../core/generic-response");
const typeorm_1 = require("typeorm");
const stock_script_1 = require("../spscripts/stock-script");
class Stock {
    async UpdateStockQuantity(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let updatStockQuantityResponse = await queryManager.query(stock_script_1.StockScript.updateStockQuantity, [entity.stockId, entity.stockQuantity]);
            returnObject.setData = updatStockQuantityResponse;
            return returnObject;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError("İşlem sırasında hata oluştu."));
        }
    }
    async GetAll() {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let getStockResponse = await queryManager.query(stock_script_1.StockScript.selectStock);
            returnObject.setData = getStockResponse;
        }
        catch (error) {
            returnObject.Result.push(error.message);
        }
        return returnObject;
    }
    async Create(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let saveStockResponse = await queryManager.query(stock_script_1.StockScript.insertStock, [
                entity.productId,
                entity.teamId,
                entity.stockQuantity,
                entity.quantityType,
            ]);
            returnObject.setData = saveStockResponse[0][""];
        }
        catch (error) {
            returnObject.Result.push(error.message);
        }
        return returnObject;
    }
    async Update(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let updateStockResponse = await queryManager.query(stock_script_1.StockScript.updateStock, [
                entity.productId,
                entity.teamId,
                entity.stockQuantity,
                entity.quantityType,
            ]);
            returnObject.setData = updateStockResponse;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError("İşlem sırasında hata oluştu."));
        }
        return returnObject;
    }
    async Delete(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let deleteStockResponse = await queryManager.query(stock_script_1.StockScript.deleteStock, [entity.stockId]);
            returnObject.setData = deleteStockResponse;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError("İşlem sırasında hata oluştu."));
        }
        return returnObject;
    }
}
exports.Stock = Stock;
//# sourceMappingURL=stock.js.map