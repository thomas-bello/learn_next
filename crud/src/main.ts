import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    /**
     * 默认情况下，如果在创建应用程序时发生了任何错误，
     * 你的应用程序会退出并返回错误代码 1。
     * 如果你想让它抛出错误，请禁用 abortOnError 选项
     */
    abortOnError: false,
  });
  await app.listen(3000);
}
bootstrap();
