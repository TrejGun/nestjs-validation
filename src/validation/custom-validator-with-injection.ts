import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { CustomValidatorService } from "../custom-validator/custom-validator.service";

@Injectable()
@ValidatorConstraint({ async: true })
export class CustomValidatorWithInjection implements ValidatorConstraintInterface {
  constructor(private customValidatorService: CustomValidatorService) {}

  private reason: string;

  public async validate(value: unknown): Promise<boolean> {
    this.reason = await this.isValid(value);
    return !this.reason;
  }

  public defaultMessage(): string {
    return this.reason;
  }

  private isValid(value: unknown): Promise<string> {
    return this.customValidatorService.isValid(value);
  }
}

export function IsCustomValidatorWithInjection(constraints = {}, validationOptions?: ValidationOptions) {
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      name: "IsCustomValidatorWithInjection",
      target: object.constructor,
      propertyName,
      constraints: [constraints],
      options: validationOptions,
      validator: CustomValidatorWithInjection,
    });
  };
}
