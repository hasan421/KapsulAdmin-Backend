import { GenericResponse } from "./generic-response";
export interface IRepository<T> {
    GetAll(entity: T | null): Promise<GenericResponse<T[]>>;
    Create(entity: T | T[]): Promise<GenericResponse<number>>;
    Update(entity: T): Promise<GenericResponse<Number>>;
    Delete(entity: T): Promise<GenericResponse<Number>>;
}
