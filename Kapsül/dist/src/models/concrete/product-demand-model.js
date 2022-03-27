"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDemandModel = void 0;
const generic_response_1 = require("../../core/generic-response");
const product_demand_entity_1 = require("../../entities/product-demand.entity");
const typeorm_1 = require("typeorm");
const product_demand_script_1 = require("../spscripts/product-demand-script");
const http_error_1 = require("../../core/error/http-error");
const error_message_1 = require("../../utilities/constants/error-message");
class ProductDemandModel {
    async GetAll(entitiy) {
        let returnObject = null;
        let productDemand = null;
        let productDemandList = new Array();
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let responseGetProductDemand = await queryManager.query(product_demand_script_1.ProductDemandScript.selectProductDemandScript, [entitiy.recived]);
            if (responseGetProductDemand) {
                for (let i = 0; i < responseGetProductDemand.length; i++) {
                    productDemand = new ProductDemandModel();
                    productDemand.productName = responseGetProductDemand[i].ProductName;
                    productDemand.productCode = responseGetProductDemand[i].ProductCode;
                    productDemand.productLink = responseGetProductDemand[i].ProductLink;
                    productDemand.teamId = responseGetProductDemand[i].TeamId;
                    productDemand.teamName = responseGetProductDemand[i].TeamName;
                    productDemand.productId = responseGetProductDemand[i].ProductId;
                    productDemand.quantityPrice = responseGetProductDemand[i].QuantitiyPrice;
                    productDemandList.push(productDemand);
                }
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
            let responseSaveProductDemand = await queryManager.query(product_demand_script_1.ProductDemandScript.insertProductDemandScript, [
                entity.productName,
                entity.productType,
                entity.productCode,
                entity.productLink,
                entity.productImage,
            ]);
            returnObject.setData = responseSaveProductDemand[0][''];
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
            let responseUpdateProductDemand = await queryManager.query(product_demand_script_1.ProductDemandScript.updateProductDemand, [
                entity.productId,
                entity.productName,
                entity.productType,
                entity.productCode,
                entity.productLink,
                entity.productImage
            ]);
            returnObject.setData = responseUpdateProductDemand;
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
            let responseDeletePurchedProduct = await queryManager.query(product_demand_script_1.ProductDemandScript.deleteProductDemand, [
                entity.teamProductDemandId,
                entity.productId,
                entity.transactionType
            ]);
            returnObject.setData = responseDeletePurchedProduct;
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
            let responseUpdatePurchedProduct = await queryManager.query(product_demand_script_1.ProductDemandScript.updatePurchasedProduct, [entity.productId]);
            returnObject.setData = responseUpdatePurchedProduct;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async GetPurchasedProductDemand() {
        let returnObject = null;
        let productDemand = null;
        let productDemandList = new Array();
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let responseGetPurchasedProductDemand = await queryManager.query(product_demand_script_1.ProductDemandScript.selectPurchasedProduct);
            if (responseGetPurchasedProductDemand) {
                for (let i = 0; i < responseGetPurchasedProductDemand.length; i++) {
                    productDemand.productName = responseGetPurchasedProductDemand[i].ProductName;
                    productDemand.productCode = responseGetPurchasedProductDemand[i].ProductCode;
                    productDemand.productLink = responseGetPurchasedProductDemand[i].ProductLink;
                    productDemand.teamId = responseGetPurchasedProductDemand[i].TeamId;
                    productDemand.teamName = responseGetPurchasedProductDemand[i].TeamName;
                    productDemand.productId = responseGetPurchasedProductDemand[i].ProductId;
                    productDemand.quantityPrice = responseGetPurchasedProductDemand[i].QuantitiyPrice;
                    productDemandList.push(productDemand);
                }
            }
            returnObject.setData = responseGetPurchasedProductDemand;
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
            let responseSaveTeamProductDemand = await queryManager.query(product_demand_script_1.ProductDemandScript.insertTeamsProduct, [
                entity.teamId,
                entity.productId,
                entity.quantity,
                entity.quantityPrice,
                entity.totalPrice,
                entity.recived
            ]);
            returnObject.setData = responseSaveTeamProductDemand[0][''];
        }
        catch (error) {
            console.log(error.message);
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async GetProductTotalQuantityAndTotalPrice(entity) {
        var _a, _b, _c;
        let returnObject = null;
        let productDemand = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let responseGetProductTotalQunatitity = await queryManager.query(product_demand_script_1.ProductDemandScript.selectProductQuantity, [
                entity.productCode,
                entity.recived
            ]);
            if (!responseGetProductTotalQunatitity) {
                returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            }
            productDemand = new product_demand_entity_1.ProductDemand();
            productDemand.quantity = (_a = responseGetProductTotalQunatitity[0]) === null || _a === void 0 ? void 0 : _a.Quantity;
            productDemand.quantityPrice = (_b = responseGetProductTotalQunatitity[0]) === null || _b === void 0 ? void 0 : _b.QuantityPrice;
            productDemand.totalPrice = (_c = responseGetProductTotalQunatitity[0]) === null || _c === void 0 ? void 0 : _c.TotalPrice;
            returnObject.setData = productDemand;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async ControlProductDemand(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let responseControlStockByProductCode = await queryManager.query(product_demand_script_1.ProductDemandScript.selectControlProductDemandByProductCode, [entity.productCode]);
            responseControlStockByProductCode = responseControlStockByProductCode[0]
                ? responseControlStockByProductCode[0]['']
                : null;
            returnObject.setData = responseControlStockByProductCode;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async UpdateTeamProductDemand(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let responseUpdateTeamProductDemand = await queryManager.query(product_demand_script_1.ProductDemandScript.updateTeamProductDemand, [
                entity.teamProductDemandId,
                entity.productId,
                entity.teamId,
                entity.quantity,
                entity.quantityPrice,
                entity.totalPrice
            ]);
            returnObject.setData = responseUpdateTeamProductDemand;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
}
exports.ProductDemandModel = ProductDemandModel;
//# sourceMappingURL=product-demand-model.js.map