"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const http_error_1 = require("../../core/error/http-error");
const generic_response_1 = require("../../core/generic-response");
const teams_model_1 = require("../../models/concrete/teams-model");
const error_message_1 = require("../../utilities/constants/error-message");
let TeamsService = class TeamsService {
    GetAll() {
        throw new Error("Method not implemented.");
    }
    Create(entity) {
        throw new Error("Method not implemented.");
    }
    Update(entity) {
        throw new Error("Method not implemented.");
    }
    Delete(entity) {
        throw new Error("Method not implemented.");
    }
    async GetTeamsByProductCode(productCode) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.teamsemandModel = new teams_model_1.TeamsModel();
            let getTeamsNameByProductCodeResponse = await this.teamsemandModel.GetTeamsByProductCode(productCode);
            if (!getTeamsNameByProductCodeResponse.getSuccess) {
                returnObject.Result.push(...getTeamsNameByProductCodeResponse.Result);
                returnObject.setSuccess = getTeamsNameByProductCodeResponse.getSuccess;
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
    async GetTeamsName() {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            this.teamsemandModel = new teams_model_1.TeamsModel();
            let getTeamsNameResponse = await this.teamsemandModel.GetTeamsName();
            if (!getTeamsNameResponse.getSuccess) {
                returnObject.Result.push(...getTeamsNameResponse.Result);
                returnObject.setSuccess = getTeamsNameResponse.getSuccess;
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
TeamsService = __decorate([
    (0, common_1.Injectable)()
], TeamsService);
exports.TeamsService = TeamsService;
//# sourceMappingURL=teams-service.js.map