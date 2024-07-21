import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePrivitakDTO {
  @IsNotEmpty()
  zadatakId: string;
}
