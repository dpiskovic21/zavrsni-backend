import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateKomentarDTO {
  @IsString()
  @IsNotEmpty()
  sadrzaj: string;

  @IsInt()
  @IsNotEmpty()
  zadatakId: number;

  @IsInt()
  @IsNotEmpty()
  korisnikId: number;
}
