import { IProductDemandModel } from "../abstract/IProductDemandModel";
import { GenericResponse } from "../../core/generic-response";
import { ProductDemand } from "../../entities/product-demand.entity";
export declare class ProductDemandModel implements IProductDemandModel {
    GetAll(entitiy: ProductDemand | null): Promise<GenericResponse<ProductDemand[]>>;
    Create(entity: ProductDemand): Promise<GenericResponse<number>>;
    Update(entity: ProductDemand): Promise<GenericResponse<Number>>;
    Delete(entity: ProductDemand): Promise<GenericResponse<Number>>;
    UpdateRecivedProductDemand(entity: ProductDemand): Promise<GenericResponse<Number>>;
    GetPurchasedProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
    SaveTeamsProductDemand(entity: ProductDemand): Promise<GenericResponse<number>>;
    GetProductTotalQuantityAndTotalPrice(entity: ProductDemand): Promise<GenericResponse<ProductDemand>>;
    ControlProductDemand(entity: ProductDemand): Promise<GenericResponse<number>>;
    UpdateTeamProductDemand(entity: ProductDemand): Promise<GenericResponse<number>>;
}
