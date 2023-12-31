import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) {}

    // Mostrar todos los usuarios
    @Query((returns) => [User])
    AllUser(){
        return this.userService.findAllUsers();
    }

    @Query(() => User, { name: 'user' })
    findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

    // Mutation es crear usuario desde graphql
    @Mutation( (returns) => User)
    createUser(@Args('userInput') userInput: CreateUserInput) {
        return this.userService.createUser(userInput);
    }
}
