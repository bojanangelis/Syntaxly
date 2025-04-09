import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const port = process.env.PORT || 4200;
  await app.listen(port, '0.0.0.0');
  Logger.log(
    `🚀 Sintaxly playground api is running on http://localhost:${port}/graphiql`,
  );
}
bootstrap();
