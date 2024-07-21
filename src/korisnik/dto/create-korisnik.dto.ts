import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateKorisnikDTO {
  @IsString()
  @IsNotEmpty()
  ime: string;

  @IsString()
  @IsNotEmpty()
  prezime: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  lozinka: string;

  @IsBoolean()
  @IsNotEmpty()
  admin: boolean;
}
