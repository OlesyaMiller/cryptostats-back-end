import { UsersService } from './users.service';
import { CreateUserRequestDto } from './dto/request/create-user-request.dto';
import { UserResponseDto } from './dto/response/user-response.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserRequestDto: CreateUserRequestDto): Promise<UserResponseDto>;
}
