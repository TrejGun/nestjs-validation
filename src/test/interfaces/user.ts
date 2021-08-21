import { TestRole } from "./roles";

export interface ITest {
  id: number;
  email: string;
  password: string;
  roles: Array<TestRole>;
}
