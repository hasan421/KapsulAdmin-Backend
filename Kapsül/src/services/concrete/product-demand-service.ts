import { Injectable } from "@nestjs/common";
import { HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { ProductDemandModel } from "src/models/concrete/product-demand-model";
import { InternalServerErrorMessages } from "src/utilities/constants/error-message";
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
      returnObject = getProductDemandResponse;
    } catch (error) {
      returnObject.Result.push(
        new HttpError(InternalServerErrorMessages.BASIC_ERROR)
      );
    }

    return returnObject;
  }

  async Create(
    entity: ProductDemand[]
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      this.productDemandModel = new ProductDemandModel();
      const asyncResponse = await Promise.all(
        entity.map(async (item: ProductDemand, index: number) => {
          let saveProductDemandResponse = await this.productDemandModel.Create(
            item
          );
          if (!saveProductDemandResponse.getSuccess) {
            returnObject = saveProductDemandResponse;
            return returnObject;
          }
          return saveProductDemandResponse;
        })
      );
      if (!asyncResponse) {
        returnObject.Result.push(new HttpError("İşlem sırasında hata oluştu"));
        return returnObject;
      }
      for (let i: number = 0; i < asyncResponse.length; i++) {
        let saveTeamProductDemand = new ProductDemand();
        saveTeamProductDemand.productId = asyncResponse[i].getData;
        console.log(saveTeamProductDemand.productId);
        saveTeamProductDemand.teamId = entity[i].teamId;
        let saveTeamProductDemandResponse =
          await this.productDemandModel.SaveTeamsProductDemand(
            saveTeamProductDemand
          );
        if (!saveTeamProductDemandResponse.getSuccess) {
          returnObject.Result = saveTeamProductDemandResponse.Result;
          return returnObject;
        }
      }
    } catch (error) {
      returnObject.Result.push(
        new HttpError(InternalServerErrorMessages.BASIC_ERROR)
      );
    }
 return returnObject
  }
  Update(entity: ProductDemand): Promise<GenericResponse<Number>> {
    throw new Error("Method not implemented.");
  }
  Delete(entity: ProductDemand): Promise<GenericResponse<Number>> {
    throw new Error("Method not implemented.");
  }
}
