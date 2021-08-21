import { Module } from "@nestjs/common";

import { CustomValidatorWithInjection } from "./custom-validator-with-injection";
import { CustomValidatorModule } from "../custom-validator/custom-validator.module";

@Module({
  imports: [CustomValidatorModule],
  providers: [CustomValidatorWithInjection],
})
export class ValidationModule {}
