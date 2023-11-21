import { Module } from '@nestjs/common';
import { WinsService } from './wins.service';
import { WinsResolver } from './wins.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Win } from './entities/win.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Win])],
  providers: [WinsResolver, WinsService],
})
export class WinsModule {}
