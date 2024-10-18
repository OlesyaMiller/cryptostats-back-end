import { Response } from 'express';
import { UserResponse } from '../users/dto/response/user-response.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: UserResponse, response: Response): Promise<void>;
}
