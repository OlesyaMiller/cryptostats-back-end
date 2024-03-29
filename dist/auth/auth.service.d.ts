import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserResponseDto } from '../users/dto/response/user-response.dto';
import { Response } from 'express';
export interface TokenPayload {
    userId: string;
}
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    constructor(configService: ConfigService, jwtService: JwtService);
    login(user: UserResponseDto, response: Response): Promise<void>;
}
