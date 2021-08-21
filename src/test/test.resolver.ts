import { Args, Int, Query, Resolver } from "@nestjs/graphql";

import { TestBasicType, TestCustomType } from "./types";

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
  public customWithInjection(@Args("input") dto: TestCustomType): number {
    return dto.query;
  }
}
