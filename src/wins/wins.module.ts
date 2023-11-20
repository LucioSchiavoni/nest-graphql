import { Module } from '@nestjs/common';
import { WinsService } from './wins.service';
import { WinsResolver } from './wins.resolver';

@Module({
  providers: [WinsResolver, WinsService],
})
export class WinsModule {}
