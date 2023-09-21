import { Response } from "express";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
export declare class CoinbaseAuthService {
    private readonly configService;
    private readonly httpService;
    constructor(configService: ConfigService, httpService: HttpService);
    authorize(res: Response): void;
    private buildAuthorizeUrl;
    handleCallback(req: Request, res: Response): void;
    private getTokensFromCode;
}
