import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(2)
  @MaxLength(250)
  @IsNotEmpty()
  description: string;

  user: number;
}
