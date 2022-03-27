import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "./config/mssql-config";
import { ProductDemandController } from "./controllers/product-demand-controller";
import { ProductDemandService } from "./services/concrete/product-demand-service";
import { TeamsService } from "./services/concrete/teams-service";

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [ProductDemandController],
  providers: [ProductDemandService,TeamsService],
})
export class AppModule {}

