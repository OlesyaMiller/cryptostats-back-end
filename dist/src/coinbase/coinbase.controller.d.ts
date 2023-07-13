import { CoinbaseAuthService } from "./coinbase-auth.service";
export declare class CoinbaseController {
    private readonly coinbaseAuthService;
    constructor(coinbaseAuthService: CoinbaseAuthService);
    authorize(response: Response): void;
    handleCallback(request: Request, response: Response): void;
}
