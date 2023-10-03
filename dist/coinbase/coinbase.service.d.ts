import { HttpService } from "@nestjs/axios";
import { CoinbaseAuthService } from "./coinbase-auth.service";
export declare class CoinbaseService {
    private readonly httpService;
    private readonly conbaseAuthService;
    constructor(httpService: HttpService, conbaseAuthService: CoinbaseAuthService);
    gerPrimartAccountTransactions(userId: string): Promise<any>;
    private gerPrimartAccount;
}
