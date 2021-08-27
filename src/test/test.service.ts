import { Injectable } from "@nestjs/common";

import { ITest, TestRole } from "./interfaces";

@Injectable()
export class TestService {
  public getList(): Promise<Array<ITest>> {
    return Promise.resolve([
      {
        id: 1,
        email: "trejgun+test1@gmail.com",
        password: "qwerty",
        roles: [TestRole.USER],
      },
      {
        id: 2,
        email: "trejgun+test2@gmail.com",
        password: "qwerty",
        roles: [TestRole.USER],
      },
      {
        id: 3,
        email: "trejgun+test3@gmail.com",
        password: "qwerty",
        roles: [TestRole.ADMIN],
      },
    ]);
  }
}
