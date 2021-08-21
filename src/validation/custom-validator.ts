import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

import { isValid } from "../utils/validate-query";

@ValidatorConstraint({ async: true })
export class CustomValidator implements ValidatorConstraintInterface {
  private reason: string;

  public async validate(value: unknown): Promise<boolean> {
    this.reason = await this.isValid(value);
    return !this.reason;
  }

  public defaultMessage(): string {
    return this.reason;
  }

  private isValid(value: unknown): Promise<string> {
    return Promise.resolve(isValid(value));
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
