import { ApiProperty } from "@nestjs/swagger";
import {  IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  birthday: string;

  @IsString()
  @ApiProperty()
  address: string;
}