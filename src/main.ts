import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //accetto le chiamate solo dall'origine: 'http://localhost:4200'
  app.enableCors({
    origin: ['http://localhost:4200']
  });
  await app.listen(3000);
}
bootstrap();
