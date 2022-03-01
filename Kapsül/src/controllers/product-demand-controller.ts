import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductDemandService } from "src/services/concrete/product-demand-service";

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

      let saveProductDemandResponse = await this.appService.saveProductDemand(
        productDemand
      );
      if (!saveProductDemandResponse.getSuccess) {
        returnObject = saveProductDemandResponse;
        return returnObject;
      }

      returnObject = saveProductDemandResponse;
    } catch (error) {
      returnObject.Result.push(error.message);
    }

    return returnObject;
  }

  @Get()
  getProductDemand(): Promise<GenericResponse<ProductDemand[]>> {
    throw new Error("Method not implemented.");
  }
}
