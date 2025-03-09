import { Observable } from 'rxjs';
import { CreateUserDto } from '../DTO/index.dto';

export interface UserServiceGrpc {
  createUser(data: CreateUserDto): Observable<Object>;
}
