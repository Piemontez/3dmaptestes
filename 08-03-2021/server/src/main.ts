import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: [
      'Content-Type',
      'Accept',
      'access-control-allow-origin',
      'access-control-allow-credentials',
      'x-custom-header',
    ],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
