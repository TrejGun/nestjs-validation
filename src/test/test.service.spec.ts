import { Test, TestingModule } from "@nestjs/testing";
import { ConfigModule } from "@nestjs/config";

import { TestService } from "./test.service";

describe("TestService", () => {
  let testService: TestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: `.env`,
        }),
      ],
      providers: [TestService],
    }).compile();

    testService = module.get<TestService>(TestService);
  });

  it("should be defined", () => {
    expect(testService).toBeDefined();
  });

  describe("getList", () => {
    it("should return a list", async () => {
      const list = await testService.getList();
      expect(list.length).toEqual(3);
    });
  });
});
