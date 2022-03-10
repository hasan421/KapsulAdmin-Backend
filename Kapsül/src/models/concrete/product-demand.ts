import { IProductDemandModel } from "../abstract/IProductDemandModel";
import { GenericResponse } from "../../core/generic-response";
import { ProductDemand } from "../../entities/product-demand.entity";
import { getManager } from "typeorm";
import { ProductDemandScript } from "../spscripts/product-demand-script";
import { HttpError } from "src/core/error/http-error";
import { InternalServerErrorMessages } from "src/utilities/constants/error-message";

export class ProductDemandModel implements IProductDemandModel {
  async UpdateRecivedProductDemand(
    entity: ProductDemand
  ): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      let queryManager = getManager();
      let updatePurchedProductResponse = await queryManager.query(
        ProductDemandScript.updatePurchasedProduct,
        [entity.productId]
      );
      returnObject.setData = updatePurchedProductResponse;
    } catch (error) {
      console.log(error);
      returnObject.Result.push(new HttpError(InternalServerErrorMessages.BASIC_ERROR));
    }
    return returnObject;

  }
  async GetPurchasedProductDemand(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;
    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let queryManager = getManager();
      let getPurchedProductResponse = await queryManager.query(
        ProductDemandScript.selectPurchasedProduct
      );
      returnObject.setData = getPurchedProductResponse;
    } catch (error) {
      returnObject.Result.push(new HttpError(InternalServerErrorMessages.BASIC_ERROR));
    }
    return returnObject;

  }
  async SaveTeamsProductDemand(
    entity: ProductDemand
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let queryManager = getManager();
      let getProductDemandResponse = await queryManager.query(
        ProductDemandScript.insertTeamsProduct,
        [entity.teamId, entity.productId]
      );
      returnObject = getProductDemandResponse[0][''];
    } catch (error) {
      console.log(error);
      returnObject.Result.push(new HttpError(InternalServerErrorMessages.BASIC_ERROR));
    }
    return returnObject;

  }
  async GetAll(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;

    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let queryManager = getManager();
      let getProductDemandResponse = await queryManager.query(
        ProductDemandScript.selectProductDemandScript
      );
      console.log(getProductDemandResponse);
      returnObject.setData = getProductDemandResponse;
    } catch (error) {
      returnObject.Result.push(new HttpError(InternalServerErrorMessages.BASIC_ERROR));
    }
    return returnObject;
  }

  async Create(entity: ProductDemand): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();

      let queryManager = getManager();
      let saveProductDemandResponse = await queryManager.query(
        ProductDemandScript.insertProductDemandScript,
        [
          entity.productName,
          entity.productType,
          entity.productCode,
          entity.quantity,
          entity.quantityPrice,
          entity.totalPrice,
          entity.productLink,
          entity.productImage,
          entity.recived,
        ]
      );

      returnObject.setData = saveProductDemandResponse[0][''];
    } catch (error) {
      console.log(error.message);
      returnObject.Result.push(error);
    }
    return returnObject;
  }
  async Update(entity: ProductDemand): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      let queryManager = getManager();
      console.log(entity);
      let updateProductDemandResponse = await queryManager.query(
        ProductDemandScript.updateProductDemand,
        [
          entity.productId,
          entity.productName,
          entity.productType,
          entity.productCode,
          entity.quantity,
          entity.quantityPrice,
          entity.totalPrice,
          entity.productLink,
          entity.productImage
        ]
      );

      returnObject.setData = updateProductDemandResponse;
    } catch (error) {
      console.log(error.message);
      returnObject.Result.push(new HttpError(InternalServerErrorMessages.BASIC_ERROR));
    }
    return returnObject;

  }
  async Delete(entity: ProductDemand): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      let queryManager = getManager();
      let deletePurchedProductResponse = await queryManager.query(
        ProductDemandScript.deleteProductDemand,
        [entity.productId]
      );
      returnObject.setData = deletePurchedProductResponse;
      return returnObject;
    } catch (error) {
      returnObject.Result.push(new HttpError(InternalServerErrorMessages.BASIC_ERROR));
    }
  }
}
