import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { useContainer } from "class-validator";

import { ApplicationModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(ApplicationModule);

  const configService = app.get(ConfigService);

  // this is required by CustomValidatorWithInjection
  useContainer(app.select(ApplicationModule), { fallbackOnErrors: true });

  const host = configService.get<string>("HOST", "localhost");
  const port = configService.get<number>("PORT", 3000);

  await app.listen(port, host, () => {
    console.info(`API server is running on http://${host}:${port}`);
  });
}

void bootstrap();
