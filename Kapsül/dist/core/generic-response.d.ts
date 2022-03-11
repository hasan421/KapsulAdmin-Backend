import { HttpError } from "./error/http-error";
export declare class GenericResponse<T> {
    constructor();
    private success;
    Result: Array<HttpError>;
    private data;
    get getData(): T;
    set setData(data: T);
    get getSuccess(): boolean;
    set setSuccess(success: boolean);
}
