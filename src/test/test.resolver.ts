import { Args, Int, Query, Resolver } from "@nestjs/graphql";

import { TestBasicType, TestCustomType, TestCustomWithInjectionType } from "./types";

@Resolver(() => Number)
export class TestResolver {
  @Query(() => Number)
  public basic(@Args({ name: "query", type: () => Int }) query: number): number {
    return query;
  }

  @Query(() => Number)
  public simple(@Args("input") dto: TestBasicType): number {
    return dto.query;
  }

  @Query(() => Number)
  public custom(@Args("input") dto: TestCustomType): number {
    return dto.query;
  }

  @Query(() => Number)
  public customWithInjection(@Args("input") dto: TestCustomWithInjectionType): number {
    return dto.query;
  }
}
