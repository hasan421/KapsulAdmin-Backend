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
const generic_response_1 = require("../../core/generic-response");
const product_demand_1 = require("../../models/concrete/product-demand");
let ProductDemandService = class ProductDemandService {
    async saveProductDemand(productDemand) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.productDemandModel = new product_demand_1.ProductDemandModel();
            let saveProductDemandResponse = await this.productDemandModel.saveProductDemand(productDemand);
            if (!saveProductDemandResponse.getSuccess) {
                returnObject = saveProductDemandResponse;
                return returnObject;
            }
            returnObject = saveProductDemandResponse;
        }
        catch (error) {
            returnObject.Result.push(error.message);
        }
        return returnObject;
    }
    async getProductDemand() {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.productDemandModel = new product_demand_1.ProductDemandModel();
            let getProductDemandResponse = await this.productDemandModel.getProductDemand();
            if (!getProductDemandResponse.getSuccess) {
                returnObject = getProductDemandResponse;
                return returnObject;
            }
            returnObject.setData = getProductDemandResponse.setData;
        }
        catch (error) {
            returnObject.Result.push(error.message);
        }
        return returnObject;
    }
};
ProductDemandService = __decorate([
    (0, common_1.Injectable)()
], ProductDemandService);
exports.ProductDemandService = ProductDemandService;
//# sourceMappingURL=product-demand-service.js.map