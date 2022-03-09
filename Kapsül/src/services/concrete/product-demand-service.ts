import { Injectable } from "@nestjs/common";
import { HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/team-product-demand.entity";
import { ProductDemandModel } from "src/models/concrete/product-demand";
import { IProductDemandService } from "../abstract/IProductDemandService";
@Injectable()
export class ProductDemandService implements IProductDemandService {
  private productDemandModel: ProductDemandModel;

  async GetAll(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;

    try {
      returnObject = new GenericResponse<ProductDemand[]>();

      this.productDemandModel = new ProductDemandModel();
      let getProductDemandResponse = await this.productDemandModel.GetAll();

      if (!getProductDemandResponse.getSuccess) {
        returnObject = getProductDemandResponse;
        return returnObject;
      }

      returnObject.setData = getProductDemandResponse.setData;
    } catch (error) {
      returnObject.Result.push(new HttpError("İşlem sırasında hata oluştu."));
    }

    return returnObject;
  }

  async Create(entity: ProductDemand): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      this.productDemandModel = new ProductDemandModel();
      let saveProductDemandResponse = await this.productDemandModel.Create(
        entity
      );
      if (!saveProductDemandResponse.getSuccess) {
        returnObject = saveProductDemandResponse;
        return returnObject;
      }
      returnObject = saveProductDemandResponse;
    } catch (error) {
      returnObject.Result.push(new HttpError("İşlem sırasında hata oluştu"));
    }
    return returnObject;
  }

  async GetPurchasedProductDemand(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;
    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      this.productDemandModel = new ProductDemandModel();
      let getPurchasedProductDemandResponse =
        await this.productDemandModel.GetPurchasedProductDemand();

      if (!getPurchasedProductDemandResponse.getSuccess) {
        returnObject = getPurchasedProductDemandResponse;
        return returnObject;
      }

      returnObject = getPurchasedProductDemandResponse;
    } catch (error) {
      returnObject.Result.push(new HttpError("İşlem sırasında hata oluştu"));
    }

    return returnObject;
  }

  Update(entity: ProductDemand): Promise<GenericResponse<Number>> {
    throw new Error("Method not implemented.");
  }
  Delete(entity: ProductDemand): Promise<GenericResponse<Number>> {
    throw new Error("Method not implemented.");
  }
}
