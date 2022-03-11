import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { response } from "express";
import { HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Teams } from "src/entities/teams.entity";
import { TeamsService } from "src/services/concrete/teams-service";
import { InternalServerErrorMessages, SystemErrorMessage } from "src/utilities/constants/error-message";

@Controller("teams")
export class TeamsController {
  constructor(private readonly teamService: TeamsService) {}
  @Post("get-teams-name-by-productcode")
  async GetTeamsNameByProductCode(
    @Body() entity: ProductDemand,
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<string[]>> {
    let returnObject: GenericResponse<string[]> = null;
    try {
      returnObject = new GenericResponse<string[]>();
      let getTeamsNameByProductCodeResponse =
        await this.teamService.GetTeamsByProductCode(entity.productCode);
      if (!getTeamsNameByProductCodeResponse.getSuccess) {
        returnObject.Result.push(...getTeamsNameByProductCodeResponse.Result);
        returnObject.setSuccess = getTeamsNameByProductCodeResponse.getSuccess;
        response.statusCode = getTeamsNameByProductCodeResponse.Result[0]?.statusCode;
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
  @Get("get-teams-name")
  async GetTeamsName(
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<Teams[]>> {
    let returnObject: GenericResponse<Teams[]> = null;
    try {
      returnObject = new GenericResponse<Teams[]>();
      let getTeamsNameResponse = await this.teamService.GetTeamsName();
      if (!getTeamsNameResponse.getSuccess) {
        returnObject.Result.push(...getTeamsNameResponse.Result);
        response.statusCode = getTeamsNameResponse.Result[0].statusCode;
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
