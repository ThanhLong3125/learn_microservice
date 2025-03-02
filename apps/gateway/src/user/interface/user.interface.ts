import { Observable } from 'rxjs';
import { CreateUserDto } from 'apps/user/DTO/createuser.dto';
import { User } from 'apps/user/DTO/user.dto';


export interface UserServiceGrpc {
  createUser(data: CreateUserDto): Observable<User>;
}
