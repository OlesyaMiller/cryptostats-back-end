import { UserRequestDto } from './dto/request/user-request.dto';
import { UsersRepository } from './users.repository';
import { UserResponseDto } from './dto/response/user-response.dto';
import { User } from './models/User';
import { CoinbaseAuth } from './models/CoinbaseAuth';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    createUser(userRequestDto: UserRequestDto): Promise<UserResponseDto>;
    updateUser(userId: string, data: Partial<User>): Promise<UserResponseDto>;
    private validateCreateUserRequest;
    validateUser(email: string, password: string): Promise<UserResponseDto>;
    getUserById(userId: string): Promise<UserResponseDto>;
    getCoinbaseAuth(userId: string): Promise<CoinbaseAuth>;
    private buildResponse;
}
