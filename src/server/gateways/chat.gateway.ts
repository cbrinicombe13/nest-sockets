import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway(null, { namespace: 'chat' })
export class ChatGateway {
  @WebSocketServer()
  server: any;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string) {
    console.log(message);
    this.server.emit('message', message);
  }
}
