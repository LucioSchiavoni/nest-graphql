import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Win } from "src/wins/entities/win.entity";
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

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

    @OneToMany(() => Win, (win) => win.user)
    @Field(() => [Win], {nullable: true})
    wins: Win[];
}