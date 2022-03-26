import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { ProductDemandService } from "src/services/concrete/product-demand-service";
import { HttpError } from "src/core/error/http-error";
import { SystemErrorMessage } from "src/utilities/constants/error-message";

@Controller("product-demand")
export class ProductDemandController {
  constructor(private readonly appService: ProductDemandService) {}

  @Post("save-product-demand")
  async SaveProductDemandController(
    @Body() productDemand: ProductDemand,
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();

      let saveProductDemandResponse = await this.appService.Create(
        productDemand
      );
      if (!saveProductDemandResponse.getSuccess) {
        returnObject.Result.push(...saveProductDemandResponse.Result);
        returnObject.setSuccess = saveProductDemandResponse.getSuccess;
        response.statusCode = saveProductDemandResponse.Result[0]?.statusCode;
        returnObject.successMessage = saveProductDemandResponse.successMessage;
        return returnObject;
      }
      returnObject.setData = saveProductDemandResponse.getData;
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }

    return returnObject;
  }

  @Get("get-product-demand")
  async GetProductDemandController(
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;
    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let getProductDemandResponse = await this.appService.GetAll();
      if (!getProductDemandResponse.getSuccess) {
        returnObject.Result.push(...getProductDemandResponse.Result);
        returnObject.setSuccess = getProductDemandResponse.getSuccess;
        response.statusCode = getProductDemandResponse.Result[0].statusCode;
        return returnObject;
      }
      returnObject.setData = getProductDemandResponse.getData;
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;
  }
  @Post("delete-product-demand")
  async DeleteProductDemandController(
    @Body() productDemand: ProductDemand,
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let responseDeleteProduct = await this.appService.Delete(productDemand);
      if (!responseDeleteProduct.getSuccess) {
        returnObject.Result.push(...responseDeleteProduct.Result);
        returnObject.setSuccess = responseDeleteProduct.getSuccess;
      }
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
    }
    return returnObject;
  }
  @Post("update-product-demand")
  async UpdateTeamProductDemandController(
    @Body() productDemand: ProductDemand = null,
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let responseUpdateTeamProduct = await this.appService.Update(
        productDemand
      );
      if (!responseUpdateTeamProduct.getSuccess) {
        returnObject.Result.push(...responseUpdateTeamProduct.Result);
        returnObject.setSuccess = responseUpdateTeamProduct.getSuccess;
        returnObject.successMessage = responseUpdateTeamProduct.successMessage;
      }
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
    }
    return returnObject;
  }
  @Get("get-purchased-product-demand")
  async GetPurchasedProductDemandController(
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<ProductDemand[]>> 
  {
    let returnObject: GenericResponse<ProductDemand[]> = null;
    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let responseGetPurchasedProductDemand = await this.appService.GetPurchasedProductDemand();
      if (!responseGetPurchasedProductDemand.getSuccess) {
        returnObject.Result.push(...responseGetPurchasedProductDemand.Result);
        returnObject.setSuccess = responseGetPurchasedProductDemand.getSuccess;
        returnObject.successMessage = responseGetPurchasedProductDemand.successMessage;
      }
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
    }
    return returnObject;

  }
  @Post("update-recived-product-demand")
  async UpdateRecivedProductDemandController(
    @Body() productDemand: ProductDemand = null,
    @Res({ passthrough: true }) response
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let responseUpdateRecivedroduct = await this.appService.UpdateRecivedProductDemand(
        productDemand
      );
      if (!responseUpdateRecivedroduct.getSuccess) {
        returnObject.Result.push(...responseUpdateRecivedroduct.Result);
        returnObject.setSuccess = responseUpdateRecivedroduct.getSuccess;
        returnObject.successMessage = responseUpdateRecivedroduct.successMessage;
      }
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
    }
    return returnObject;
  }
}
