import { HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { Teams } from "src/entities/teams.entity";
import {  SystemErrorMessage } from "src/utilities/constants/error-message";
import { getManager } from "typeorm";
import { ITeams} from "../abstract/ITeamsModel";
import { TeamsScript } from "../spscripts/teams-script";

export class TeamsModel implements ITeams{
  
    GetAll(): Promise<GenericResponse<Teams[]>> {
        throw new Error("Method not implemented.");
    }
    Create(entity: Teams | Teams[]): Promise<GenericResponse<number>> {
        throw new Error("Method not implemented.");
    }
    Update(entity: Teams): Promise<GenericResponse<Number>> {
        throw new Error("Method not implemented.");
    }
    Delete(entity: Teams): Promise<GenericResponse<Number>> {
        throw new Error("Method not implemented.");
    }
    async GetTeamsName(): Promise<GenericResponse<Teams[]>> {
        let returnObject: GenericResponse<Teams[]> = null;
        try {
          returnObject = new GenericResponse<Teams[]>();
          let queryManager = getManager();
          let getTeamsNameResponse = await queryManager.query(
            TeamsScript.selectTeamsName,
          );
          returnObject.setData = getTeamsNameResponse;
        } catch (error) {
          returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
          return returnObject;
        }
        return returnObject;
    }
   async GetTeamsByProductCode(productCode: string): Promise<GenericResponse<string[]>> {
        let returnObject: GenericResponse<string[]> = null;
        try {
          returnObject = new GenericResponse<string[]>();
          let queryManager = getManager();
          let getTeamsByProductCodeResponse = await queryManager.query(
            TeamsScript.selectTeamsByProductCode,
            [productCode]
          );
          returnObject.setData = getTeamsByProductCodeResponse;
        } catch (error) {
          returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
         return returnObject
        }
        return returnObject;
    }

}