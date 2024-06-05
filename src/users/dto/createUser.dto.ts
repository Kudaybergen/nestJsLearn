// src/dto/create-user.dto.ts
import { IsString, IsInt, IsEmail, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsInt()
  @Min(18)
  @Max(100)
  readonly age: number;
}
