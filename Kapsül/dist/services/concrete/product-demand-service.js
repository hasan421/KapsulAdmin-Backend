"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDemandService = void 0;
const common_1 = require("@nestjs/common");
const http_error_1 = require("../../core/error/http-error");
const generic_response_1 = require("../../core/generic-response");
const product_demand_entity_1 = require("../../entities/product-demand.entity");
const product_quantity_calculater_1 = require("../../helper/product-quantity-calculater");
const product_demand_model_1 = require("../../models/concrete/product-demand-model");
const teams_model_1 = require("../../models/concrete/teams-model");
const error_message_1 = require("../../utilities/constants/error-message");
let ProductDemandService = class ProductDemandService {
    async GetAll() {
        var _a, _b, _c;
        let returnObject = null;
        let productDemand = new product_demand_entity_1.ProductDemand();
        let productDemandList = Array();
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.productDemandModel = new product_demand_model_1.ProductDemandModel();
            let getProductDemandResponse = await this.productDemandModel.GetAll();
            if (!getProductDemandResponse.getSuccess) {
                returnObject.Result.push(...getProductDemandResponse.Result);
                returnObject.setSuccess = getProductDemandResponse.setSuccess;
                return returnObject;
            }
            if (!getProductDemandResponse && !getProductDemandResponse.getData) {
                returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            }
            for (let i = 0; i < getProductDemandResponse.getData.length; i++) {
                this.teamsModel = new teams_model_1.TeamsModel();
                let getTeams = await this.teamsModel.GetTeamsByProductCode(getProductDemandResponse.getData[i].productCode);
                if (!getTeams.getSuccess) {
                    returnObject.Result.push(...getProductDemandResponse.Result);
                    returnObject.setSuccess = getProductDemandResponse.setSuccess;
                    return returnObject;
                }
                productDemand.productName = (_a = getProductDemandResponse.getData[i]) === null || _a === void 0 ? void 0 : _a.productName;
                productDemand.productCode = (_b = getProductDemandResponse.getData[i]) === null || _b === void 0 ? void 0 : _b.productCode;
                productDemand.productLink = (_c = getProductDemandResponse.getData[i]) === null || _c === void 0 ? void 0 : _c.productLink;
                productDemand.quantity = (0, product_quantity_calculater_1.CalculaterTotalProductQuantity)(getTeams.getData);
                productDemand.quantityPrice = getTeams.getData[0].quantityPrice;
                productDemand.totalPrice = (0, product_quantity_calculater_1.CalculaterTotalPrice)(getTeams.getData);
                productDemand.teamNameList = [];
                productDemand.teamNameList.push(...getTeams.getData);
                productDemandList.push(productDemand);
            }
            returnObject.setData = productDemandList;
        }
        catch (error) {
            console.log(error.message);
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async Create(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.productDemandModel = new product_demand_model_1.ProductDemandModel();
            let saveProductDemandResponse = await this.productDemandModel.Create(entity);
            if (!saveProductDemandResponse.getSuccess) {
                returnObject.Result.push(...saveProductDemandResponse.Result);
                returnObject.setSuccess = saveProductDemandResponse.getSuccess;
                return returnObject;
            }
            for (let i = 0; i < entity.teamNameList.length; i++) {
                let saveTeamProductDemand = new product_demand_entity_1.ProductDemand();
                saveTeamProductDemand.productId = saveProductDemandResponse.getData;
                saveTeamProductDemand.teamId = entity.teamNameList[i].teamId;
                saveTeamProductDemand.quantity = entity.teamNameList[i].quantity;
                saveTeamProductDemand.quantityPrice = entity.quantityPrice;
                saveTeamProductDemand.totalPrice = (0, product_quantity_calculater_1.CalculaterTotalProductQuantityPrice)(entity.teamNameList[i].quantity, entity.quantityPrice);
                saveTeamProductDemand.recived = 0;
                let saveTeamProductDemandResponse = await this.productDemandModel.SaveTeamsProductDemand(saveTeamProductDemand);
                if (!saveTeamProductDemandResponse.getSuccess) {
                    returnObject.Result.push(...saveTeamProductDemandResponse.Result);
                    returnObject.setSuccess = saveTeamProductDemandResponse.getSuccess;
                    return returnObject;
                }
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    Update(entity) {
        throw new Error("Method not implemented.");
    }
    Delete(entity) {
        throw new Error("Method not implemented.");
    }
    GetPurchasedProductDemand() {
        throw new Error("Method not implemented.");
    }
    UpdateRecivedProductDemand(entity) {
        throw new Error("Method not implemented.");
    }
};
ProductDemandService = __decorate([
    (0, common_1.Injectable)()
], ProductDemandService);
exports.ProductDemandService = ProductDemandService;
//# sourceMappingURL=product-demand-service.js.map