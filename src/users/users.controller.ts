import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/current-user.decorator';
import { UsersService } from './users.service';
import { UserRequestDto } from './dto/request/user-request.dto';
import { UserResponseDto } from './dto/response/user-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() userRequestDto: UserRequestDto): Promise<UserResponseDto> {
        return this.usersService.createUser(userRequestDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async getUser(@CurrentUser() user: UserResponseDto): Promise<UserResponseDto> {
        return user;
    }

}
