import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUserDecorator } from '../current-user.decorator';
import { UserResponseDto } from '../users/dto/response/user-response.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@CurrentUserDecorator() user: UserResponseDto,
                @Res({ passthrough: true }) response: Response,
            ): Promise<void> {

                await this.authService.login(user, response);
                response.send(user);
                
    }
}
