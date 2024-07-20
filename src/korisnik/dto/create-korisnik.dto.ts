import { IsBoolean, IsString } from 'class-validator';

export class CreateKorisnikDTO {
  @IsString()
  ime: string;

  @IsString()
  prezime: string;

  @IsString()
  email: string;

  @IsString()
  lozinka: string;

  @IsBoolean()
  admin: boolean;
}
