import { Injectable } from "@nestjs/common";
import { HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Teams } from "src/entities/teams.entity";
import { TeamsModel } from "src/models/concrete/teams-model";
import { SystemErrorMessage } from "src/utilities/constants/error-message";
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
  ): Promise<GenericResponse<Teams[]>> {
    let returnObject: GenericResponse<Teams[]> = null;
    try {
      
      returnObject = new GenericResponse<Teams[]>();
      this.teamsemandModel = new TeamsModel();

      let responseGetTeamsNameByProductCode =
      await this.teamsemandModel.GetTeamsByProductCode(productCode);

      if (!responseGetTeamsNameByProductCode.getSuccess) {
        returnObject.Result.push(...responseGetTeamsNameByProductCode.Result) ;
        returnObject.setSuccess = responseGetTeamsNameByProductCode.getSuccess;
        returnObject.successMessage = responseGetTeamsNameByProductCode.successMessage;
        return returnObject;
      }

      returnObject.setData = responseGetTeamsNameByProductCode.getData;
      
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

      let responseGetTeamsName =
      await this.teamsemandModel.GetTeamsName();

      if (!responseGetTeamsName.getSuccess) {
        returnObject.Result.push(...responseGetTeamsName.Result);
        returnObject.setSuccess = responseGetTeamsName.getSuccess;
        returnObject.successMessage = responseGetTeamsName.successMessage;
        return returnObject;
      }

      returnObject.setData = responseGetTeamsName.getData;
    } catch (error) {
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
      return returnObject;
    }

    return returnObject;

  }
}
