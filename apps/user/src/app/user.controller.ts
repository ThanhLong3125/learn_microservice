import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '../../../DTO/index.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: UserService) {}

  @GrpcMethod('UserService', 'createUser')
  async createUser(@Payload() payload: CreateUserDto): Promise<Object> {  
    return this.appService.createUser(payload);
  }

  @MessagePattern('user.notify')
  async handleUserNotification(@Payload() message: CreateUserDto): Promise<void> {
    console.log('Created User:', message.name);
  }
}
