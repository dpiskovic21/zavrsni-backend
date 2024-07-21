import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PrijavaDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  lozinka: string;
}
