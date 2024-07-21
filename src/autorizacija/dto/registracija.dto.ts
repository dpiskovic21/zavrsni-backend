import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class RegistracijaDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  lozinka: string;

  @IsNotEmpty()
  @IsString()
  ime: string;

  @IsNotEmpty()
  @IsString()
  prezime: string;

  @IsNotEmpty()
  @IsBoolean()
  admin: boolean;
}
