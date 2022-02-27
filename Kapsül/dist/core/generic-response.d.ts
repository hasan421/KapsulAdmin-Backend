export declare class GenericResponse<T> {
    constructor();
    private _success;
    Result: Array<Error>;
    private _data;
    get getData(): T;
    set setData(data: T);
    get getSuccess(): boolean;
    set setSuccess(success: boolean);
}
