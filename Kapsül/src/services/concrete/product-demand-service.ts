import { HostParam, Injectable } from "@nestjs/common";
import { HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { CalculaterTotalPrice, CalculaterTotalProductQuantity, CalculaterTotalProductQuantityPrice } from "src/helper/product-quantity-calculater";
import { ProductDemandModel } from "src/models/concrete/product-demand-model";
import { TeamsModel } from "src/models/concrete/teams-model";
import { SystemErrorMessage } from "src/utilities/constants/error-message";
import { IProductDemandService } from "../abstract/IProductDemandService";
@Injectable()
export class ProductDemandService implements IProductDemandService {
 
  private productDemandModel: ProductDemandModel;
  private teamsModel: TeamsModel;


  async GetAll(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;
    let productDemand = new ProductDemand();
     let productDemandList = Array<ProductDemand>();
    try {
      returnObject = new GenericResponse<ProductDemand[]>();

      this.productDemandModel = new ProductDemandModel();
      let getProductDemandResponse = await this.productDemandModel.GetAll();

      if (!getProductDemandResponse.getSuccess) {
        returnObject.Result.push(...getProductDemandResponse.Result);
        returnObject.setSuccess = getProductDemandResponse.setSuccess;
        return returnObject;
      }
      if(!getProductDemandResponse && !getProductDemandResponse.getData)
      {
        returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError))
      }
      for(let i = 0 ; i < getProductDemandResponse.getData.length; i++)
      {      this.teamsModel = new TeamsModel();

        let getTeams = await this.teamsModel.GetTeamsByProductCode(getProductDemandResponse.getData[i].productCode);
        if(!getTeams.getSuccess)
        {
          returnObject.Result.push(...getProductDemandResponse.Result);
          returnObject.setSuccess = getProductDemandResponse.setSuccess;
          return returnObject;
        }
        productDemand.productName = getProductDemandResponse.getData[i]?.productName;
        productDemand.productCode = getProductDemandResponse.getData[i]?.productCode;
        productDemand.productLink = getProductDemandResponse.getData[i]?.productLink;
        productDemand.quantity = CalculaterTotalProductQuantity(getTeams.getData);
        productDemand.quantityPrice = getTeams.getData[0].quantityPrice;
        productDemand.totalPrice = CalculaterTotalPrice(getTeams.getData);
        productDemand.teamNameList = [];
        productDemand.teamNameList.push(...getTeams.getData)
        productDemandList.push(productDemand);
      }
      returnObject.setData = productDemandList;
    } catch (error) {
      console.log(error.message);
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
      return returnObject;
    }

    return returnObject;
  }

  async Create(
    entity: ProductDemand
  ): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      this.productDemandModel = new ProductDemandModel();
      let saveProductDemandResponse = await this.productDemandModel.Create(entity);
      if (!saveProductDemandResponse.getSuccess) {
        returnObject.Result.push(...saveProductDemandResponse.Result);
        returnObject.setSuccess = saveProductDemandResponse.getSuccess;
        return returnObject;
      }
      for (let i: number = 0; i < entity.teamNameList.length; i++) {
      
        let saveTeamProductDemand = new ProductDemand();
        saveTeamProductDemand.productId = saveProductDemandResponse.getData;
        saveTeamProductDemand.teamId = entity.teamNameList[i].teamId;
        saveTeamProductDemand.quantity = entity.teamNameList[i].quantity;
        saveTeamProductDemand.quantityPrice = entity.quantityPrice;
        saveTeamProductDemand.totalPrice =  CalculaterTotalProductQuantityPrice(entity.teamNameList[i].quantity,entity.quantityPrice);
        saveTeamProductDemand.recived = 0 ;
        let saveTeamProductDemandResponse = 
          await this.productDemandModel.SaveTeamsProductDemand(
            saveTeamProductDemand
          );
        if (!saveTeamProductDemandResponse.getSuccess) {
          returnObject.Result.push(...saveTeamProductDemandResponse.Result);
          returnObject.setSuccess = saveTeamProductDemandResponse.getSuccess;
          return returnObject;
        }
      }
    } catch (error) {
      returnObject.Result.push(
        new HttpError(SystemErrorMessage.ProcessError)
      );
      return returnObject;
    }
 return returnObject;
  }
  Update(entity: ProductDemand): Promise<GenericResponse<Number>> {
    throw new Error("Method not implemented.");
  }
  Delete(entity: ProductDemand): Promise<GenericResponse<Number>> {
    throw new Error("Method not implemented.");
  }
  
  GetPurchasedProductDemand(): Promise<GenericResponse<ProductDemand[]>> {
    throw new Error("Method not implemented.");
  }
  UpdateRecivedProductDemand(entity: ProductDemand): Promise<GenericResponse<Number>> {
    throw new Error("Method not implemented.");
  }
}

