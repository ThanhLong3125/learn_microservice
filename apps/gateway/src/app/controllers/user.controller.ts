import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../../../../DTO/index.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data: CreateUserDto) {
    return await this.userService.createUser(data);
  }
}
