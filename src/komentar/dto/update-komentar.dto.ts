import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateKomentarDTO {
  @IsString()
  @IsNotEmpty()
  sadrzaj: string;
}
