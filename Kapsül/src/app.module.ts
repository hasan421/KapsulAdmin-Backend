import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { configService } from "./config/mssql-config";
import { ProductDemandController } from "./controllers/product-demand-controller";
import { ProductDemandService } from "./services/concrete/product-demand-service";

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AppController, ProductDemandController],
  providers: [AppService, ProductDemandService],
})
export class AppModule {}
