import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
export interface IProductDemandService {
    saveProductDemand(productDemand: ProductDemand): Promise<GenericResponse<Number>>;
    getProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
}
export interface IGenericeRepository<T> {
    instert(model: T): Promise<GenericResponse<Number>>;
    delete(model: T): Promise<GenericResponse<Number>>;
    update(model: T): Promise<GenericResponse<Number>>;
    getAll(): Promise<GenericResponse<T[]>>;
    findById(id: number): Promise<GenericResponse<T>>;
}
