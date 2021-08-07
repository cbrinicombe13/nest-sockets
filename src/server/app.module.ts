import { Module } from '@nestjs/common';
import { ChatGateway } from './gateways/chat.gateway';
import { GroupModule } from './group/group.module';
import { ViewModule } from './view/view.module';

@Module({
  imports: [ViewModule, GroupModule],
  providers: [ChatGateway],
})
export class AppModule {}
