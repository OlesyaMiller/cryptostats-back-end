import { CreateUserRequest } from './dto/request/user-request.dto';
import { UserResponse } from './dto/response/user-response.dto';
import { CoinbaseAuth } from './models/CoinbaseAuth';
import { User } from './models/User';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    createUser(createUserRequest: CreateUserRequest): Promise<UserResponse>;
    updateUser(userId: string, data: Partial<User>): Promise<UserResponse>;
    private validateCreateUserRequest;
    validateUser(email: string, password: string): Promise<UserResponse>;
    getUserById(userId: string): Promise<UserResponse>;
    getCoinbaseAuth(userId: string): Promise<CoinbaseAuth>;
    private buildResponse;
}
