"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDemandModel = void 0;
const generic_response_1 = require("../../core/generic-response");
const typeorm_1 = require("typeorm");
const product_demand_script_1 = require("../spscripts/product-demand-script");
const http_error_1 = require("../../core/error/http-error");
const error_message_1 = require("../../utilities/constants/error-message");
class ProductDemandModel {
    async GetAll() {
        let returnObject = null;
        let productDemand = null;
        let productDemandList = new Array();
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let getProductDemandResponse = await queryManager.query(product_demand_script_1.ProductDemandScript.selectProductDemandScript);
            for (let i = 0; i < getProductDemandResponse.length; i++) {
                productDemand = new ProductDemandModel();
                productDemand.productName = getProductDemandResponse[i].ProductName;
                productDemand.productCode = getProductDemandResponse[i].ProductCode;
                productDemand.productLink = getProductDemandResponse[i].ProductLink;
                productDemandList.push(productDemand);
            }
            returnObject.setData = productDemandList;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async Create(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let saveProductDemandResponse = await queryManager.query(product_demand_script_1.ProductDemandScript.insertProductDemandScript, [
                entity.productName,
                entity.productType,
                entity.productCode,
                entity.productLink,
                entity.productImage,
            ]);
            returnObject.setData = saveProductDemandResponse[0][''];
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async Update(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let updateProductDemandResponse = await queryManager.query(product_demand_script_1.ProductDemandScript.updateProductDemand, [
                entity.productId,
                entity.productName,
                entity.productType,
                entity.productCode,
                entity.quantity,
                entity.quantityPrice,
                entity.totalPrice,
                entity.productLink,
                entity.productImage
            ]);
            returnObject.setData = updateProductDemandResponse;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async Delete(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let deletePurchedProductResponse = await queryManager.query(product_demand_script_1.ProductDemandScript.deleteProductDemand, [entity.productId]);
            returnObject.setData = deletePurchedProductResponse;
            return returnObject;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
    }
    async UpdateRecivedProductDemand(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let updatePurchedProductResponse = await queryManager.query(product_demand_script_1.ProductDemandScript.updatePurchasedProduct, [entity.productId]);
            returnObject.setData = updatePurchedProductResponse;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async GetPurchasedProductDemand() {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let getPurchedProductResponse = await queryManager.query(product_demand_script_1.ProductDemandScript.selectPurchasedProduct);
            returnObject.setData = getPurchedProductResponse;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async SaveTeamsProductDemand(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let getProductDemandResponse = await queryManager.query(product_demand_script_1.ProductDemandScript.insertTeamsProduct, [
                entity.teamId,
                entity.productId,
                entity.quantity,
                entity.quantityPrice,
                entity.totalPrice,
                entity.recived
            ]);
            returnObject.setData = getProductDemandResponse[0][''];
        }
        catch (error) {
            console.log(error.message);
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
}
exports.ProductDemandModel = ProductDemandModel;
//# sourceMappingURL=product-demand-model.js.map