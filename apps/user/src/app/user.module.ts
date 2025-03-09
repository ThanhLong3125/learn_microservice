import { Module } from '@nestjs/common';
import { AppController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb://localhost:27017/user'),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
