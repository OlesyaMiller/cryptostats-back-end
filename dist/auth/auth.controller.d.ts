import { AuthService } from './auth.service';
import { UserResponseDto } from '../users/dto/response/user-response.dto';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: UserResponseDto, response: Response): Promise<void>;
}
