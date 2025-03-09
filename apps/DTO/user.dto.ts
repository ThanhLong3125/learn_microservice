import { IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class User {
    @IsString()
    @ApiProperty()
    name: string;

    @IsDate()
    @ApiProperty()
    birthday: Date;

    @IsString()
    @ApiProperty()
    address: string;
}