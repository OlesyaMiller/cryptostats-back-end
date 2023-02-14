import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRequestDto } from './dto/request/user-request.dto';
import { UserResponseDto } from './dto/response/user-response.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() userRequestDto: UserRequestDto): Promise<UserResponseDto> {
        return this.usersService.createUser(userRequestDto);
    }

}
