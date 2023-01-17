import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/request/create-user-request.dto';
import { UsersRepository } from './users.repository';
import { hash } from 'bcrypt';
import { UserResponseDto } from './dto/response/user-response.dto';
import { User } from './models/User';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}
    
    async createUser(createUserRequestDto: CreateUserRequestDto): Promise<UserResponseDto> {
        await this.validateCreateUserRequest(createUserRequestDto);
        const user = await this.usersRepository.insertOne({
            ...createUserRequestDto,
            password: await hash(createUserRequestDto.password, 10),
        });
        return this.buildResponse(user)
    }

    private async validateCreateUserRequest(createUserRequestDto: CreateUserRequestDto): Promise<void> {
        const user = await this.usersRepository.findOnebyEmail(createUserRequestDto.email);
        if (user) {
            throw new BadRequestException('This email already exists.')
        }
    }

    private buildResponse(user: User): UserResponseDto {
        return {
            _id: user._id.toHexString(),
            email: user.email,
        }
    }
}