import { PartialType } from '@nestjs/mapped-types';
import { CreateKorisnikDTO } from '.';

export class UpdateKorisnikDTO extends PartialType(CreateKorisnikDTO) {
  lozinka: string;
}
