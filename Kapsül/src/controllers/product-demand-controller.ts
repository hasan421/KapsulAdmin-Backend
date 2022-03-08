import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductDemandService } from "src/services/concrete/product-demand-service";
import { HttpError } from "src/core/error/http-error";
import { InternalServerErrorMessages } from "src/utilities/constants/error-message";

@Controller("product-demand")
export class ProductDemandController {
  constructor(private readonly appService: ProductDemandService) {}

  @Post("save-product-demand")
  async saveProductDemand(
    @Body() productDemand: ProductDemand
  ): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();

      let saveProductDemandResponse = await this.appService.Create(
        productDemand
      );
      if (!saveProductDemandResponse.getSuccess) {
        returnObject = saveProductDemandResponse;
        return returnObject;
      }

      returnObject = saveProductDemandResponse;
    } catch (error) {
     // returnObject.Result.push(new HttpError(InternalServerErrorMessages.BASIC_ERROR));
    }

    return returnObject;
  }

  @Get('get-product-demand')
  async getProductDemand(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject:GenericResponse<ProductDemand[]> = null
    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let getProductDemandResponse = await this.appService.GetAll();
      if(!getProductDemandResponse.getSuccess)
      {
        returnObject = getProductDemandResponse; 
        return returnObject;
      }
      returnObject = getProductDemandResponse;

    } catch (error) {
      returnObject.Result.push(new HttpError('İşlem sırasında hata oluştu.'))
      
    }
    return returnObject;
  }
}
