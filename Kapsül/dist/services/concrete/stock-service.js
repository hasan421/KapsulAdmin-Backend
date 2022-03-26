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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_error_1 = require("../../core/error/http-error");
const generic_response_1 = require("../../core/generic-response");
const product_demand_entity_1 = require("../../entities/product-demand.entity");
const stock_model_1 = require("../../models/concrete/stock-model");
const error_message_1 = require("../../utilities/constants/error-message");
let StockService = class StockService {
    async GetAll() {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.stockModel = new stock_model_1.Stock();
            let getStockResponse = await this.stockModel.GetAll();
            console.log(getStockResponse);
            if (!getStockResponse.getSuccess) {
                returnObject = getStockResponse;
                return returnObject;
            }
            returnObject = getStockResponse;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
        }
        return returnObject;
    }
    async Create(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.stockModel = new stock_model_1.Stock();
            let responseSaveStock = await this.stockModel.Create(entity);
            if (!responseSaveStock.getSuccess) {
                returnObject.Result.push(...responseSaveStock.Result);
                returnObject.setSuccess = responseSaveStock.getSuccess;
                returnObject.successMessage = responseSaveStock.successMessage;
                return returnObject;
            }
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
            this.stockModel = new stock_model_1.Stock();
            if (!entity.stockId) {
                console.log("if 1");
                returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
                return returnObject;
            }
            let responseUpdateStock = await this.stockModel.Update(entity);
            if (!responseUpdateStock.getSuccess) {
                console.log("if 2");
                returnObject.Result.push(...responseUpdateStock.Result);
                returnObject.setSuccess = responseUpdateStock.getSuccess;
                returnObject.successMessage = responseUpdateStock.successMessage;
                return returnObject;
            }
        }
        catch (error) {
            console.log(error);
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async Delete(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.stockModel = new stock_model_1.Stock();
            let responseDeleteStock = await this.stockModel.Delete(entity);
            if (!responseDeleteStock.getSuccess) {
                returnObject.Result.push(...responseDeleteStock.Result);
                returnObject.setSuccess = responseDeleteStock.getSuccess;
                returnObject.successMessage = responseDeleteStock.successMessage;
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async UpdateStockQuantity(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.stockModel = new stock_model_1.Stock();
            let responseUpdateStock = await this.stockModel.UpdateStockQuantity(entity);
            if (!responseUpdateStock.getSuccess) {
                returnObject.Result.push(...responseUpdateStock.Result);
                returnObject.setSuccess = responseUpdateStock.getSuccess;
                returnObject.successMessage = responseUpdateStock.successMessage;
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ description: "fdfsd" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand]),
    __metadata("design:returntype", Promise)
], StockService.prototype, "Create", null);
StockService = __decorate([
    (0, common_1.Injectable)()
], StockService);
exports.StockService = StockService;
//# sourceMappingURL=stock-service.js.map