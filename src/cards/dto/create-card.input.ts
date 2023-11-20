import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCardInput {
    
    @Field()
    name: string;

    @Field()
    description:string;

    @Field()
    points: string;

    
}
