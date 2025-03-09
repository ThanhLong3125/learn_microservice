import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from '../../../DTO/index.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    @InjectModel(User.name)
    private readonly usermodel: Model<UserDocument>
  ) {}
  async createUser(payload: CreateUserDto) {
    const user = new this.usermodel({...payload, birthday: new Date(payload.birthday)});
    const usersaved = await user.save();
    this.logger.log(`User ${usersaved.name} created`);
    return ({message: `User ${user.name } created` });
  }
}
