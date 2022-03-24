import { HttpError } from "./error/http-error";
import { SuccessMessage } from "./success-message";
export declare class GenericResponse<T> {
    constructor();
    private success;
    private _successMessage;
    get successMessage(): SuccessMessage;
    set successMessage(value: SuccessMessage);
    Result: Array<HttpError>;
    private data;
    get getData(): T;
    set setData(data: T);
    get getSuccess(): boolean;
    set setSuccess(success: boolean);
}
