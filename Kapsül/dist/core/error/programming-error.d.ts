import { BaseError } from "./base-error";
export declare class ProgrammingError extends BaseError {
    errorType: string;
    constructor(message: string);
}
export declare class NegatifeNumberException extends ProgrammingError {
    constructor(message?: string);
}
