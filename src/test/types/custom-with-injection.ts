import { Field, InputType } from "@nestjs/graphql";

import { ITestDto } from "../interfaces";
import { IsCustomValidatorWithInjection } from "../../validation/custom-validator-with-injection";

@InputType()
export class TestCustomWithInjectionType implements ITestDto {
  @Field()
  @IsCustomValidatorWithInjection()
  public query: number;
}
