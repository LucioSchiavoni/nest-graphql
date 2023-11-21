import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator"
@InputType()
export class CreateCardInput {
     @IsNotEmpty({ message: 'Campo obligatorio'})
    @Field()
    name: string;

    @IsNotEmpty({ message: 'Campo obligatorio'})
    @Field()
    description:string;


    @Field({nullable : true})
    points?: string;

    
}
