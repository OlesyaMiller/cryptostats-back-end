import { HttpService } from "@nestjs/axios";
import { CoinbaseAuthService } from "./coinbase-auth.service";
export declare class CoinbaseService {
    private readonly httpService;
    private readonly coinbaseAuthService;
    constructor(httpService: HttpService, coinbaseAuthService: CoinbaseAuthService);
    getPrimaryAccountTransactions(userId: string): Promise<any>;
    private getPrimaryAccount;
    private getAccountTransactions;
    private getHeaders;
}
