import { CreateUserRequestDto } from './dto/request/create-user-request.dto';
import { UsersRepository } from './users.repository';
import { UserResponseDto } from './dto/response/user-response.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    createUser(createUserRequestDto: CreateUserRequestDto): Promise<UserResponseDto>;
    private validateCreateUserRequest;
    private buildResponse;
}
