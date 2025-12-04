import { IsEmail, IsNotEmpty,  IsString } from "class-validator"

export class CreateFelhasznalokDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  nev: string
}
