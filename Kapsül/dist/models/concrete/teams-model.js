"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsModel = void 0;
const http_error_1 = require("../../core/error/http-error");
const generic_response_1 = require("../../core/generic-response");
const error_message_1 = require("../../utilities/constants/error-message");
const typeorm_1 = require("typeorm");
const teams_script_1 = require("../spscripts/teams-script");
class TeamsModel {
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
    async GetTeamsName() {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let getTeamsNameResponse = await queryManager.query(teams_script_1.TeamsScript.selectTeamsName);
            returnObject.setData = getTeamsNameResponse;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
    async GetTeamsByProductCode(productCode) {
        let returnObject = null;
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let getTeamsByProductCodeResponse = await queryManager.query(teams_script_1.TeamsScript.selectTeamsByProductCode, [productCode]);
            returnObject.setData = getTeamsByProductCodeResponse;
        }
        catch (error) {
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
}
exports.TeamsModel = TeamsModel;
//# sourceMappingURL=teams-model.js.map