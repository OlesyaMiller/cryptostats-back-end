import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { CoinbaseAuthService } from "./coinbase-auth.service";

@Injectable()
export class CoinbaseService {
    constructor(
        private readonly httpService: HttpService,
        private readonly conbaseAuthService: CoinbaseAuthService
    ) {}

    async gerPrimartAccountTransactions(userId: string): Promise<any> {

    }

    private async gerPrimartAccount(userId: string): Promise<any> {
        try {
            const response$ = this.httpService.get(
                'https://api.coinbase.com/v2/accounts'
            )
        } catch {}
    }
}