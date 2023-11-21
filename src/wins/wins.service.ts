import { Injectable } from '@nestjs/common';
import { CreateWinInput } from './dto/create-win.input';
import { UpdateWinInput } from './dto/update-win.input';
import { Win } from './entities/win.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WinsService {

  constructor(@InjectRepository(Win) private winRepository: Repository<Win>) {}

  async create(win: CreateWinInput): Promise<Win> {
      const newWin = this.winRepository.create(win)
      return this.winRepository.save(newWin)
  }

  async findAll(): Promise<Win[]> {
    return this.winRepository.find()
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
