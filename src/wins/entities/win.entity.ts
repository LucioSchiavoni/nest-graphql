import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Win {

    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

  @Column()
  @Field()
  result: string;
  
  @Column()
  @Field()
  oponent: string;

  @Column()
  @Field()
  type:string;
}
