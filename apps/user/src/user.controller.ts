import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '../DTO/createuser.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'createUser')
  async createUser(@Payload() data: CreateUserDto): Promise<CreateUserDto> {  
    return this.userService.createUser(data);
  }

  @MessagePattern('user.notify')
  async handleUserNotification(@Payload() message: CreateUserDto): Promise<void> {
    console.log('Created User:', message.name);
  }
}
