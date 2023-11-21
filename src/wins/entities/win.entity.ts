import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
    @Field(() => Int)
  userId: number

  @ManyToOne(() => User, (user) => user.wins)
  @Field(() => User)
  user: User
}
