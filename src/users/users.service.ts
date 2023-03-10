import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRequestDto } from './dto/request/user-request.dto';
import { UsersRepository } from './users.repository';
import { hash } from 'bcrypt';
import { UserResponseDto } from './dto/response/user-response.dto';
import { User } from './models/User';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}
    
    async createUser(userRequestDto: UserRequestDto): Promise<UserResponseDto> {
        await this.validateUserRequest(userRequestDto);
        const user = await this.usersRepository.insertOne({
            ...userRequestDto,
            password: await hash(userRequestDto.password, 10),
        });
        return this.buildResponse(user)
    }

    private async validateUserRequest(userRequestDto: UserRequestDto): Promise<void> {
        const user = await this.usersRepository.findOnebyEmail(userRequestDto.email);
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