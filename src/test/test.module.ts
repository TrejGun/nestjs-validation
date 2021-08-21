import { Module } from "@nestjs/common";

import { TestResolver } from "./test.resolver";
import { TestController } from "./test.controller";
import { TestService } from "./test.service";
import { TestGateway } from "./test.gateway";

@Module({
  providers: [TestResolver, TestService, TestGateway],
  controllers: [TestController],
  exports: [TestService],
})
export class TestModule {}
