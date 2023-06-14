import { UsersService } from './users.service';
import { UserRequestDto } from './dto/request/user-request.dto';
import { UserResponseDto } from './dto/response/user-response.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(userRequestDto: UserRequestDto): Promise<UserResponseDto>;
    getUser(user: UserResponseDto): Promise<UserResponseDto>;
}
