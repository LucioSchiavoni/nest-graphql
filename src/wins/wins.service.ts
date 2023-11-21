import { Injectable } from '@nestjs/common';
import { CreateWinInput } from './dto/create-win.input';
import { UpdateWinInput } from './dto/update-win.input';
import { Win } from './entities/win.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class WinsService {

  constructor(@InjectRepository(Win) 
  private winRepository: Repository<Win>,
  private usersRepository: UserService) {} 
// llamo directamente al UserService donde tengo funciones

  async create(win: CreateWinInput): Promise<Win> {
      const newWin = this.winRepository.create(win)
      return this.winRepository.save(newWin)
  }

  async findAll(): Promise<Win[]> {
    return this.winRepository.find()
  }

  async getUser(userId: number): Promise<User> { 
    return this.usersRepository.findOne(userId)   //aqui se llama directamente findOne que es una funcion que esta en UserService
  }

  

  findOne(id: number) {
    return `This action returns a #${id} win`;
  }

  update(id: number, updateWinInput: UpdateWinInput) {
    return `This action updates a #${id} win`;
  }

  remove(id: number) {
    return `This action removes a #${id} win`;
  }
}
