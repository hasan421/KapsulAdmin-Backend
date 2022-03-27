
import { GenericResponse } from "src/core/generic-response";
import { IRepository } from "src/core/IRepository";
import { ProductDemand } from "src/entities/product-demand.entity";
export interface IProductDemandService extends IRepository<ProductDemand> {
    UpdateRecivedProductDemand(entity:ProductDemand):Promise<GenericResponse<Number>>;
}
