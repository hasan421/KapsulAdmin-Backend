import { ProductDemandController } from "src/controllers/product-demand-controller";
import { ProductDemandService } from "src/services/concrete/product-demand-service";
import { TeamsService } from "src/services/concrete/teams-service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [ProductDemandController],
  providers: [ProductDemandService,TeamsService],
})
export class ProductDemandModule {}
