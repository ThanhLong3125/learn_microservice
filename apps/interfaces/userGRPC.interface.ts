import { Observable } from 'rxjs';
import { CreateUserDto, User } from '../DTO/index.dto';


export interface UserServiceGrpc {
  createUser(data: CreateUserDto): Observable<User>;
}
