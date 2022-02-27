import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ProductDemand } from "./entities/product-demand.entity";
import { ProductDemandService } from "./services/concrete/product-demand-service";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Kapsül")
    .setDescription("Kapsül Admin API")
    .setVersion("1.0")
    .addTag("Kapsül")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(process.env.PORT);
 
}

bootstrap();
