import { Injectable } from "@nestjs/common";
import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
export interface IProductDemandService {
  saveProductDemand(
    productDemand: ProductDemand
  ): Promise<GenericResponse<Number>>;
  getProductDemand(): Promise<GenericResponse<ProductDemand[]>>;
}
