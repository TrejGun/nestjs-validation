import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";

import { CustomValidatorService } from "../custom-validator/custom-validator.service";

// The constraint is a singleton shared by all requests, so it must not keep
// per-validation state in fields: concurrent async validations would overwrite it.
// The message is derived from args.value instead.
@Injectable()
@ValidatorConstraint({ async: true })
export class CustomValidatorWithInjection implements ValidatorConstraintInterface {
  constructor(private customValidatorService: CustomValidatorService) {}

  public validate(value: unknown): Promise<boolean> {
    return this.customValidatorService.validate(value);
  }

  public defaultMessage(args: ValidationArguments): string {
    return this.customValidatorService.getReason(args.value);
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
