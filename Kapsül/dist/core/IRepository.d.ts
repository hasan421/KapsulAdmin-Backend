import { GenericResponse } from "./generic-response";
export interface IRepository<T> {
    GetAll(): Promise<GenericResponse<T[]>>;
    GetById(id: number): Promise<GenericResponse<T>>;
    Create(entity: T): Promise<GenericResponse<Number>>;
    Update(entity: T): Promise<GenericResponse<Number>>;
    Delete(entity: T): Promise<GenericResponse<Number>>;
}
