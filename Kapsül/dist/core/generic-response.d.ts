export declare class GenericResponse<T> {
    constructor();
    private _success;
    Result: Array<Error>;
    private _data;
    get data(): T;
    set data(data: T);
    get success(): boolean;
    set success(success: boolean);
}
