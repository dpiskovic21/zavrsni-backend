import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePrivitakDTO {
  @IsInt()
  @IsNotEmpty()
  zadatakId: number;
}
