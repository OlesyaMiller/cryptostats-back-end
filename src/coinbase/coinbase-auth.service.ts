import { Injectable } from "@nestjs/common";
import { Response } from "express";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class CoinbaseAuthService {
    constructor(private readonly configService: ConfigService) {}

    public authorize(res: Response): void {
        res.redirect(this.buildAuthorizeUrl().href);
        return;
    }

    private buildAuthorizeUrl() {
        const authorizeUrl = new URL('https://coinbase.com/oauth/authorize');
        authorizeUrl.searchParams.append('response_type', 'code');
        authorizeUrl.searchParams.append('client_id', this.configService.get('COINBASE_CLIENT_ID'));
        authorizeUrl.searchParams.append('redirect_uri', this.configService.get('COINBASE_REDIRECT_URI'));
        authorizeUrl.searchParams.append('scope', 'wallet:transactions:read,wallet:accounts:read');

        return authorizeUrl;
    }
}
