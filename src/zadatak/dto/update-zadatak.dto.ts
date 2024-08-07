import { StatusZadatka } from '@prisma/client';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateZadatakDTO {
  @IsInt()
  @IsOptional()
  izvrsiteljId: number;

  @IsString()
  @IsEnum(StatusZadatka)
  @IsOptional()
  status: string;

  @IsString()
  @IsOptional()
  opis: string;
}
