import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChatGateway } from './gateways/chat.gateway';
import { ViewModule } from './view/view.module';

@Module({
  imports: [ViewModule],
  controllers: [AppController],
  providers: [ChatGateway],
})
export class AppModule {}
