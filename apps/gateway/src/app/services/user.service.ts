import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { UserServiceGrpc} from '../../../../interfaces/index.dto';
import { CreateUserDto } from '../../../../DTO/index.dto';

@Injectable()
export class UserService implements OnModuleInit {
  private userServiceGrpc: UserServiceGrpc;
  constructor(@Inject('UserService') private readonly client: ClientGrpc,
  @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,) {}

  onModuleInit() {
    this.userServiceGrpc = this.client.getService<UserServiceGrpc>('UserService');
  }

async createUser(data: CreateUserDto) {
    this.kafkaClient.emit('user.notify', data.name);
    return await firstValueFrom(this.userServiceGrpc.createUser(data))
}
}

