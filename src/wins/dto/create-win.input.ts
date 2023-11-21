import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator"

@InputType()
export class CreateWinInput {

  @Field()
  @IsNotEmpty({ message: 'Campo obligatorio'})
  wins: string;

  @IsNotEmpty({ message: 'Campo obligatorio'})
  @Field()
  oponent: string;

  @Field({nullable: true})
  type?:string;
}
