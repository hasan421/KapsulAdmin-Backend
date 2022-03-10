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
const product_demand_1 = require("../../models/concrete/product-demand");
const error_message_1 = require("../../utilities/constants/error-message");
let ProductDemandService = class ProductDemandService {
    async GetAll() {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.productDemandModel = new product_demand_1.ProductDemandModel();
            let getProductDemandResponse = await this.productDemandModel.GetAll();
            if (!getProductDemandResponse.getSuccess) {
                returnObject = getProductDemandResponse;
                return returnObject;
            }
            returnObject = getProductDemandResponse;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.InternalServerErrorMessages.BASIC_ERROR));
        }
        return returnObject;
    }
    async Create(entity) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.productDemandModel = new product_demand_1.ProductDemandModel();
            const asyncResponse = await Promise.all(entity.map(async (item, index) => {
                let saveProductDemandResponse = await this.productDemandModel.Create(item);
                if (!saveProductDemandResponse.getSuccess) {
                    returnObject = saveProductDemandResponse;
                    return returnObject;
                }
                return saveProductDemandResponse;
            }));
            if (!asyncResponse) {
                returnObject.Result.push(new http_error_1.HttpError("İşlem sırasında hata oluştu"));
                return returnObject;
            }
            for (let i = 0; i < asyncResponse.length; i++) {
                let saveTeamProductDemand = new product_demand_entity_1.ProductDemand();
                saveTeamProductDemand.productId = asyncResponse[i].getData;
                console.log(saveTeamProductDemand.productId);
                saveTeamProductDemand.teamId = entity[i].teamId;
                let saveTeamProductDemandResponse = await this.productDemandModel.SaveTeamsProductDemand(saveTeamProductDemand);
                if (!saveTeamProductDemandResponse.getSuccess) {
                    returnObject.Result = saveTeamProductDemandResponse.Result;
                    return returnObject;
                }
            }
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.InternalServerErrorMessages.BASIC_ERROR));
        }
        return returnObject;
    }
    Update(entity) {
        throw new Error("Method not implemented.");
    }
    Delete(entity) {
        throw new Error("Method not implemented.");
    }
};
ProductDemandService = __decorate([
    (0, common_1.Injectable)()
], ProductDemandService);
exports.ProductDemandService = ProductDemandService;
//# sourceMappingURL=product-demand-service.js.map