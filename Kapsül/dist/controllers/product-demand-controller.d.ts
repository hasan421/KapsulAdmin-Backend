import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { ProductDemandService } from "src/services/concrete/product-demand-service";
export declare class ProductDemandController {
    private readonly appService;
    constructor(appService: ProductDemandService);
    SaveProductDemand(productDemand: ProductDemand, response: any): Promise<GenericResponse<number>>;
    GetProductDemand(response: any): Promise<GenericResponse<ProductDemand[]>>;
}
