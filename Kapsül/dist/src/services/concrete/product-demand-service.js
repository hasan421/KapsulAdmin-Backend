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
const transaction_type_1 = require("../../utilities/enums/transaction-type");
let ProductDemandService = class ProductDemandService {
    async GetAll(entity) {
        var _a, _b, _c, _d, _e, _f, _g;
        let returnObject = null;
        let productDemand = null;
        let productDemandList = Array();
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.productDemandModel = new product_demand_model_1.ProductDemandModel();
            let responseGetProductDemand = await this.productDemandModel.GetAll(entity);
            if (!responseGetProductDemand.getSuccess) {
                returnObject.Result.push(...responseGetProductDemand.Result);
                returnObject.setSuccess = responseGetProductDemand.setSuccess;
                returnObject.successMessage = responseGetProductDemand.successMessage;
                return returnObject;
            }
            if (!responseGetProductDemand && !responseGetProductDemand.getData) {
                returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            }
            for (let i = 0; i < responseGetProductDemand.getData.length; i++) {
                productDemand = new product_demand_entity_1.ProductDemand();
                productDemand.productCode = responseGetProductDemand.getData[i].productCode;
                productDemand.recived = entity.recived;
                let responseProductQuantity = await this.productDemandModel.
                    GetProductTotalQuantityAndTotalPrice(productDemand);
                if (!responseProductQuantity.getSuccess) {
                    returnObject.Result.push(...responseProductQuantity.Result);
                    returnObject.setSuccess = responseProductQuantity.getSuccess;
                    returnObject.successMessage = responseProductQuantity.successMessage;
                }
                if (!responseProductQuantity && !responseProductQuantity.getData) {
                    returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
                }
                this.teamsModel = new teams_model_1.TeamsModel();
                let responseGetTeams = await this.teamsModel.GetTeamsByProductCode(productDemand);
                if (!responseGetTeams.getSuccess) {
                    returnObject.Result.push(...responseGetTeams.Result);
                    returnObject.setSuccess = responseGetTeams.setSuccess;
                    returnObject.successMessage = responseGetTeams.successMessage;
                    return returnObject;
                }
                productDemand = new product_demand_entity_1.ProductDemand();
                productDemand.productId = (_a = responseGetProductDemand.getData[i]) === null || _a === void 0 ? void 0 : _a.productId;
                productDemand.productName = (_b = responseGetProductDemand.getData[i]) === null || _b === void 0 ? void 0 : _b.productName;
                productDemand.productCode = (_c = responseGetProductDemand.getData[i]) === null || _c === void 0 ? void 0 : _c.productCode;
                productDemand.productLink = (_d = responseGetProductDemand.getData[i]) === null || _d === void 0 ? void 0 : _d.productLink;
                productDemand.quantity = (_e = responseProductQuantity.getData) === null || _e === void 0 ? void 0 : _e.quantity;
                productDemand.quantityPrice = (_f = responseProductQuantity.getData) === null || _f === void 0 ? void 0 : _f.quantityPrice;
                productDemand.totalPrice = (_g = responseProductQuantity.getData) === null || _g === void 0 ? void 0 : _g.totalPrice;
                productDemand.teamNameList = [];
                productDemand.teamNameList.push(...responseGetTeams.getData);
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
            this.productDemandModel = new product_demand_model_1.ProductDemandModel();
            let responseControlProductDemand = await this.productDemandModel.ControlProductDemand(entity);
            if (!responseControlProductDemand.getSuccess) {
                returnObject.Result.push(...responseControlProductDemand.Result);
                returnObject.setSuccess = responseControlProductDemand.getSuccess;
                returnObject.successMessage = responseControlProductDemand.successMessage;
                return returnObject;
            }
            if (responseControlProductDemand.getData == 1) {
                returnObject.Result.push(new http_error_1.BadRequestError("SameContentError"));
                return returnObject;
            }
            let responseSaveProductDemand = await this.productDemandModel.Create(entity);
            if (!responseSaveProductDemand.getSuccess) {
                returnObject.Result.push(...responseSaveProductDemand.Result);
                returnObject.setSuccess = responseSaveProductDemand.getSuccess;
                returnObject.successMessage = responseSaveProductDemand.successMessage;
                return returnObject;
            }
            for (let i = 0; i < entity.teamNameList.length; i++) {
                let saveTeamProductDemand = new product_demand_entity_1.ProductDemand();
                saveTeamProductDemand.productId = responseSaveProductDemand.getData;
                saveTeamProductDemand.teamId = entity.teamNameList[i].teamId;
                saveTeamProductDemand.quantity = entity.teamNameList[i].quantity;
                saveTeamProductDemand.quantityPrice = entity.quantityPrice;
                saveTeamProductDemand.totalPrice = (0, product_quantity_calculater_1.CalculaterTotalProductQuantityPrice)(entity.teamNameList[i].quantity, entity.quantityPrice);
                saveTeamProductDemand.recived = 0;
                let responseSaveTeamProductDemand = await this.productDemandModel.SaveTeamsProductDemand(saveTeamProductDemand);
                if (!responseSaveTeamProductDemand.getSuccess) {
                    returnObject.Result.push(...responseSaveTeamProductDemand.Result);
                    returnObject.setSuccess = responseSaveTeamProductDemand.getSuccess;
                    returnObject.successMessage = responseSaveTeamProductDemand.successMessage;
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
    async Update(entity) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.productDemandModel = new product_demand_model_1.ProductDemandModel();
            if (!(entity.productId)) {
                returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
                return returnObject;
            }
            let responseUpdateProductDemand = await this.productDemandModel.Update(entity);
            if (!responseUpdateProductDemand.getSuccess) {
                returnObject.Result.push(...responseUpdateProductDemand.Result);
                returnObject.setSuccess = responseUpdateProductDemand.getSuccess;
                returnObject.successMessage = responseUpdateProductDemand.successMessage;
                return returnObject;
            }
            if (!entity.teamNameList) {
                returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
                return returnObject;
            }
            for (let i = 0; i < entity.teamNameList.length; i++) {
                let productDemand = new product_demand_entity_1.ProductDemand();
                if (((_a = entity.teamNameList[i]) === null || _a === void 0 ? void 0 : _a.transactionType) == transaction_type_1.TransactionType.TeamCreate) {
                    productDemand.productId = entity.productId;
                    productDemand.teamId = (_b = entity.teamNameList[i]) === null || _b === void 0 ? void 0 : _b.teamId;
                    productDemand.quantity = (_c = entity.teamNameList[i]) === null || _c === void 0 ? void 0 : _c.quantity;
                    productDemand.quantityPrice = entity.quantityPrice;
                    productDemand.totalPrice = entity.totalPrice;
                    productDemand.recived = 0;
                    let responseSaveTeamProductDemand = await this.productDemandModel.
                        SaveTeamsProductDemand(productDemand);
                    if (!responseSaveTeamProductDemand.getSuccess) {
                        returnObject.Result.push(...responseSaveTeamProductDemand.Result);
                        returnObject.setSuccess = responseSaveTeamProductDemand.getSuccess;
                        returnObject.successMessage = responseSaveTeamProductDemand.successMessage;
                        return returnObject;
                    }
                }
                else if (((_d = entity.teamNameList[i]) === null || _d === void 0 ? void 0 : _d.transactionType) == transaction_type_1.TransactionType.TeamUpdate) {
                    productDemand.teamProductDemandId = (_e = entity.teamNameList[i]) === null || _e === void 0 ? void 0 : _e.teamProductDemandId;
                    productDemand.productId = entity.productId;
                    productDemand.teamId = (_f = entity.teamNameList[i]) === null || _f === void 0 ? void 0 : _f.teamId;
                    productDemand.quantity = (_g = entity.teamNameList[i]) === null || _g === void 0 ? void 0 : _g.quantity;
                    productDemand.quantityPrice = entity.quantityPrice;
                    productDemand.totalPrice = entity.totalPrice;
                    let responseUpdateTeamProductDemand = await this.productDemandModel.
                        UpdateTeamProductDemand(productDemand);
                    if (!responseUpdateTeamProductDemand.getSuccess) {
                        returnObject.Result.push(...responseUpdateTeamProductDemand.Result);
                        returnObject.setSuccess = responseUpdateTeamProductDemand.getSuccess;
                        returnObject.successMessage = responseUpdateProductDemand.successMessage;
                        return returnObject;
                    }
                }
                else if (((_h = entity.teamNameList[i]) === null || _h === void 0 ? void 0 : _h.transactionType) == transaction_type_1.TransactionType.TeamDelete) {
                    productDemand.teamProductDemandId = (_j = entity.teamNameList[i]) === null || _j === void 0 ? void 0 : _j.teamProductDemandId;
                    productDemand.transactionType = (_k = entity.teamNameList[i]) === null || _k === void 0 ? void 0 : _k.transactionType;
                    let responseDeleteTeamProduct = await this.productDemandModel.Delete(productDemand);
                    if (!responseDeleteTeamProduct.getSuccess) {
                        returnObject.Result.push(...responseDeleteTeamProduct.Result);
                        returnObject.setSuccess = responseDeleteTeamProduct.getSuccess;
                        returnObject.successMessage = responseDeleteTeamProduct.successMessage;
                        return returnObject;
                    }
                }
                else {
                    returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
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
    async Delete(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.productDemandModel = new product_demand_model_1.ProductDemandModel();
            let responseDeleteProduct = await this.productDemandModel.Delete(entity);
            if (!responseDeleteProduct.getSuccess) {
                returnObject.Result.push(...responseDeleteProduct.Result);
                returnObject.setSuccess = responseDeleteProduct.getSuccess;
                returnObject.successMessage = responseDeleteProduct.successMessage;
                return returnObject;
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async UpdateRecivedProductDemand(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.productDemandModel = new product_demand_model_1.ProductDemandModel();
            if (!entity && entity.length <= 0) {
                returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
                return returnObject;
            }
            if (entity == null || entity == undefined || entity.length <= 0) {
                returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
                return returnObject;
            }
            for (let i = 0; i < entity.length; i++) {
                let responseUpdateRecivedProductDemand = await this.productDemandModel.UpdateRecivedProductDemand(entity[i]);
                if (!responseUpdateRecivedProductDemand.getSuccess) {
                    returnObject.Result.push(...responseUpdateRecivedProductDemand.Result);
                    returnObject.setSuccess = responseUpdateRecivedProductDemand.getSuccess;
                    returnObject.successMessage = responseUpdateRecivedProductDemand.successMessage;
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
};
ProductDemandService = __decorate([
    (0, common_1.Injectable)()
], ProductDemandService);
exports.ProductDemandService = ProductDemandService;
//# sourceMappingURL=product-demand-service.js.map