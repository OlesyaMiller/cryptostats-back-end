import { UserRequestDto } from './dto/request/user-request.dto';
import { UsersRepository } from './users.repository';
import { UserResponseDto } from './dto/response/user-response.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    createUser(userRequestDto: UserRequestDto): Promise<UserResponseDto>;
    private validateCreateUserRequest;
    validateUser(email: string, password: string): Promise<UserResponseDto>;
    private buildResponse;
}
