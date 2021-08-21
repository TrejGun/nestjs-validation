import { Module } from "@nestjs/common";

import { CustomValidatorService } from "./custom-validator.service";

@Module({
  providers: [CustomValidatorService],
  exports: [CustomValidatorService],
})
export class CustomValidatorModule {}
