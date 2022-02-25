export class GenericResponse<T> {
  constructor() {
    this.Result = [];
  }

  private _success: boolean;
  public Result: Array<Error>;
  private _data: T;

  public get data() {
    return this._data;
  }

  public set data(data: T) {
    this._data = data;
  }
  public get success() {
    if (this.Result != null && this.Result.length > 0) this._success = false;
    else this._success = true;

    return this._success;
  }

  public set success(success: boolean) {
    this._success = success;
  }
}
