import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserResponseDto } from '../users/dto/response/user-response.dto';
import { Response } from 'express';

export interface TokenPayload {
    userId: string;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService
    ) {}

    async login(user: UserResponseDto, response: Response): Promise<void> {
        console.log('user id:', user._id);
        
        const tokenPayload: TokenPayload = {
            userId: user._id
        };

        const expires = new Date();
        expires.setSeconds(
            expires.getSeconds() + this.configService.get('JWT_EXPIRATION_TIME')
        );

        const token = this.jwtService.sign(tokenPayload);

        response.cookie(
            'Authentication', 
            token, 
            {
                httpOnly: true,
                expires
            }
        );
    }
}
