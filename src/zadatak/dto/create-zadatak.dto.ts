import {
  IsDate,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Prioritet } from '@prisma/client';

export class CreateZadatakDTO {
  @IsString()
  @IsNotEmpty()
  naziv: string;

  @IsString()
  @IsNotEmpty()
  opis: string;

  @IsNotEmpty()
  @IsInt()
  projektId: number;

  @IsNotEmpty()
  @IsInt()
  izvrsiteljId: number;

  @IsNotEmpty()
  @IsInt()
  izvjestiteljId: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Prioritet)
  prioritet: string;

  @IsNotEmpty()
  @IsDateString()
  rok: Date;
}
