import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateUserDto } from '../DTO/createuser.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'createUser')
  async createUser(data: CreateUserDto) {  
    return this.userService.createUser(data);
  }
}
