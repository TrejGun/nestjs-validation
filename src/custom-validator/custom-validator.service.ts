import { Injectable } from "@nestjs/common";

import { isValid } from "../utils/validate-query";

@Injectable()
export class CustomValidatorService {
  public isValid(value: unknown): Promise<string> {
    return Promise.resolve(isValid(value));
  }
}
