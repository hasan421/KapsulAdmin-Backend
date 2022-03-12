import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { ProductDemandService } from "src/services/concrete/product-demand-service";
import { HttpError } from "src/core/error/http-error";
import { SystemErrorMessage } from "src/utilities/constants/error-message";

@Controller("product-demand")
export class ProductDemandController {
  constructor(private readonly appService: ProductDemandService) {}

  @Post("save-product-demand")
  async SaveProductDemand(
    @Body() productDemand: ProductDemand,
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number > = null;
    try {
      returnObject = new GenericResponse<number>();

      let saveProductDemandResponse = await this.appService.Create(
        productDemand
      );
      if (!saveProductDemandResponse.getSuccess) {
        returnObject.Result.push(...saveProductDemandResponse.Result); 
        returnObject.setSuccess = saveProductDemandResponse.getSuccess;
        response.statusCode = saveProductDemandResponse.Result[0].statusCode;
        return returnObject;
      }
      returnObject.setData = saveProductDemandResponse.getData;
    } 
    catch (error) {
     returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
     return returnObject;
    }

    return returnObject;
  }

  @Get('get-product-demand')
  async GetProductDemand(@Res({ passthrough: true }) response
  ): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject:GenericResponse<ProductDemand[]> = null
    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let getProductDemandResponse = await this.appService.GetAll();
      if(!getProductDemandResponse.getSuccess)
      {
        returnObject.Result.push(...getProductDemandResponse.Result);
        returnObject.setSuccess = getProductDemandResponse.getSuccess;
        response.statusCode = getProductDemandResponse.Result[0].statusCode;
        return returnObject;
      }
      returnObject.setData = getProductDemandResponse.getData;

    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;
  }
  
}
