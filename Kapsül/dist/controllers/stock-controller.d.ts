import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { StockService } from "src/services/concrete/stock-service";
export declare class StockController {
    private readonly appService;
    constructor(appService: StockService);
    SaveStockController(productDemand: ProductDemand, response: any): Promise<GenericResponse<number>>;
    GetStockController(response: any): Promise<GenericResponse<ProductDemand[]>>;
    DeleteStockController(productDemand: ProductDemand, response: any): Promise<GenericResponse<number>>;
    UpdateStockController(productDemand: ProductDemand, response: any): Promise<GenericResponse<number>>;
    UpdateStockQuantityController(productDemand: ProductDemand, response: any): Promise<GenericResponse<number>>;
}
