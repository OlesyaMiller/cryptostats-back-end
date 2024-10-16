import { Request, Response } from "express";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { UsersService } from "src/users/users.service";
import { EncryptionService } from "src/auth/encryption.service";
export declare class CoinbaseAuthService {
    private readonly configService;
    private readonly httpService;
    private readonly usersService;
    private readonly encryptionService;
    constructor(configService: ConfigService, httpService: HttpService, usersService: UsersService, encryptionService: EncryptionService);
    authorize(res: Response): void;
    private buildAuthorizeUrl;
    handleCallback(req: Request, res: Response): void;
    private getTokensFromCode;
    private updateUserCoinbaseAuth;
}
