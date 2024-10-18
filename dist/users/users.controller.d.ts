import { CreateUserRequest } from './dto/request/user-request.dto';
import { UserResponse } from './dto/response/user-response.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserRequest: CreateUserRequest): Promise<UserResponse>;
    getUser(user: UserResponse): Promise<UserResponse>;
}
