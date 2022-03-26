import { Teams } from "src/entities/teams.entity";

const GroupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object
};
const CalculaterTotalProductQuantityPrice = (
    quantity: number,
    quantityPrice: number
): number => {
    let totalProductQuantityPrice = 0;
    if (quantity && quantityPrice) {
        totalProductQuantityPrice = quantity * quantityPrice;
    }

    return totalProductQuantityPrice;
};

export { CalculaterTotalProductQuantityPrice, GroupBy };
