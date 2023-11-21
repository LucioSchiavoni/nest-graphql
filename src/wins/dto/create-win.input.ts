import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from "class-validator"

@InputType()
export class CreateWinInput {

  @Field()
  @IsNotEmpty({ message: 'Campo obligatorio'})
  result: string;

  @IsNotEmpty({ message: 'Campo obligatorio'})
  @Field()
  oponent: string;

  @Field({nullable: true})
  type?:string;

  @IsInt()
  @Field()
  userId: number;
}
