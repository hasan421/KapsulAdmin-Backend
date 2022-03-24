"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductProcess = void 0;
const generic_response_1 = require("../core/generic-response");
const typeorm_1 = require("typeorm");
const product_demand_model_1 = require("../models/concrete/product-demand-model");
const product_demand_entity_1 = require("../entities/product-demand.entity");
const http_error_1 = require("../core/error/http-error");
const error_message_1 = require("../utilities/constants/error-message");
const product_quantity_calculater_1 = require("../helper/product-quantity-calculater");
class ProductProcess {
    async Product(entity) {
        let returnObject = null;
        const connection = (0, typeorm_1.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        try {
            await queryRunner.startTransaction();
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
                if (i == 1)
                    saveTeamProductDemand.teamId = 1234;
                let saveTeamProductDemandResponse = await this.productDemandModel.SaveTeamsProductDemand(saveTeamProductDemand);
                if (!saveTeamProductDemandResponse.getSuccess) {
                    returnObject.Result.push(...saveTeamProductDemandResponse.Result);
                    returnObject.setSuccess = saveTeamProductDemandResponse.getSuccess;
                    return returnObject;
                }
            }
            returnObject.setData = 1;
            await queryRunner.commitTransaction();
        }
        catch (error) {
            queryRunner.rollbackTransaction();
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
}
exports.ProductProcess = ProductProcess;
//# sourceMappingURL=product-process.js.map