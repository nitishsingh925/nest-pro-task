import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { IsUnique } from 'src/shared/validation/is-unique';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  @IsNotEmpty()
  @IsUnique({ tableName: 'user', column: 'username' })
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsNotEmpty()
  name: string;
}
