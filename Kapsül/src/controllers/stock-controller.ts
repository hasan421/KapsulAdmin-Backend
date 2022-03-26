import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { StockService } from "src/services/concrete/stock-service";
import { HttpError } from "src/core/error/http-error";
import { SystemErrorMessage } from "src/utilities/constants/error-message";
import { ApiProperty, ApiResponse } from "@nestjs/swagger";

@Controller("stock")
export class StockController {
  constructor(private readonly appService: StockService) {}

  @Post("save-stock")
  async SaveStockController(
    @Body() productDemand: ProductDemand,
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();

      let saveStockResponse = await this.appService.Create(
        productDemand
      );
      if (!saveStockResponse.getSuccess) {
        returnObject.Result.push(...saveStockResponse.Result);
        returnObject.setSuccess = saveStockResponse.getSuccess;
        response.statusCode = saveStockResponse.Result[0]?.statusCode;
        returnObject.successMessage = saveStockResponse.successMessage;
        return returnObject;
      }
      returnObject.setData = saveStockResponse.getData;
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }

    return returnObject;
  }

  @Get("get-stock")
  async GetStockController(
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;
    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let getStockResponse = await this.appService.GetAll();
      if (!getStockResponse.getSuccess) {
        returnObject.Result.push(...getStockResponse.Result);
        returnObject.setSuccess = getStockResponse.getSuccess;
        response.statusCode = getStockResponse.Result[0].statusCode;
        return returnObject;
      }
      returnObject.setData = getStockResponse.getData;
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;
  }
  @Post("delete-stock")
  async DeleteStockController(
    @Body() productDemand: ProductDemand,
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let responseDeleteStock = await this.appService.Delete(productDemand);
      if (!responseDeleteStock.getSuccess) {
        returnObject.Result.push(...responseDeleteStock.Result);
        returnObject.setSuccess = responseDeleteStock.getSuccess;
      }
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
    }
    return returnObject;
  }
  
  
  @Post("update-stock")
  async UpdateStockController(
    @Body() productDemand: ProductDemand = null,
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let responseUpdateStock = await this.appService.Update(
        productDemand
      );
      if (!responseUpdateStock.getSuccess) {
        returnObject.Result.push(...responseUpdateStock.Result);
        returnObject.setSuccess = responseUpdateStock.getSuccess;
        returnObject.successMessage = responseUpdateStock.successMessage;
      }
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
    }
    return returnObject;
  }

  @Post("update-stock-quantity")
  async UpdateStockQuantityController(
    @Body() productDemand: ProductDemand = null,
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let responseUpdateStock = await this.appService.UpdateStockQuantity(
        productDemand
      );
      if (!responseUpdateStock.getSuccess) {
        returnObject.Result.push(...responseUpdateStock.Result);
        returnObject.setSuccess = responseUpdateStock.getSuccess;
        returnObject.successMessage = responseUpdateStock.successMessage;
      }
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
    }
    return returnObject;
  }


}
