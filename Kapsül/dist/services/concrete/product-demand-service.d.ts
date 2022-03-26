import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { IProductDemandService } from "../abstract/IProductDemandService";
export declare class ProductDemandService implements IProductDemandService {
    private productDemandModel;
    private teamsModel;
    GetAll(): Promise<GenericResponse<ProductDemand[]>>;
    Create(entity: ProductDemand): Promise<GenericResponse<number>>;
    Update(entity: ProductDemand): Promise<GenericResponse<number>>;
    Delete(entity: ProductDemand): Promise<GenericResponse<number>>;
    GetPurchasedProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
    UpdateRecivedProductDemand(entity: ProductDemand): Promise<GenericResponse<number>>;
}
