import { Injectable } from "@nestjs/common";
import { HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { Teams } from "src/entities/teams.entity";
import { TeamsModel } from "src/models/concrete/teams-model";
import { InternalServerErrorMessages, SystemErrorMessage } from "src/utilities/constants/error-message";
import { ITeamsService } from "../abstract/ITeamsService";
@Injectable()
export class TeamsService implements ITeamsService {
  private teamsemandModel: TeamsModel;

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
  async GetTeamsByProductCode(
    productCode: string
  ): Promise<GenericResponse<string[]>> {
    let returnObject: GenericResponse<string[]> = null;
    try {
      returnObject = new GenericResponse<string[]>();
      this.teamsemandModel = new TeamsModel();
      let getTeamsNameByProductCodeResponse =
        await this.teamsemandModel.GetTeamsByProductCode(productCode);
      if (!getTeamsNameByProductCodeResponse.getSuccess) {
        returnObject.Result.push(...getTeamsNameByProductCodeResponse.Result) ;
        returnObject.setSuccess = getTeamsNameByProductCodeResponse.getSuccess;
        return returnObject;
      }
      returnObject.setData = getTeamsNameByProductCodeResponse.getData;
      
    } catch (error) {
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
      return returnObject;
    }
    return returnObject;
  }
 async GetTeamsName(): Promise<GenericResponse<Teams[]>> {
    let returnObject: GenericResponse<Teams[]> = null;
    try {
        returnObject = new GenericResponse<Teams[]>();
      this.teamsemandModel = new TeamsModel();
      let getTeamsNameResponse =
        await this.teamsemandModel.GetTeamsName();
      if (!getTeamsNameResponse.getSuccess) {
        returnObject.Result.push(...getTeamsNameResponse.Result);
        returnObject.setSuccess = getTeamsNameResponse.getSuccess;
        return returnObject;
      }
      returnObject.setData = getTeamsNameResponse.getData;
    } catch (error) {
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
      return returnObject;
    }

    return returnObject;

  }
}
