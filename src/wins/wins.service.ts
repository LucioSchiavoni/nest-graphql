import { Injectable } from '@nestjs/common';
import { CreateWinInput } from './dto/create-win.input';
import { UpdateWinInput } from './dto/update-win.input';

@Injectable()
export class WinsService {
  create(createWinInput: CreateWinInput) {
    return 'This action adds a new win';
  }

  findAll() {
    return `This action returns all wins`;
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
