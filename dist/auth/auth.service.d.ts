import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UserResponse } from '../users/dto/response/user-response.dto';
export interface TokenPayload {
    userId: string;
}
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    constructor(configService: ConfigService, jwtService: JwtService);
    login(user: UserResponse, response: Response): Promise<void>;
}
