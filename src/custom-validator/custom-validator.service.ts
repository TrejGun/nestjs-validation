import { Injectable } from "@nestjs/common";

import { isValid } from "../utils/validate-query";

@Injectable()
export class CustomValidatorService {
  // async on purpose: stands for a check that needs I/O (database, remote API, ...)
  public validate(value: unknown): Promise<boolean> {
    return Promise.resolve(!isValid(value));
  }

  // sync: class-validator calls defaultMessage synchronously
  public getReason(value: unknown): string {
    return isValid(value);
  }
}
