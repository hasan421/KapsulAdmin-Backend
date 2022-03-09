import { HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/team-product-demand.entity";
import { getManager } from "typeorm";
import { IStock } from "../abstract/IStock";
import { StockScript } from "../spscripts/stock-script";

export class Stock implements IStock {
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
      returnObject.Result.push(new HttpError("İşlem sırasında hata oluştu."));
    }
  }
  async GetAll(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;

    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let queryManager = getManager();
      let getStockResponse = await queryManager.query(StockScript.selectStock);

      returnObject.setData = getStockResponse;
    } catch (error) {
      returnObject.Result.push(error.message);
    }
    return returnObject;
  }
  async Create(entity: ProductDemand): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();

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
      returnObject.Result.push(error.message);
    }
    return returnObject;
  }
  async Update(entity: ProductDemand): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      let queryManager = getManager();
      let updateStockResponse = await queryManager.query(
        StockScript.updateStock,
        [
          entity.productId,
          entity.teamId,
          entity.stockQuantity,
          entity.quantityType,
        ]
      );
      returnObject.setData = updateStockResponse;
    } catch (error) {
      returnObject.Result.push(new HttpError("İşlem sırasında hata oluştu."));
    }
    return returnObject;
  }
  async Delete(entity: ProductDemand): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      let queryManager = getManager();
      let deleteStockResponse = await queryManager.query(
        StockScript.deleteStock,
        [entity.stockId]
      );
      returnObject.setData = deleteStockResponse;
    } catch (error) {
      returnObject.Result.push(new HttpError("İşlem sırasında hata oluştu."));
    }
    return returnObject;
  }
}
