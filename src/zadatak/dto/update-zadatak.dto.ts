import { Status } from '@prisma/client';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateZadatakDTO {
  @IsInt()
  @IsOptional()
  izvrsiteljId: number;

  @IsString()
  @IsEnum(Status)
  @IsOptional()
  status: string;
}
