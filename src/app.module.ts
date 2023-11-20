import { Module } from '@nestjs/common';
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




@Module({
  imports: [
     GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: '127.0.0.1',
      port : 5432,
      username: 'user',
      password: 'root123',
      database: 'mydb', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),TypeOrmModule.forFeature([User]),
     UserModule,
     WinsModule,
     CardsModule,
     
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver, UserService],
})
export class AppModule {}
