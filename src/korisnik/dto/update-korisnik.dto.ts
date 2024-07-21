import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateKorisnikDTO {
  @IsString()
  @IsNotEmpty()
  lozinka: string;
}
