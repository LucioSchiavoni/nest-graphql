import { Field, InputType } from "@nestjs/graphql";

// modelo de los datos (parecido al modelo de mongodb)
@InputType()
export class CreateUserInput {
    @Field()
    alias: string;

    @Field()
    password: string;
}