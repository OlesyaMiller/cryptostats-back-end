import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserRequestDto } from './dto/request/user-request.dto';
import { UsersRepository } from './users.repository';
import { hash, compare } from 'bcrypt';
import { UserResponseDto } from './dto/response/user-response.dto';
import { User } from './models/User';
import { CoinbaseAuth } from './models/CoinbaseAuth';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}
    
    async createUser(userRequestDto: UserRequestDto): Promise<UserResponseDto> {

        await this.validateCreateUserRequest(userRequestDto);

        const user = await this.usersRepository.insertOne({
            ...userRequestDto,
            password: await hash(userRequestDto.password, 10),
        });
        return this.buildResponse(user)
    }

    async updateUser(userId: string, data: Partial<User>): Promise<UserResponseDto> {
        const user = await this.usersRepository.updateOne(userId, data);
        if (!user) {
            throw new NotFoundException(`User not found by _id: '${userId}'.`);
        }
        return this.buildResponse(user);
    }

    private async validateCreateUserRequest(userRequestDto: UserRequestDto): Promise<void> {

        const user = await this.usersRepository.findOnebyEmail(
            userRequestDto.email,
        );

        if (user) {
            throw new BadRequestException('This email already exists.')
        }
    }

    async validateUser(email: string, password: string): Promise<UserResponseDto> {
        const user = await this.usersRepository.findOnebyEmail(email);

        if(!user) {
            throw new NotFoundException(`User does not exist by email: '${email}'.`);
        }

        const passwordIsValid = await compare(password, user.password);

        if(!passwordIsValid) {
            throw new UnauthorizedException('Credentials are invalid');
        }
        
        return this.buildResponse(user);
    };

    async getUserById(userId: string): Promise<UserResponseDto> {
        const user = await this.usersRepository.findOneById(userId);

        if (!user) {
          throw new NotFoundException(`User not found by _id: '${userId}'.`);
        }
        
        return this.buildResponse(user);
    }

    async getCoinbaseAuth(userId: string): Promise<CoinbaseAuth> {
        const user = await this.usersRepository.findOneById(userId);

        if(!user) {
            throw new NotFoundException(`User not found by _id: '${userId}'.`);
        }

        if (!user.coinbaseAuth) {
            throw new UnauthorizedException(
                `User with _id: '${userId}' has not authorized Coinbase.`
            );
        }

        return user.coinbaseAuth;
    }

    private buildResponse(user: User): UserResponseDto {
        return {
            _id: user._id.toHexString(),
            email: user.email,
        }
    }
}