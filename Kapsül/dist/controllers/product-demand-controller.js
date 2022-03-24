"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDemandController = void 0;
const generic_response_1 = require("../core/generic-response");
const product_demand_entity_1 = require("../entities/product-demand.entity");
const common_1 = require("@nestjs/common");
const product_demand_service_1 = require("../services/concrete/product-demand-service");
const http_error_1 = require("../core/error/http-error");
const error_message_1 = require("../utilities/constants/error-message");
let ProductDemandController = class ProductDemandController {
    constructor(appService) {
        this.appService = appService;
    }
    async SaveProductDemandController(productDemand, response) {
        var _a;
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let saveProductDemandResponse = await this.appService.Create(productDemand);
            if (!saveProductDemandResponse.getSuccess) {
                returnObject.Result.push(...saveProductDemandResponse.Result);
                returnObject.setSuccess = saveProductDemandResponse.getSuccess;
                response.statusCode = (_a = saveProductDemandResponse.Result[0]) === null || _a === void 0 ? void 0 : _a.statusCode;
                returnObject.successMessage = saveProductDemandResponse.successMessage;
                return returnObject;
            }
            returnObject.setData = saveProductDemandResponse.getData;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async GetProductDemandController(response) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let getProductDemandResponse = await this.appService.GetAll();
            if (!getProductDemandResponse.getSuccess) {
                returnObject.Result.push(...getProductDemandResponse.Result);
                returnObject.setSuccess = getProductDemandResponse.getSuccess;
                response.statusCode = getProductDemandResponse.Result[0].statusCode;
                return returnObject;
            }
            returnObject.setData = getProductDemandResponse.getData;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async DeleteProductDemandController(productDemand, response) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let responseDeleteProduct = await this.appService.Delete(productDemand);
            if (!responseDeleteProduct.getSuccess) {
                returnObject.Result.push(...responseDeleteProduct.Result);
                returnObject.setSuccess = responseDeleteProduct.getSuccess;
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
        }
        return returnObject;
    }
    async UpdateTeamProductDemandController(productDemand = null, response) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let responseUpdateTeamProduct = await this.appService.Update(productDemand);
            if (!responseUpdateTeamProduct.getSuccess) {
                returnObject.Result.push(...responseUpdateTeamProduct.Result);
                returnObject.setSuccess = responseUpdateTeamProduct.getSuccess;
                returnObject.successMessage = responseUpdateTeamProduct.successMessage;
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
        }
        return returnObject;
    }
    async GetPurchasedProductDemandController(response) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let responseGetPurchasedProductDemand = await this.appService.GetPurchasedProductDemand();
            if (!responseGetPurchasedProductDemand.getSuccess) {
                returnObject.Result.push(...responseGetPurchasedProductDemand.Result);
                returnObject.setSuccess = responseGetPurchasedProductDemand.getSuccess;
                returnObject.successMessage = responseGetPurchasedProductDemand.successMessage;
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
        }
        return returnObject;
    }
    async UpdateRecivedProductDemandController(productDemand = null, response) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let responseUpdateRecivedroduct = await this.appService.UpdateRecivedProductDemand(productDemand);
            if (!responseUpdateRecivedroduct.getSuccess) {
                returnObject.Result.push(...responseUpdateRecivedroduct.Result);
                returnObject.setSuccess = responseUpdateRecivedroduct.getSuccess;
                returnObject.successMessage = responseUpdateRecivedroduct.successMessage;
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
        }
        return returnObject;
    }
};
__decorate([
    (0, common_1.Post)("save-product-demand"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand, Object]),
    __metadata("design:returntype", Promise)
], ProductDemandController.prototype, "SaveProductDemandController", null);
__decorate([
    (0, common_1.Get)("get-product-demand"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductDemandController.prototype, "GetProductDemandController", null);
__decorate([
    (0, common_1.Post)("delete-product-demand"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand, Object]),
    __metadata("design:returntype", Promise)
], ProductDemandController.prototype, "DeleteProductDemandController", null);
__decorate([
    (0, common_1.Post)("update-product-demand"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand, Object]),
    __metadata("design:returntype", Promise)
], ProductDemandController.prototype, "UpdateTeamProductDemandController", null);
__decorate([
    (0, common_1.Get)("get-purchased-product-demand"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductDemandController.prototype, "GetPurchasedProductDemandController", null);
__decorate([
    (0, common_1.Post)("update-recived-product-demand"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand, Object]),
    __metadata("design:returntype", Promise)
], ProductDemandController.prototype, "UpdateRecivedProductDemandController", null);
ProductDemandController = __decorate([
    (0, common_1.Controller)("product-demand"),
    __metadata("design:paramtypes", [product_demand_service_1.ProductDemandService])
], ProductDemandController);
exports.ProductDemandController = ProductDemandController;
//# sourceMappingURL=product-demand-controller.js.map