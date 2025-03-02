import { Injectable } from '@nestjs/common';
import { User } from '../DTO/user.dto';
import { CreateUserDto } from '../DTO/createuser.dto';


@Injectable()
export class UserService {
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
