"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const product_demand_entity_1 = require("./entities/product-demand.entity");
const product_demand_1 = require("./models/concrete/product-demand");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT);
    let product = new product_demand_1.ProductDemandModel();
    let demand = new product_demand_entity_1.ProductDemand();
    demand.ProductName = "Hasan";
    demand.ProductType = 1;
    demand.ProductCode = "123";
    demand.Quantity = 12;
    demand.QuantityPrice = 123;
    demand.TotalPrice = 323;
    demand.ProductLink = "//hyttp";
    demand.Recived = 1;
    let response = await product.getProductDemand();
}
bootstrap();
//# sourceMappingURL=main.js.map