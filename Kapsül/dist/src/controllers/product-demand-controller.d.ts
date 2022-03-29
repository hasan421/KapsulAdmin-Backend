import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { ProductDemandService } from "src/services/concrete/product-demand-service";
export declare class ProductDemandController {
    private readonly appService;
    constructor(appService: ProductDemandService);
    SaveProductDemandController(productDemand: ProductDemand, response: any): Promise<GenericResponse<number>>;
    GetProductDemandController(response: any): Promise<GenericResponse<ProductDemand[]>>;
    DeleteProductDemandController(productDemand: ProductDemand, response: any): Promise<GenericResponse<number>>;
    UpdateTeamProductDemandController(productDemand: ProductDemand, response: any): Promise<GenericResponse<number>>;
    GetPurchasedProductController(response: any): Promise<GenericResponse<ProductDemand[]>>;
    UpdateRecivedProductDemandController(productDemand: ProductDemand[], response: any): Promise<GenericResponse<number>>;
}
