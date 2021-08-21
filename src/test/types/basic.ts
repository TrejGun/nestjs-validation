import { Field, InputType } from "@nestjs/graphql";
import { IsInt, Max, Min } from "class-validator";

import { ITestDto } from "../interfaces";

@InputType()
export class TestBasicType implements ITestDto {
  @Field()
  @IsInt()
  @Min(0)
  @Max(10)
  public query: number;
}
