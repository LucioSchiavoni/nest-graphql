import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';


// Donde se ejecutan las consultas de typeorm (el nivel mas bajo)
// el servicio (las request que me llegan del cliente)
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>) {}

       async findAllUsers(): Promise<User[]>{
            return this.userRepository.find()
       }


        // Crear usuario (llamamos el dto de user)
       async createUser(user: CreateUserInput): Promise<User> {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser)
       }
}
