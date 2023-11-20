import { Field, Int, ObjectType } from "@nestjs/graphql"
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column({unique: true})
    @Field()
    alias: string;

    @Column()
    @Field()
    password: string;
}