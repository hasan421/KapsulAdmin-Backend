import { HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
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
   async GetTeamsByProductCode(productCode: string): Promise<GenericResponse<Teams[]>> {
        let returnObject: GenericResponse<Teams[]> = null;
        let teams = null;
        let teamsList = new Array<Teams>();
        try {
          returnObject = new GenericResponse<Teams[]>();
          let queryManager = getManager();
          let getTeamsByProductCodeResponse = await queryManager.query(
            TeamsScript.selectTeamsByProductCode,
            [productCode]
          );
          for(let i = 0; i < getTeamsByProductCodeResponse.length ;i++)
          {    teams = new Teams();
               teams.teamName = getTeamsByProductCodeResponse[i].TeamName;
               teams.quantity = getTeamsByProductCodeResponse[i].Quantity;
               teams.quantityPrice = getTeamsByProductCodeResponse[i].QuantityPrice;
               teams.totalPrice = getTeamsByProductCodeResponse[i].TotalPrice
               console.log(teams);
               teamsList.push(teams);
          }
          returnObject.setData = teamsList;
        } catch (error) {
          console.log(error.message);
          returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
         return returnObject
        }
        return returnObject;
    }

}