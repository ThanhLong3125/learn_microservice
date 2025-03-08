import { Injectable } from '@nestjs/common';
import { CreateUserDto, User } from '../../../DTO/index.dto';

@Injectable()
export class AppService {
  private listUsers: User[] = [];
  async createUser(createUserDto: CreateUserDto) {
    const user = {
      id: this.listUsers.length + 1,
      name: createUserDto.name,
    };
    this.listUsers.push(user);
    console.log(this.listUsers);
    return user;
  }
}
