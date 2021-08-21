import { ITestDto } from "../interfaces";
import { IsCustomValidator } from "../../validation/custom-validator";

export class TestCustomDto implements ITestDto {
  @IsCustomValidator()
  public query: number;
}
