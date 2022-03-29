import { Injectable } from "@nestjs/common";
import { BadRequestError, HttpError } from "src/core/error/http-error";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { CalculaterTotalProductQuantityPrice } from "src/helper/product-quantity-calculater";
import { ProductDemandModel } from "src/models/concrete/product-demand-model";
import { TeamsModel } from "src/models/concrete/teams-model";
import { SystemErrorMessage } from "src/utilities/constants/error-message";
import { TransactionType } from "src/utilities/enums/transaction-type";
import { IProductDemandService } from "../abstract/IProductDemandService";
@Injectable()
export class ProductDemandService implements IProductDemandService {
 
  private productDemandModel: ProductDemandModel;
  private teamsModel: TeamsModel;


  async GetAll(entity:ProductDemand | null): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;
    let productDemand:ProductDemand = null;
    let productDemandList = Array<ProductDemand>();
    try {
      returnObject = new GenericResponse<ProductDemand[]>();

      this.productDemandModel = new ProductDemandModel();
      let responseGetProductDemand = await this.productDemandModel.GetAll(entity);

      if (!responseGetProductDemand.getSuccess) {
        returnObject.Result.push(...responseGetProductDemand.Result);
        returnObject.setSuccess = responseGetProductDemand.setSuccess;
        returnObject.successMessage = responseGetProductDemand.successMessage;
        return returnObject;
      }
      if(!responseGetProductDemand && !responseGetProductDemand.getData)
      {
        returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError))
      }
      for(let i = 0 ; i < responseGetProductDemand.getData.length; i++)
      { 
        productDemand = new ProductDemand();
        productDemand.productCode = responseGetProductDemand.getData[i].productCode;
        productDemand.recived = entity.recived;
        let responseProductQuantity = await this.productDemandModel.
                                      GetProductTotalQuantityAndTotalPrice(productDemand); 
                                     
        if(!responseProductQuantity.getSuccess) 
        { 
          returnObject.Result.push(...responseProductQuantity.Result); 
          returnObject.setSuccess = responseProductQuantity.getSuccess; 
          returnObject.successMessage = responseProductQuantity.successMessage;
        } 
        
        if(!responseProductQuantity && !responseProductQuantity.getData) 
        { 
          returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError)) 

        }
        this.teamsModel = new TeamsModel();
        let responseGetTeams = await this.teamsModel.GetTeamsByProductCode(productDemand);
        if(!responseGetTeams.getSuccess)
        {
          returnObject.Result.push(...responseGetTeams.Result);
          returnObject.setSuccess = responseGetTeams.setSuccess;
          returnObject.successMessage = responseGetTeams.successMessage;

          return returnObject;
        }
        productDemand = new ProductDemand();
        productDemand.productId = responseGetProductDemand.getData[i]?.productId;
        productDemand.productName = responseGetProductDemand.getData[i]?.productName;
        productDemand.productCode = responseGetProductDemand.getData[i]?.productCode;
        productDemand.productLink = responseGetProductDemand.getData[i]?.productLink;
        productDemand.quantity = responseProductQuantity.getData?.quantity;
        productDemand.quantityPrice = responseProductQuantity.getData?.quantityPrice;
        productDemand.totalPrice = responseProductQuantity.getData?.totalPrice;
        productDemand.teamNameList = [];
        productDemand.teamNameList.push(...responseGetTeams.getData)
        productDemandList.push(productDemand);
      }
      returnObject.setData = productDemandList;
    } catch (error) {
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
      let responseControlProductDemand = await this.productDemandModel.ControlProductDemand(entity);
      if(!responseControlProductDemand.getSuccess)
      {
        returnObject.Result.push(...responseControlProductDemand.Result);
        returnObject.setSuccess = responseControlProductDemand.getSuccess;
        returnObject.successMessage = responseControlProductDemand.successMessage;
        return returnObject;

      }
      if(responseControlProductDemand.getData == 1)
      {
        returnObject.Result.push(new BadRequestError("SameContentError"));
        return returnObject;
      }
      let responseSaveProductDemand = await this.productDemandModel.Create(entity);
      if (!responseSaveProductDemand.getSuccess) {
        returnObject.Result.push(...responseSaveProductDemand.Result);
        returnObject.setSuccess = responseSaveProductDemand.getSuccess;
        returnObject.successMessage = responseSaveProductDemand.successMessage;
        return returnObject;
      }
      for (let i: number = 0; i < entity.teamNameList.length; i++) {
      
        let saveTeamProductDemand = new ProductDemand();
        saveTeamProductDemand.productId = responseSaveProductDemand.getData;
        saveTeamProductDemand.teamId = entity.teamNameList[i].teamId;
        saveTeamProductDemand.quantity = entity.teamNameList[i].quantity;
        saveTeamProductDemand.quantityPrice = entity.quantityPrice;
        saveTeamProductDemand.totalPrice = CalculaterTotalProductQuantityPrice(entity.teamNameList[i].quantity,
                                                                                entity.quantityPrice);
        saveTeamProductDemand.recived = 0 ;
        let responseSaveTeamProductDemand = 
          await this.productDemandModel.SaveTeamsProductDemand(
            saveTeamProductDemand
          );
        if (!responseSaveTeamProductDemand.getSuccess) {
          returnObject.Result.push(...responseSaveTeamProductDemand.Result);
          returnObject.setSuccess = responseSaveTeamProductDemand.getSuccess;
          returnObject.successMessage = responseSaveTeamProductDemand.successMessage;
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
 async Update(entity: ProductDemand ): Promise<GenericResponse<number>> {
    let returnObject:GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      this.productDemandModel = new ProductDemandModel();

      if(!(entity.productId))
      {
          returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
          return returnObject;
      }
     
      let responseUpdateProductDemand = await this.productDemandModel.Update(entity);
      if(!responseUpdateProductDemand.getSuccess)
      {
        returnObject.Result.push(...responseUpdateProductDemand.Result);
        returnObject.setSuccess = responseUpdateProductDemand.getSuccess;
        returnObject.successMessage = responseUpdateProductDemand.successMessage;
        return returnObject;
      }
       
      if(!entity.teamNameList)
      {
        returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
        return returnObject;
      }
      for(let i = 0 ; i < entity.teamNameList.length; i++)
      { let productDemand =  new ProductDemand();
         if(entity.teamNameList[i]?.transactionType == TransactionType.TeamCreate)
         {
           productDemand.productId = entity.productId;
           productDemand.teamId = entity.teamNameList[i]?.teamId;
           productDemand.quantity = entity.teamNameList[i]?.quantity;
           productDemand.quantityPrice = entity.quantityPrice;
           productDemand.totalPrice = entity.totalPrice;
           productDemand.recived = 0;
           let responseSaveTeamProductDemand = await this.productDemandModel.
                                                     SaveTeamsProductDemand(productDemand);
           if(!responseSaveTeamProductDemand.getSuccess)
           {
             returnObject.Result.push(...responseSaveTeamProductDemand.Result);
             returnObject.setSuccess = responseSaveTeamProductDemand.getSuccess;
             returnObject.successMessage = responseSaveTeamProductDemand.successMessage;
             return returnObject;
           }
         }
         else if (entity.teamNameList[i]?.transactionType == TransactionType.TeamUpdate)
         {
          productDemand.teamProductDemandId =  entity.teamNameList[i]?.teamProductDemandId;
          productDemand.productId = entity.productId;
          productDemand.teamId = entity.teamNameList[i]?.teamId;
          productDemand.quantity = entity.teamNameList[i]?.quantity;
          productDemand.quantityPrice = entity.quantityPrice;
          productDemand.totalPrice = entity.totalPrice;
          let responseUpdateTeamProductDemand = await this.productDemandModel.
                                                      UpdateTeamProductDemand(productDemand);
          if(!responseUpdateTeamProductDemand.getSuccess)
          {
            returnObject.Result.push(...responseUpdateTeamProductDemand.Result);
            returnObject.setSuccess = responseUpdateTeamProductDemand.getSuccess;
            returnObject.successMessage = responseUpdateProductDemand.successMessage;
            return returnObject;
          }
         }
         else if(entity.teamNameList[i]?.transactionType == TransactionType.TeamDelete)
         {
          productDemand.teamProductDemandId =  entity.teamNameList[i]?.teamProductDemandId;
          productDemand.transactionType = entity.teamNameList[i]?.transactionType;
          let responseDeleteTeamProduct = await this.productDemandModel.Delete(productDemand);
          if(!responseDeleteTeamProduct.getSuccess)
          {
            returnObject.Result.push(...responseDeleteTeamProduct.Result);
            returnObject.setSuccess = responseDeleteTeamProduct.getSuccess;
            returnObject.successMessage = responseDeleteTeamProduct.successMessage;
            return returnObject;
          }
         }
         else
         {
           returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
           return returnObject;
         }
      }
      
    } catch (error) {
      
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;
  }
 async Delete(entity: ProductDemand): Promise<GenericResponse<number>> {
    let returnObject:GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      this.productDemandModel = new ProductDemandModel();
      let responseDeleteProduct = await this.productDemandModel.Delete(entity);
      if(!responseDeleteProduct.getSuccess)
      {
        returnObject.Result.push(...responseDeleteProduct.Result);
        returnObject.setSuccess = responseDeleteProduct.getSuccess;
        returnObject.successMessage = responseDeleteProduct.successMessage;
        return returnObject;

      }
      
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
      
    }
    return returnObject;
  }
  
  async UpdateRecivedProductDemand(entity: ProductDemand[]): Promise<GenericResponse<number>> {
    let returnObject:GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      this.productDemandModel = new ProductDemandModel();
      if(!entity && entity.length <= 0)
      {
        returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
        return returnObject;
      }
      for(let i  = 0 ; i < entity.length; i++)
      {
        let responseUpdateRecivedProductDemand = await 
        this.productDemandModel.UpdateRecivedProductDemand(entity[i]);
        if(!responseUpdateRecivedProductDemand.getSuccess)
        {
          returnObject.Result.push(...responseUpdateRecivedProductDemand.Result);
          returnObject.setSuccess = responseUpdateRecivedProductDemand.getSuccess;
          returnObject.successMessage = responseUpdateRecivedProductDemand.successMessage;
          return returnObject;
        }

      }
     
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;
  }
}