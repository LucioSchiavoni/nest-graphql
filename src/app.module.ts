import { Module,  NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { WinsModule } from './wins/wins.module';
import { CardsModule } from './cards/cards.module';
import { User } from './user/user.entity';
import { CardsResolver } from './cards/cards.resolver';
import { CardsService } from './cards/cards.service';
import { WinsResolver } from './wins/wins.resolver';
import { WinsService } from './wins/wins.service';
import { Card } from './cards/entities/card.entity';
import { Win } from './wins/entities/win.entity';
import * as dotenv from 'dotenv';

dotenv.config()

@Module({
  imports: [
     GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port : parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE, 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),TypeOrmModule.forFeature([User, Card, Win]),
   
     UserModule,
     WinsModule,
     CardsModule,
     
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver, UserService, CardsResolver, CardsService, WinsResolver, WinsService],
})
export class AppModule{}

