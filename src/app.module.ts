import { Module } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Request, Response } from "express";
import { join } from "path";

import { TestModule } from "./test/test.module";
import { HttpValidationPipe } from "./common/pipes";
import { ValidationModule } from "./validation/validation.module";

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: HttpValidationPipe,
    },
  ],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): ApolloDriverConfig => {
        const nodeEnv = configService.get<string>("NODE_ENV", "development");
        return {
          driver: ApolloDriver,
          debug: nodeEnv !== "production",
          playground: nodeEnv !== "production",
          context: ({ req, res }: { req: Request; res: Response }): any => ({ req, res }),
          autoSchemaFile: "./schema.gql",
        };
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    }),
    TestModule,
    ValidationModule,
  ],
})
export class AppModule {}
