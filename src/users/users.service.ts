import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}
    
    async createUser(createUserRequest: CreateUserRequestDto): Promise<any> {
        return this.usersRepository.insertOne(createUserRequest);
    }
}