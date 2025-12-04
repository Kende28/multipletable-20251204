import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateBejegyzesekDto {
  @IsString()
  @IsNotEmpty()
  title: string
  
  @IsString()
  @IsNotEmpty()
  content: string
  
  @IsNumber()
  @IsNotEmpty()
  userId: number
}
