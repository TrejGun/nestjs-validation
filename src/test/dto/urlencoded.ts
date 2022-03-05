import { IsInt, Min, Max } from "class-validator";
import { Type } from "class-transformer";

import { ITestDto } from "../interfaces";

export class TestUrlencodedDto implements ITestDto {
  // have to cast to number for GET request
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(10)
  public query: number;
}
