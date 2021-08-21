import { Field, InputType } from "@nestjs/graphql";

import { ITestDto } from "../interfaces";
import { IsCustomValidator } from "../../validation/custom-validator";

@InputType()
export class TestCustomType implements ITestDto {
  @Field()
  @IsCustomValidator()
  public query: number;
}
