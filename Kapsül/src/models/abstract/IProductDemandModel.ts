import { GenericResponse } from "src/core/generic-response";
import { IRepository } from "src/core/IRepository";
import { ProductDemand } from "../../entities/product-demand.entity";
export interface IProductDemandModel extends IRepository<ProductDemand>{
 SaveTeamsProductDemand(entity:ProductDemand):Promise<GenericResponse<Number>>;
 GetPurchasedProductDemand():Promise<GenericResponse<ProductDemand[]>>;
 UpdateRecivedProductDemand(entity:ProductDemand):Promise<GenericResponse<Number>>;
}
