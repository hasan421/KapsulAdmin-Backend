import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

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
