"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBy = exports.CalculaterTotalProductQuantityPrice = void 0;
const GroupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
    }, {});
};
exports.GroupBy = GroupBy;
const CalculaterTotalProductQuantityPrice = (quantity, quantityPrice) => {
    let totalProductQuantityPrice = 0;
    if (quantity && quantityPrice) {
        totalProductQuantityPrice = quantity * quantityPrice;
    }
    return totalProductQuantityPrice;
};
exports.CalculaterTotalProductQuantityPrice = CalculaterTotalProductQuantityPrice;
//# sourceMappingURL=product-quantity-calculater.js.map