import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
  .setTitle('Gateway')
  .setDescription('Gateway API')
  .setVersion('1.0')
  .addTag('User')
  .build();
  const Document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, Document);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();