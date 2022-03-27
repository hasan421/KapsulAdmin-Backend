import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
export declare class ProductProcess {
    private productDemandModel;
    Product(entity: ProductDemand): Promise<GenericResponse<number>>;
}
