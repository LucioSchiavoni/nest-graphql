import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
@ObjectType()
export class Card {

  @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    name:string;

    @Column()
    @Field()
    description:string;

    @Column()
    @Field()
    points: string;

}
