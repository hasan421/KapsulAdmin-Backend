import { GenericResponse } from "./generic-response";
export interface IRepository<T> {
    GetAll(): Promise<GenericResponse<T[]>>;
    GetById(): Promise<GenericResponse<T>>;
    Create(entity: T): Promise<GenericResponse<Number>>;
    Update(): Promise<GenericResponse<Number>>;
    Delete(): Promise<GenericResponse<Number>>;
}
