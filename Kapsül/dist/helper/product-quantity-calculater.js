"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculaterTotalPrice = exports.CalculaterTotalProductQuantity = exports.CalculaterTotalProductQuantityPrice = void 0;
const CalculaterTotalProductQuantityPrice = (quantity, quantityPrice) => {
    let totalProductQuantityPrice = 0;
    if (quantity && quantityPrice) {
        totalProductQuantityPrice = quantity * quantityPrice;
    }
    return totalProductQuantityPrice;
};
exports.CalculaterTotalProductQuantityPrice = CalculaterTotalProductQuantityPrice;
const CalculaterTotalProductQuantity = (teamNameList) => {
    let totalProductQuantity = 0;
    if (teamNameList) {
        for (let i = 0; i < teamNameList.length; i++) {
            totalProductQuantity += teamNameList[i].quantity;
        }
    }
    return totalProductQuantity;
};
exports.CalculaterTotalProductQuantity = CalculaterTotalProductQuantity;
const CalculaterTotalPrice = (teamNameList) => {
    let totalProductTotalPrice = 0;
    if (teamNameList) {
        for (let i = 0; i < teamNameList.length; i++) {
            totalProductTotalPrice += teamNameList[i].totalPrice;
        }
    }
    return totalProductTotalPrice;
};
exports.CalculaterTotalPrice = CalculaterTotalPrice;
//# sourceMappingURL=product-quantity-calculater.js.map