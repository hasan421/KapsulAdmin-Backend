import { ProductDemand } from "src/entities/product-demand.entity";
import { Teams } from "src/entities/teams.entity";


const CalculaterTotalProductQuantityPrice = (quantity:number,quantityPrice:number):number =>{
    let totalProductQuantityPrice = 0;
     if(quantity && quantityPrice)
     {
         totalProductQuantityPrice = quantity * quantityPrice;
     }
   
     return totalProductQuantityPrice;
 }
 const CalculaterTotalProductQuantity=(teamNameList:Teams[])=>{
    let totalProductQuantity = 0;
    if(teamNameList)
    {
        for(let i = 0 ; i < teamNameList.length; i++)
        {
            totalProductQuantity += teamNameList[i].quantity; 

        }
    }
    return totalProductQuantity;
 }
 const CalculaterTotalPrice=(teamNameList:Teams[])=>{
    let totalProductTotalPrice = 0;
    if(teamNameList)
    {
        for(let i = 0 ; i < teamNameList.length; i++)
        {
            totalProductTotalPrice += teamNameList[i].totalPrice; 

        }
    }
    return totalProductTotalPrice;
 }
 
 export{
    CalculaterTotalProductQuantityPrice,
    CalculaterTotalProductQuantity,
    CalculaterTotalPrice
 }
