import { PartialType } from '@nestjs/mapped-types';
import { CreateBejegyzesekDto } from './create-bejegyzesek.dto';

export class UpdateBejegyzesekDto extends PartialType(CreateBejegyzesekDto) {}
