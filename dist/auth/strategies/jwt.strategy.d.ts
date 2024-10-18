import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserResponse } from '../../users/dto/response/user-response.dto';
import { UsersService } from '../../users/users.service';
import { TokenPayload } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(configService: ConfigService, usersService: UsersService);
    validate(payload: TokenPayload): Promise<UserResponse>;
}
export {};
