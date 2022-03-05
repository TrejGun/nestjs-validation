import { Body, Controller, Get, Post, Query } from "@nestjs/common";

import { TestCustomDto, TestCustomWithInjectionDto, TestJsonDto, TestUrlencodedDto } from "./dto";

@Controller("/test")
export class TestController {
  @Get("/get-basic")
  public simple(@Query("query") query: number): number {
    return query;
  }

  @Get("/get-urlencoded")
  public basicPost(@Query() dto: TestUrlencodedDto): number {
    return dto.query;
  }

  @Post("/post-urlencoded")
  public postUrlencoded(@Body() dto: TestUrlencodedDto): number {
    return dto.query;
  }

  @Post("/post-json")
  public postJson(@Body() dto: TestJsonDto): number {
    return dto.query;
  }

  @Post("/custom")
  public custom(@Body() dto: TestCustomDto): number {
    return dto.query;
  }

  @Post("/custom-with-injection")
  public customWithInjection(@Body() dto: TestCustomWithInjectionDto): number {
    return dto.query;
  }
}
