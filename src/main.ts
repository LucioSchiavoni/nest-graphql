import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule,  { cors: true });
  app.useGlobalPipes(new ValidationPipe());
app.enableCors({
    origin: process.env.URL_CLIENT
  });
  await app.listen(3000);
  console.log(`App is runing on: ${await app.getUrl()}`)
}
bootstrap();
