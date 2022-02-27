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
const generic_response_1 = require("../../core/generic-response");
const product_demand_entity_1 = require("../../entities/product-demand.entity");
const common_1 = require("@nestjs/common");
const product_demand_service_1 = require("../../services/concrete/product-demand-service");
let ProductDemandController = class ProductDemandController {
    constructor(appService) {
        this.appService = appService;
    }
    async saveProductDemand(productDemand) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let saveProductDemandResponse = await this.appService.saveProductDemand(productDemand);
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
    getProductDemand() {
        throw new Error("Method not implemented.");
    }
};
__decorate([
    (0, common_1.Post)("save-product-demand"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand]),
    __metadata("design:returntype", Promise)
], ProductDemandController.prototype, "saveProductDemand", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductDemandController.prototype, "getProductDemand", null);
ProductDemandController = __decorate([
    (0, common_1.Controller)("product-demand"),
    __metadata("design:paramtypes", [product_demand_service_1.ProductDemandService])
], ProductDemandController);
exports.ProductDemandController = ProductDemandController;
//# sourceMappingURL=product-demand-controller.js.map