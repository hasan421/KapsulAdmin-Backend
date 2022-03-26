import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { IStockService } from "../abstract/IStockService";
export declare class StockService implements IStockService {
    private stockModel;
    private teamsModel;
    GetAll(): Promise<GenericResponse<ProductDemand[]>>;
    Create(entity: ProductDemand): Promise<GenericResponse<number>>;
    Update(entity: ProductDemand): Promise<GenericResponse<number>>;
    Delete(entity: ProductDemand): Promise<GenericResponse<number>>;
    UpdateStockQuantity(entity: ProductDemand): Promise<GenericResponse<number>>;
}
