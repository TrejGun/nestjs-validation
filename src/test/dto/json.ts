import { IsInt, Max, Min } from "class-validator";

import { ITestDto } from "../interfaces";

export class TestJsonDto implements ITestDto {
  @IsInt()
  @Min(0)
  @Max(10)
  public query: number;
}
