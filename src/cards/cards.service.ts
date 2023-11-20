import { Injectable } from '@nestjs/common';
import { CreateCardInput } from './dto/create-card.input';
import { UpdateCardInput } from './dto/update-card.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {

  constructor(@InjectRepository(Card) private cardRepository: Repository<Card>
  ) {}

  async create(card: CreateCardInput): Promise<Card> {
    const newCard = this.cardRepository.create(card)
    return this.cardRepository.save(newCard)
  }

  async findAll(): Promise<Card[]> {
    return this.cardRepository.find()
  }

  async findOne(id): Promise<Card[]> {
    return this.cardRepository.findBy(id);
  }

  // update(id: number, updateCardInput: UpdateCardInput) {
  //   return `This action updates a #${id} card`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} card`;
  // }
}
