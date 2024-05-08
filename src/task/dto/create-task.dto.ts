import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(250)
  @IsNotEmpty()
  description: string;
}
