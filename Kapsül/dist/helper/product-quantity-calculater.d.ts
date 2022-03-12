import { Teams } from "src/entities/teams.entity";
declare const CalculaterTotalProductQuantityPrice: (quantity: number, quantityPrice: number) => number;
declare const CalculaterTotalProductQuantity: (teamNameList: Teams[]) => number;
declare const CalculaterTotalPrice: (teamNameList: Teams[]) => number;
export { CalculaterTotalProductQuantityPrice, CalculaterTotalProductQuantity, CalculaterTotalPrice };
