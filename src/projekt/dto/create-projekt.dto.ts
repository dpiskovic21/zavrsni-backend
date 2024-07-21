import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
} from 'class-validator';

export class CreateProjektDTO {
  @IsString()
  @IsNotEmpty()
  naziv: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsInt({ each: true })
  voditelji: number[];
}
