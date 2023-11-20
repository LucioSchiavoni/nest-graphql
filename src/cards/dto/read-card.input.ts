import { Field, InputType, Int } from "@nestjs/graphql";

    
    @InputType()
    export class readCardInput {

        @Field(() => Int)
        id: number;
    

        @Field()
        name:string;

        @Field()
        description:string;

        @Field()
        points: string;
    
    }