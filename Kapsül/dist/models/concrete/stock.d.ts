import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { IStock } from "../abstract/IStock";
export declare class Stock implements IStock {
    ControlStockByProductCode(entity: ProductDemand): Promise<GenericResponse<Number>>;
    UpdateStockQuantity(entity: ProductDemand): Promise<GenericResponse<Number>>;
    GetAll(): Promise<GenericResponse<ProductDemand[]>>;
    Create(entity: ProductDemand): Promise<GenericResponse<Number>>;
    Update(entity: ProductDemand): Promise<GenericResponse<Number>>;
    Delete(entity: ProductDemand): Promise<GenericResponse<Number>>;
}
