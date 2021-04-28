import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GoogleRecaptchaFilter } from './filter/google-recaptcha-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GoogleRecaptchaFilter());
  app.enableCors();
  await app.listen(3000);
}

bootstrap();
