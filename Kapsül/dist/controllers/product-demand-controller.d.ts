import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/team-product-demand.entity";
import { ProductDemandService } from "src/services/concrete/product-demand-service";
export declare class ProductDemandController {
    private readonly appService;
    constructor(appService: ProductDemandService);
    saveProductDemand(productDemand: ProductDemand): Promise<GenericResponse<Number>>;
    getProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
    getPurchanedProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
}
