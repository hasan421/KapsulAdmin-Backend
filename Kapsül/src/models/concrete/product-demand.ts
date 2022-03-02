import { IProductDemandModel } from "../abstract/IProductDemandModel";
import { GenericResponse } from "../../core/generic-response";
import { ProductDemand } from "../../entities/product-demand.entity";
import { getManager } from "typeorm";
import { ProductDemandScript } from "../spscripts/product-demand-script";

export class ProductDemandModel implements IProductDemandModel {
  async getProductDemand(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;

    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let queryManager = getManager();
      let getProductDemandResponse = await queryManager.query(
        ProductDemandScript.selectProductDemandScript
      );

      returnObject.setData = getProductDemandResponse;
    } catch (error) {
      returnObject.Result.push(error.message);
    }

    return returnObject;
  }

  async saveProductDemand(
    productDemand: ProductDemand
  ): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();

      let queryManager = getManager();

      let saveProductDemandResponse = await queryManager.query(
        ProductDemandScript.insertProductDemandScript,
        [
          productDemand.ProductName,
          productDemand.ProductType,
          productDemand.ProductCode,
          productDemand.Quantity,
          productDemand.QuantityPrice,
          productDemand.TotalPrice,
          productDemand.ProductLink,
          productDemand.ProductImage,
          productDemand.Recived,
        ]
      );

      returnObject.setData = saveProductDemandResponse[0][""];
    } catch (error) {
      returnObject.Result.push(error.message);
    }
    return returnObject;
  }
}
