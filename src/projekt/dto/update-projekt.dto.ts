import { PartialType } from '@nestjs/mapped-types';
import { CreateProjektDTO } from '.';

export class UpdateProjektDTO extends PartialType(CreateProjektDTO) {}
