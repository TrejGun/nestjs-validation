import { ApiProperty } from "@nestjs/swagger";
import { IsInt, Max, Min } from "class-validator";
import { Mixin } from "ts-mixer";

export class ADto {
  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(10)
  public a: number;
}

export class BDto {
  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(10)
  public b: number;
}

export class MixedDto extends Mixin(ADto, BDto) {}
