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
exports.CoinbaseAuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const users_service_1 = require("../users/users.service");
const encryption_service_1 = require("../auth/encryption.service");
let CoinbaseAuthService = class CoinbaseAuthService {
    constructor(configService, httpService, usersService, encryptionService) {
        this.configService = configService;
        this.httpService = httpService;
        this.usersService = usersService;
        this.encryptionService = encryptionService;
    }
    authorize(res) {
        res.redirect(this.buildAuthorizeUrl().href);
        return;
    }
    buildAuthorizeUrl() {
        const authorizeUrl = new URL('https://coinbase.com/oauth/authorize');
        authorizeUrl.searchParams.append('response_type', 'code');
        authorizeUrl.searchParams.append('client_id', this.configService.get('COINBASE_CLIENT_ID'));
        authorizeUrl.searchParams.append('redirect_uri', this.configService.get('COINBASE_REDIRECT_URI'));
        authorizeUrl.searchParams.append('scope', 'wallet:transactions:read,wallet:accounts:read');
        return authorizeUrl;
    }
    handleCallback(req, res) {
        const { code } = req.query;
        const { user } = req;
        this.getTokensFromCode(code).subscribe(async (tokensResponse) => {
            await this.updateUserCoinbaseAuth(tokensResponse.data, user._id);
            res.redirect(this.configService.get('AUTH_REDIRECT_URI'));
        });
    }
    getTokensFromCode(code) {
        return this.httpService.post('https://api.coinbase.com/oauth/token', {
            grant_type: 'authorization_code',
            code,
            client_id: this.configService.get('COINBASE_CLIENT_ID'),
            client_secret: this.configService.get('COINBASE_CLIENT_SECRET'),
            redirect_uri: this.configService.get('COINBASE_REDIRECT_URI'),
        });
    }
    async updateUserCoinbaseAuth(tokenPayload, userId) {
        const { access_token: accessToken, refresh_token: refreshToken, expires_in: expiresIn } = tokenPayload;
        const expires = new Date();
        expires.setSeconds(expires.getSeconds() + expiresIn);
        await this.usersService.updateUser(userId, {
            coinbaseAuth: {
                accessToken: this.encryptionService.encrypt(accessToken),
                refreshToken: this.encryptionService.encrypt(refreshToken),
                expires,
            }
        });
    }
};
CoinbaseAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService,
        users_service_1.UsersService,
        encryption_service_1.EncryptionService])
], CoinbaseAuthService);
exports.CoinbaseAuthService = CoinbaseAuthService;
//# sourceMappingURL=coinbase-auth.service.js.map