"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDemandModel = void 0;
const generic_response_1 = require("../../core/generic-response");
const typeorm_1 = require("typeorm");
const product_demand_script_1 = require("../spscripts/product-demand-script");
class ProductDemandModel {
    async getProductDemand() {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let getProductDemandResponse = await queryManager.query(product_demand_script_1.ProductDemandScript.selectProductDemandScript);
            returnObject.setData = getProductDemandResponse;
        }
        catch (error) {
            returnObject.Result.push(error.message);
        }
        return returnObject;
    }
    async saveProductDemand(productDemand) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let saveProductDemandResponse = await queryManager.query(product_demand_script_1.ProductDemandScript.insertProductDemandScript, [
                productDemand.ProductName,
                productDemand.ProductType,
                productDemand.ProductCode,
                productDemand.Quantity,
                productDemand.QuantityPrice,
                productDemand.TotalPrice,
                productDemand.ProductLink,
                productDemand.ProductImage,
                productDemand.Recived,
            ]);
            returnObject.setData = saveProductDemandResponse[0][''];
        }
        catch (error) {
            returnObject.Result.push(error.message);
        }
        return returnObject;
    }
}
exports.ProductDemandModel = ProductDemandModel;
//# sourceMappingURL=product-demand.js.map