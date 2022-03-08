import { IProductDemandModel } from "../abstract/IProductDemandModel";
import { GenericResponse } from "../../core/generic-response";
import { ProductDemand } from "../../entities/product-demand.entity";
export declare class ProductDemandModel implements IProductDemandModel {
    UpdateRecivedProductDemand(entity: ProductDemand): Promise<GenericResponse<Number>>;
    GetPurchasedProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
    SaveTeamsProductDemand(entity: ProductDemand): Promise<GenericResponse<Number>>;
    GetAll(): Promise<GenericResponse<ProductDemand[]>>;
    Create(entity: ProductDemand): Promise<GenericResponse<Number>>;
    Update(entity: ProductDemand): Promise<GenericResponse<Number>>;
    Delete(entity: ProductDemand): Promise<GenericResponse<Number>>;
}
