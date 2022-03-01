import { Injectable } from "@nestjs/common";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { ProductDemandModel } from "src/models/concrete/product-demand";
import { IProductDemandService } from "../abstract/IProductDemandService";
@Injectable()
export class ProductDemandService implements IProductDemandService {
  private productDemandModel: ProductDemandModel;

  async saveProductDemand(
    productDemand: ProductDemand
  ): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      this.productDemandModel = new ProductDemandModel();
      let saveProductDemandResponse =
        await this.productDemandModel.saveProductDemand(productDemand);
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

  async getProductDemand(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;

    try {
      returnObject = new GenericResponse<ProductDemand[]>();

      this.productDemandModel = new ProductDemandModel();
      let getProductDemandResponse =
        await this.productDemandModel.getProductDemand();

      if (!getProductDemandResponse.getSuccess) {
        returnObject = getProductDemandResponse;
        return returnObject;
      }

      returnObject.setData = getProductDemandResponse.setData;
    } catch (error) {
      returnObject.Result.push(error.message);
    }

    return returnObject;
  }
}
