import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { IStock } from "../abstract/IStockModel";
export declare class Stock implements IStock {
    GetAll(): Promise<GenericResponse<ProductDemand[]>>;
    Create(entity: ProductDemand): Promise<GenericResponse<number>>;
    Update(entity: ProductDemand): Promise<GenericResponse<number>>;
    Delete(entity: ProductDemand): Promise<GenericResponse<number>>;
    ControlStockByProductCode(entity: ProductDemand): Promise<GenericResponse<Number>>;
    UpdateStockQuantity(entity: ProductDemand): Promise<GenericResponse<Number>>;
}
