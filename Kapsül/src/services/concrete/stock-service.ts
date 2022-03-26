import { Injectable } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { BadRequestError, HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Stock } from "src/models/concrete/stock-model";
import { TeamsModel } from "src/models/concrete/teams-model";
import { SystemErrorMessage } from "src/utilities/constants/error-message";
import { TransactionType } from "src/utilities/enums/transaction-type";
import { IStockService } from "../abstract/IStockService";
@Injectable()
export class StockService implements IStockService {
 
  private stockModel: Stock;
  private teamsModel: TeamsModel;


  async GetAll(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;

    try {
      returnObject = new GenericResponse<ProductDemand[]>();

      this.stockModel = new Stock();
      let getStockResponse = await this.stockModel.GetAll();
      console.log(getStockResponse);

      if (!getStockResponse.getSuccess) {
        returnObject = getStockResponse;
        return returnObject;
      }
      returnObject = getStockResponse;
    } catch (error) {
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
    }

    return returnObject;
  }

  @ApiResponse({ description:"fdfsd" })
  async Create(
    entity: ProductDemand
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      this.stockModel = new Stock();
      let responseSaveStock = await this.stockModel.Create(entity);
      if (!responseSaveStock.getSuccess) {
        returnObject.Result.push(...responseSaveStock.Result);
        returnObject.setSuccess = responseSaveStock.getSuccess;
        returnObject.successMessage = responseSaveStock.successMessage;
        return returnObject;
      }
    
    } catch (error) {
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
      return returnObject;
    }
 return returnObject;
  }


 async Update(entity: ProductDemand ): Promise<GenericResponse<number>> {
    let returnObject:GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      this.stockModel = new Stock();

      if(!entity.stockId)
      {
          console.log("if 1")
          returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
          return returnObject;
      }
     
        let responseUpdateStock = await this.stockModel.Update(entity);
      if(!responseUpdateStock.getSuccess)
      {
        console.log("if 2")
        returnObject.Result.push(...responseUpdateStock.Result);
        returnObject.setSuccess = responseUpdateStock.getSuccess;
        returnObject.successMessage = responseUpdateStock.successMessage;

        return returnObject;
      }
       
     
      
    } catch (error) {
      console.log(error);
      
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;
  }


 async Delete(entity: ProductDemand): Promise<GenericResponse<number>> {
    let returnObject:GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      this.stockModel = new Stock();
      let responseDeleteStock = await this.stockModel.Delete(entity);
      if(!responseDeleteStock.getSuccess)
      {
        returnObject.Result.push(...responseDeleteStock.Result);
        returnObject.setSuccess = responseDeleteStock.getSuccess;
        returnObject.successMessage = responseDeleteStock.successMessage;

      }
      
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
      
    }
    return returnObject;
  }
  
  async UpdateStockQuantity(entity: ProductDemand): Promise<GenericResponse<number>> {
    let returnObject:GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      this.stockModel = new Stock();
      let responseUpdateStock = await this.stockModel.UpdateStockQuantity(entity);
      if(!responseUpdateStock.getSuccess)
      {
        returnObject.Result.push(...responseUpdateStock.Result);
        returnObject.setSuccess = responseUpdateStock.getSuccess;
        returnObject.successMessage = responseUpdateStock.successMessage;
      }
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;
  }



}