import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { IProductDemandService } from "../abstract/IProductDemandService";
export declare class ProductDemandService implements IProductDemandService {
    private productDemandModel;
    saveProductDemand(productDemand: ProductDemand): Promise<GenericResponse<Number>>;
    getProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
}
