import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { IProductDemandController } from "../Abstract/IProductDemandController";
import { ProductDemandService } from "src/services/concrete/product-demand-service";
export declare class ProductDemandController implements IProductDemandController {
    private readonly appService;
    constructor(appService: ProductDemandService);
    saveProductDemand(productDemand: ProductDemand): Promise<GenericResponse<Number>>;
    getProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
}
