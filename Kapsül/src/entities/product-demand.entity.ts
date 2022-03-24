import { Teams } from "./teams.entity";

export class ProductDemand {
  productName: string;
  productType?: number;
  productCode: string;
  quantity: number;
  quantityPrice: number;
  quantityType?:number;
  totalPrice: number;
  productLink?: string|null;
  productImage?: string;
  recived: number;
  systemDate: Date;
  teamName: string;
  productControl?:number;
  stockControl?:number;
  updateSystemDate: Date;
  productId:number;
  teamProductDemandId:number;
  teamId:number;
  stockId:number;
  stockQuantity:number;
  transactionType:number;
  teamNameList:Teams[]
}
