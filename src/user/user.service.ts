import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>) {}

        // buscar todos los usuarios
       async findAllUsers(): Promise<User[]>{
            return this.userRepository.find()
       }

        // llamar user by id
        async findOne(id: number): Promise<User>{
            return this.userRepository.findOne({
                where: {
                    id,
                },
            })
       }
        // Crear usuario
       async createUser(user: CreateUserInput): Promise<User> {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser)
       }
}
