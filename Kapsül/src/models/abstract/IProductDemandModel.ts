import { GenericResponse } from "../../core/generic-response";
import { ProductDemand } from "../../entities/product-demand.entity";
export interface IProductDemandModel {
  saveProductDemand(
    productDemand: ProductDemand
  ): Promise<GenericResponse<Number>>;

  getProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
}
