import { IProductDemandModel } from "../abstract/IProductDemandModel";
import { GenericResponse } from "../../core/generic-response";
import { ProductDemand } from "../../entities/product-demand.entity";
import { getManager } from "typeorm";
import { ProductDemandScript } from "../spscripts/product-demand-script";
import { HttpError } from "src/core/error/http-error";
import { SystemErrorMessage } from "src/utilities/constants/error-message";
import { from, groupBy } from "rxjs";

export class ProductDemandModel implements IProductDemandModel {
 
  
  async GetAll(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;
    let productDemand =  null;
    let productDemandList = new Array<ProductDemand>();

    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let queryManager = getManager();
      let responseGetProductDemand = await queryManager.query(
        ProductDemandScript.selectProductDemandScript
      );
      if(responseGetProductDemand)
      {
        for(let i = 0; i < responseGetProductDemand.length ;i++)
        {   productDemand = new ProductDemandModel();
             productDemand.productName = responseGetProductDemand[i].ProductName;
             productDemand.productCode = responseGetProductDemand[i].ProductCode;
             productDemand.productLink = responseGetProductDemand[i].ProductLink;
             productDemand.teamId = responseGetProductDemand[i].TeamId;
             productDemand.teamName = responseGetProductDemand[i].TeamName;
             productDemand.productId = responseGetProductDemand[i].ProductId;
             productDemand.quantityPrice = responseGetProductDemand[i].QuantitiyPrice;
             productDemandList.push(productDemand);
  
        }
      }
  
      returnObject.setData = productDemandList;

    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;
  }

  async Create(entity: ProductDemand): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();

      let queryManager = getManager();
      let responseSaveProductDemand = await queryManager.query(
        ProductDemandScript.insertProductDemandScript,
        [
          entity.productName,
          entity.productType,
          entity.productCode,
          entity.productLink,
          entity.productImage,
        ]
      );

      returnObject.setData = responseSaveProductDemand[0][''];
    } catch (error) {
      console.log(error.message);
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;
  }

  async Update(entity: ProductDemand): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      let queryManager = getManager();
      let responseUpdateProductDemand = await queryManager.query(
        ProductDemandScript.updateProductDemand,
        [
          entity.productId,
          entity.productName,
          entity.productType,
          entity.productCode,
          entity.productLink,
          entity.productImage
        ]
      );
      returnObject.setData = responseUpdateProductDemand;
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;

  }

  async Delete(entity: ProductDemand): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      let queryManager = getManager();
      let responseDeletePurchedProduct = await queryManager.query(
        ProductDemandScript.deleteProductDemand,
        [
          entity.teamProductDemandId,
          entity.productId,
          entity.transactionType 
        ]
      );
      returnObject.setData = responseDeletePurchedProduct;
      return returnObject;
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
  }

  async UpdateRecivedProductDemand(
    entity: ProductDemand
  ): Promise<GenericResponse<Number>> {
    let returnObject: GenericResponse<Number> = null;
    try {
      returnObject = new GenericResponse<Number>();
      let queryManager = getManager();
      let responseUpdatePurchedProduct = await queryManager.query(
        ProductDemandScript.updatePurchasedProduct,
        [entity.productId]
      );
      returnObject.setData = responseUpdatePurchedProduct;
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }

    return returnObject;

  }

  async GetPurchasedProductDemand(): Promise<GenericResponse<ProductDemand[]>> {
    let returnObject: GenericResponse<ProductDemand[]> = null;
    let productDemand =  null;
    let productDemandList = new Array<ProductDemand>();
    try {
      returnObject = new GenericResponse<ProductDemand[]>();
      let queryManager = getManager();
      let responseGetPurchasedProductDemand = await queryManager.query(
        ProductDemandScript.selectPurchasedProduct
      );
      if(responseGetPurchasedProductDemand)
      {
        for(let i = 0; i < responseGetPurchasedProductDemand.length; i++)
      {
        productDemand.productName = responseGetPurchasedProductDemand[i].ProductName;
        productDemand.productCode = responseGetPurchasedProductDemand[i].ProductCode;
        productDemand.productLink = responseGetPurchasedProductDemand[i].ProductLink;
        productDemand.teamId = responseGetPurchasedProductDemand[i].TeamId;
        productDemand.teamName = responseGetPurchasedProductDemand[i].TeamName;
        productDemand.productId = responseGetPurchasedProductDemand[i].ProductId;
        productDemand.quantityPrice = responseGetPurchasedProductDemand[i].QuantitiyPrice;
        productDemandList.push(productDemand);

      }
      }
      
      returnObject.setData = responseGetPurchasedProductDemand;
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
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
      let responseSaveTeamProductDemand = await queryManager.query(
        ProductDemandScript.insertTeamsProduct,
        [
          entity.teamId, 
          entity.productId,
          entity.quantity,
          entity.quantityPrice,
          entity.totalPrice,
          entity.recived
  
        ]
      );
      returnObject.setData = responseSaveTeamProductDemand[0][''];
    } catch (error) {
      console.log(error.message);
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;

  }

 async GetProductTotalQuantityAndTotalPrice(entity: ProductDemand): Promise<GenericResponse<ProductDemand>> {
    let returnObject: GenericResponse<ProductDemand> = null;
    let productDemand:ProductDemand = null;
    try {
      returnObject = new GenericResponse<ProductDemand>();
      let queryManager = getManager();
      let responseGetProductTotalQunatitity = await queryManager.query(
        ProductDemandScript.selectProductQuantity,
        [entity.productCode]
      );
      if(!responseGetProductTotalQunatitity)
      {
        returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      }
        productDemand = new ProductDemand();
        productDemand.quantity = responseGetProductTotalQunatitity[0]?.Quantity;
        productDemand.quantityPrice = responseGetProductTotalQunatitity[0]?.QuantityPrice;
        productDemand.totalPrice = responseGetProductTotalQunatitity[0]?.TotalPrice;

        returnObject.setData = productDemand;

    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }

    return returnObject;
  }

  async ControlProductDemand(entity: ProductDemand): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let queryManager = getManager();
      let responseControlStockByProductCode = await queryManager.query(
        ProductDemandScript.selectControlProductDemandByProductCode,
        [entity.productCode]
      );
      responseControlStockByProductCode = responseControlStockByProductCode[0]
        ? responseControlStockByProductCode[0]['']
        : null;
      returnObject.setData = responseControlStockByProductCode;

    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }
    return returnObject;
  }

 async UpdateTeamProductDemand(entity: ProductDemand): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;
    try {
      returnObject = new GenericResponse<number>();
      let queryManager = getManager();
      let responseUpdateTeamProductDemand = await queryManager.query(
        ProductDemandScript.updateTeamProductDemand,
        [
          entity.teamProductDemandId,
          entity.productId,
          entity.teamId,
          entity.quantity,
          entity.quantityPrice,
          entity.totalPrice
        ]
      );
      returnObject.setData = responseUpdateTeamProductDemand;
    } catch (error) {
      returnObject.Result.push(new HttpError(SystemErrorMessage.ProcessError));
      return returnObject;
    }

    return returnObject;

  }
 
}