import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { configService } from "./config/mssql-config";
import { ProductDemandController } from "./controllers/product-demand-controller";
import { TeamsController } from "./controllers/teams-controller";
import { ProductDemandService } from "./services/concrete/product-demand-service";
import { TeamsService } from "./services/concrete/teams-service";

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AppController, ProductDemandController,TeamsController],
  providers: [AppService, ProductDemandService,TeamsService],
})
export class AppModule {}
