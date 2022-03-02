export abstract class BaseError extends Error {
  constructor(public message: string) {
    super(message);
  }
}
