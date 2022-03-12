"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsModel = void 0;
const http_error_1 = require("../../core/error/http-error");
const generic_response_1 = require("../../core/generic-response");
const teams_entity_1 = require("../../entities/teams.entity");
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
        let teams = null;
        let teamsList = new Array();
        try {
            returnObject = new generic_response_1.GenericResponse();
            let queryManager = (0, typeorm_1.getManager)();
            let getTeamsByProductCodeResponse = await queryManager.query(teams_script_1.TeamsScript.selectTeamsByProductCode, [productCode]);
            for (let i = 0; i < getTeamsByProductCodeResponse.length; i++) {
                teams = new teams_entity_1.Teams();
                teams.teamName = getTeamsByProductCodeResponse[i].TeamName;
                teams.quantity = getTeamsByProductCodeResponse[i].Quantity;
                teams.quantityPrice = getTeamsByProductCodeResponse[i].QuantityPrice;
                teams.totalPrice = getTeamsByProductCodeResponse[i].TotalPrice;
                console.log(teams);
                teamsList.push(teams);
            }
            returnObject.setData = teamsList;
        }
        catch (error) {
            console.log(error.message);
            returnObject.Result.push(new http_error_1.HttpError(error_message_1.SystemErrorMessage.ProcessError));
            return returnObject;
        }
        return returnObject;
    }
}
exports.TeamsModel = TeamsModel;
//# sourceMappingURL=teams-model.js.map