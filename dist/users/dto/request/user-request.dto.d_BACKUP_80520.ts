<<<<<<< HEAD:dist/users/dto/request/user-request.dto.d.ts
export interface UserRequestDto {
    email: string;
    password: string;
}
=======
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequest {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
>>>>>>> users-controller-and-service:src/users/dto/request/create-user-request.dto.ts
