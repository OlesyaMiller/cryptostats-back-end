"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinbaseService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const coinbase_auth_service_1 = require("./coinbase-auth.service");
const rxjs_1 = require("rxjs");
let CoinbaseService = class CoinbaseService {
    constructor(httpService, coinbaseAuthService) {
        this.httpService = httpService;
        this.coinbaseAuthService = coinbaseAuthService;
    }
    async getPrimaryAccountTransactions(userId) {
        const primaryAccount = await this.getPrimaryAccount(userId);
        return this.getAccountTransactions(primaryAccount.id, userId);
    }
    async getPrimaryAccount(userId) {
        try {
            const response$ = this.httpService.get('https://api.coinbase.com/v2/accounts', {
                headers: await this.getHeaders(userId),
            });
            const response = await (0, rxjs_1.lastValueFrom)(response$);
            return response.data.data.find(account => account.primary);
        }
        catch (err) {
            throw err.response.data;
        }
    }
    async getAccountTransactions(accountId, userId) {
        try {
            const response$ = this.httpService.get(`https://api.coinbase.com/v2/accounts/${accountId}/transactions`, {
                headers: await this.getHeaders(userId),
            });
            const response = await (0, rxjs_1.lastValueFrom)(response$);
            return response.data;
        }
        catch (err) {
            throw err.response.data;
        }
    }
    async getHeaders(userId) {
        return {
            Authorization: `Bearer ${await this.coinbaseAuthService.getAccessToken(userId)}`,
        };
    }
};
CoinbaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        coinbase_auth_service_1.CoinbaseAuthService])
], CoinbaseService);
exports.CoinbaseService = CoinbaseService;
//# sourceMappingURL=coinbase.service.js.map