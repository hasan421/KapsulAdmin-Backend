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
exports.StockController = void 0;
const generic_response_1 = require("../core/generic-response");
const product_demand_entity_1 = require("../entities/product-demand.entity");
const common_1 = require("@nestjs/common");
const stock_service_1 = require("../services/concrete/stock-service");
const http_error_1 = require("../core/error/http-error");
const error_message_1 = require("../utilities/constants/error-message");
let StockController = class StockController {
    constructor(appService) {
        this.appService = appService;
    }
    async SaveStockController(productDemand, response) {
        var _a;
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let saveStockResponse = await this.appService.Create(productDemand);
            if (!saveStockResponse.getSuccess) {
                returnObject.Result.push(...saveStockResponse.Result);
                returnObject.setSuccess = saveStockResponse.getSuccess;
                response.statusCode = (_a = saveStockResponse.Result[0]) === null || _a === void 0 ? void 0 : _a.statusCode;
                returnObject.successMessage = saveStockResponse.successMessage;
                return returnObject;
            }
            returnObject.setData = saveStockResponse.getData;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async GetStockController(response) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let getStockResponse = await this.appService.GetAll();
            if (!getStockResponse.getSuccess) {
                returnObject.Result.push(...getStockResponse.Result);
                returnObject.setSuccess = getStockResponse.getSuccess;
                response.statusCode = getStockResponse.Result[0].statusCode;
                return returnObject;
            }
            returnObject.setData = getStockResponse.getData;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async DeleteStockController(productDemand, response) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let responseDeleteStock = await this.appService.Delete(productDemand);
            if (!responseDeleteStock.getSuccess) {
                returnObject.Result.push(...responseDeleteStock.Result);
                returnObject.setSuccess = responseDeleteStock.getSuccess;
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
        }
        return returnObject;
    }
    async UpdateStockController(productDemand = null, response) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let responseUpdateStock = await this.appService.Update(productDemand);
            if (!responseUpdateStock.getSuccess) {
                returnObject.Result.push(...responseUpdateStock.Result);
                returnObject.setSuccess = responseUpdateStock.getSuccess;
                returnObject.successMessage = responseUpdateStock.successMessage;
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
        }
        return returnObject;
    }
    async UpdateStockQuantityController(productDemand = null, response) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let responseUpdateStock = await this.appService.UpdateStockQuantity(productDemand);
            if (!responseUpdateStock.getSuccess) {
                returnObject.Result.push(...responseUpdateStock.Result);
                returnObject.setSuccess = responseUpdateStock.getSuccess;
                returnObject.successMessage = responseUpdateStock.successMessage;
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
        }
        return returnObject;
    }
};
__decorate([
    (0, common_1.Post)("save-stock"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand, Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "SaveStockController", null);
__decorate([
    (0, common_1.Get)("get-stock"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "GetStockController", null);
__decorate([
    (0, common_1.Post)("delete-stock"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand, Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "DeleteStockController", null);
__decorate([
    (0, common_1.Post)("update-stock"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand, Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "UpdateStockController", null);
__decorate([
    (0, common_1.Post)("update-stock-quantity"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand, Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "UpdateStockQuantityController", null);
StockController = __decorate([
    (0, common_1.Controller)("stock"),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
exports.StockController = StockController;
//# sourceMappingURL=stock-controller.js.map