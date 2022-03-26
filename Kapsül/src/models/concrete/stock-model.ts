import { HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { InternalServerErrorMessages, SystemErrorMessage } from "src/utilities/constants/error-message";
import { getManager } from "typeorm";
import { IStock } from "../abstract/IStockModel";
import { StockScript } from "../spscripts/stock-script";

export class Stock implements IStock {
  async GetAll(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;

    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let queryManager = getManager();
      let getStockResponse = await queryManager.query(StockScript.selectStock);
      returnObject.setData = getStockResponse;

      



    } catch (error) {
      console.log(error.message);
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
      return returnObject;
    }

    return returnObject;
  }
  async Create(entity: ProductDemand): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();

      let queryManager = getManager();

      let saveStockResponse = await queryManager.query(
        StockScript.insertStock,
        [
          entity.productId,
          entity.teamId,
          entity.stockQuantity,
          entity.quantityType,
        ]
      );

      returnObject.setData = saveStockResponse[0][""];
    } catch (error) {
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
      return returnObject;
    }

    return returnObject;
  }
  async Update(entity: ProductDemand): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let queryManager = getManager();
      let updateStockResponse = await queryManager.query(
        StockScript.updateStock,
        [
          entity.stockId,
          entity.productId,
          entity.teamId,
          entity.stockQuantity,
          entity.quantityType,
        ]
      );
      returnObject.setData = updateStockResponse;
    } catch (error) {
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
    return  returnObject;
    }
    return returnObject;
  }
  async Delete(entity: ProductDemand): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let queryManager = getManager();
      let deleteStockResponse = await queryManager.query(
        StockScript.deleteStock,
        [entity.stockId]
      );
      returnObject.setData = deleteStockResponse;
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }

    return returnObject;
  }
  
  async ControlStockByProductCode(
    entity: ProductDemand
  ): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      let queryManager = getManager();
      let controlStockByProductCodeResponse = await queryManager.query(
        StockScript.selectControlStockByProductCode,
        [entity.productCode]
      );
      controlStockByProductCodeResponse = controlStockByProductCodeResponse[0]
        ? controlStockByProductCodeResponse[0]['']
        : null;
      returnObject.setData = controlStockByProductCodeResponse;
    } catch (error) {
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
      return returnObject;
    }
    return returnObject;
  }
  async UpdateStockQuantity(
    entity: ProductDemand
  ): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      let queryManager = getManager();
      let updatStockQuantityResponse = await queryManager.query(
        StockScript.updateStockQuantity,
        [entity.stockId, entity.stockQuantity]
      );
      returnObject.setData = updatStockQuantityResponse;
      return returnObject;
    } catch (error) {
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
      return returnObject;
    }
  }
}
