import { Module } from '@nestjs/common';
import { WinsService } from './wins.service';
import { WinsResolver } from './wins.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Win } from './entities/win.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Win]), UserModule],
  providers: [WinsResolver, WinsService],
})
export class WinsModule {}
