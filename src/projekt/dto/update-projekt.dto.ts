import { StatusProjekta } from '@prisma/client';
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateProjektDTO {
  @IsString()
  @IsOptional()
  naziv: string;

  @IsEnum(StatusProjekta)
  @IsString()
  @IsOptional()
  status: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsInt({ each: true })
  voditelji: number[];
}
