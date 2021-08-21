import { UsePipes } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

import { WsValidationPipe } from "../common/pipes";
import { TestCustomDto, TestCustomWithInjectionDto, TestJsonDto } from "./dto";

@UsePipes(WsValidationPipe)
@WebSocketGateway()
export class TestGateway {
  @SubscribeMessage("basic")
  public basic(@MessageBody() dto: TestJsonDto): number {
    return dto.query;
  }

  @SubscribeMessage("custom")
  public custom(@MessageBody() dto: TestCustomDto): number {
    return dto.query;
  }

  @SubscribeMessage("custom-with-injection")
  public customWithInjection(@MessageBody() dto: TestCustomWithInjectionDto): number {
    return dto.query;
  }
}
