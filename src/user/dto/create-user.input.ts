import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

// modelo de los datos (parecido al modelo de mongodb)
@InputType()
export class CreateUserInput {
    @IsNotEmpty({ message: 'Campo obligatorio'})
    @Field()
    alias: string;

    @IsNotEmpty({ message: 'Campo obligatorio'})
    @Field()
    password: string;
}