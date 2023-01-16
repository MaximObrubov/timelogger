import { IsDate, IsNotEmpty  } from "class-validator";

export class CreateTimelogDto {
  @IsDate()
  @IsNotEmpty()
  start: Date;

  @IsDate()
  @IsNotEmpty()
  end: Date;

  @IsDate()
  @IsNotEmpty()
  pauseStart: Date;

  @IsDate()
  @IsNotEmpty()
  pauseEnd: Date;
}
