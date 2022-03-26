import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { configService } from "./config/mssql-config";
import { ProductDemandController } from "./controllers/product-demand-controller";
import { StockController } from "./controllers/stock-controller";
import { ProductDemandService } from "./services/concrete/product-demand-service";
import { StockService } from "./services/concrete/stock-service";
import { TeamsService } from "./services/concrete/teams-service";

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AppController, ProductDemandController, StockController],
  providers: [AppService, ProductDemandService,TeamsService, StockService],
})
export class AppModule {}
