// 시작점 파일
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // root module인 app module을 생성
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// 실행 순서
// main.ts -> app(AppModule)
// app.module.ts -> controllers: [AppController], providers: [AppService]
// app.controller.ts -> @Get() appService
// app.service.ts -> getHello()
