import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { join } from 'path';

async function bootstrap() {
  // express
  // const app = await NestFactory.create(AppModule);

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('/api');

  app.useStaticAssets({
    root: join(__dirname, '..', '../client/dist/client'),
    prefix: '/',
  });
  await app.listen(8080, '0.0.0.0');
}
bootstrap();
