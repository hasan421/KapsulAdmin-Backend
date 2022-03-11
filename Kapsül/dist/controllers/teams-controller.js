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
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const http_error_1 = require("../core/error/http-error");
const generic_response_1 = require("../core/generic-response");
const product_demand_entity_1 = require("../entities/product-demand.entity");
const teams_service_1 = require("../services/concrete/teams-service");
const error_message_1 = require("../utilities/constants/error-message");
let TeamsController = class TeamsController {
    constructor(teamService) {
        this.teamService = teamService;
    }
    async GetTeamsNameByProductCode(entity, response) {
        var _a;
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let getTeamsNameByProductCodeResponse = await this.teamService.GetTeamsByProductCode(entity.productCode);
            if (!getTeamsNameByProductCodeResponse.getSuccess) {
                returnObject.Result.push(...getTeamsNameByProductCodeResponse.Result);
                returnObject.setSuccess = getTeamsNameByProductCodeResponse.getSuccess;
                response.statusCode = (_a = getTeamsNameByProductCodeResponse.Result[0]) === null || _a === void 0 ? void 0 : _a.statusCode;
                return returnObject;
            }
            returnObject.setData = getTeamsNameByProductCodeResponse.getData;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async GetTeamsName(response) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let getTeamsNameResponse = await this.teamService.GetTeamsName();
            if (!getTeamsNameResponse.getSuccess) {
                returnObject.Result.push(...getTeamsNameResponse.Result);
                response.statusCode = getTeamsNameResponse.Result[0].statusCode;
                return returnObject;
            }
            returnObject.setData = getTeamsNameResponse.getData;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
};
__decorate([
    (0, common_1.Post)("get-teams-name-by-productcode"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_demand_entity_1.ProductDemand, Object]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "GetTeamsNameByProductCode", null);
__decorate([
    (0, common_1.Get)("get-teams-name"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "GetTeamsName", null);
TeamsController = __decorate([
    (0, common_1.Controller)("teams"),
    __metadata("design:paramtypes", [teams_service_1.TeamsService])
], TeamsController);
exports.TeamsController = TeamsController;
//# sourceMappingURL=teams-controller.js.map