import { IProductDemandModel } from "../abstract/IProductDemandModel";
import { GenericResponse } from "../../core/generic-response";
import { ProductDemand } from "../../entities/product-demand.entity";
export declare class ProductDemandModel implements IProductDemandModel {
    getProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
    saveProductDemand(productDemand: ProductDemand): Promise<GenericResponse<Number>>;
}
