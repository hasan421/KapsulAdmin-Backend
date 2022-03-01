import { BaseError } from "./base-error";

export abstract class ProgrammaticError extends BaseError {
  errorType: string;
  constructor(message: string) {
    super(message);
  }
}

export class NegatifeNumberException extends ProgrammaticError {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, NegatifeNumberException.prototype);
    this.errorType = "number exception";
  }
}

export class ZeroPointException extends ProgrammaticError {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, ZeroPointException.prototype);
    this.errorType = "number exception";
  }
}

export class NonExpectArugumentException extends ProgrammaticError {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, NonExpectArugumentException.prototype);
    this.errorType = "Argument exception";
  }
}
