import { BaseError } from "./base-error";
export declare abstract class ProgrammaticError extends BaseError {
    errorType: string;
    constructor(message: string);
}
export declare class NegatifeNumberException extends ProgrammaticError {
    constructor(message?: string);
}
export declare class ZeroPointException extends ProgrammaticError {
    constructor(message?: string);
}
export declare class NonExpectArugumentException extends ProgrammaticError {
    constructor(message?: string);
}
