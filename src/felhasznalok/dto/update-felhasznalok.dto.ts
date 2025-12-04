import { PartialType } from '@nestjs/mapped-types';
import { CreateFelhasznalokDto } from './create-felhasznalok.dto';

export class UpdateFelhasznalokDto extends PartialType(CreateFelhasznalokDto) {}
