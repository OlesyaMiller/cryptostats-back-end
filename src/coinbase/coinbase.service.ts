import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { CoinbaseAuthService } from "./coinbase-auth.service";

@Injectable()
export class CoinbaseService {
    constructor(
        private readonly httpService: HttpService,
        private readonly conbaseAuthService: CoinbaseAuthService
    ) {}
}