import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

import { isValid } from "../utils/validate-query";

// The constraint is a singleton shared by all requests, so it must not keep
// per-validation state in fields: concurrent async validations would overwrite it.
// The message is derived from args.value instead.
@ValidatorConstraint({ async: true })
export class CustomValidator implements ValidatorConstraintInterface {
  public validate(value: unknown): Promise<boolean> {
    return Promise.resolve(!isValid(value));
  }

  public defaultMessage(args: ValidationArguments): string {
    return isValid(args.value);
  }
}

export function IsCustomValidator(constraints = {}, validationOptions?: ValidationOptions) {
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      name: "IsCustomValidator",
      target: object.constructor,
      propertyName,
      constraints: [constraints],
      options: validationOptions,
      validator: CustomValidator,
    });
  };
}
