import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '../../../DTO/index.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('UserService', 'createUser')
  async createUser(@Payload() data: CreateUserDto): Promise<CreateUserDto> {  
    return this.appService.createUser(data);
  }

  @MessagePattern('user.notify')
  async handleUserNotification(@Payload() message: CreateUserDto): Promise<void> {
    console.log('Created User:', message.name);
  }
}
