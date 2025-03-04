import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, ClientKafka } from '@nestjs/microservices';
import { UserServiceGrpc } from './interface/user.interface';
import { CreateUserDto } from 'apps/user/DTO/createuser.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService implements OnModuleInit {
  private userServiceGrpc: UserServiceGrpc;
  constructor(@Inject('UserService') private readonly client: ClientGrpc,
  @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,) {}

  onModuleInit() {
    this.userServiceGrpc = this.client.getService<UserServiceGrpc>('UserService');
  }

  async createUser(data: CreateUserDto) {
    const user = await firstValueFrom(this.userServiceGrpc.createUser(data));
    this.kafkaClient.emit('user.notify', user);
    
    return {
        id: Number(user.id),
        name: user.name,
    }
  }
}

