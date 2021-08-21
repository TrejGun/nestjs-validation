import { ITestDto } from "../interfaces";
import { IsCustomValidatorWithInjection } from "../../validation/custom-validator-with-injection";

export class TestCustomWithInjectionDto implements ITestDto {
  @IsCustomValidatorWithInjection()
  public query: number;
}
