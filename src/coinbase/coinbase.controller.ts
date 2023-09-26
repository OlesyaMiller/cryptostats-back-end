import { Controller, Get, Res, Req, UseGuards } from "@nestjs/common";
import { Response, Request } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CoinbaseAuthService } from "./coinbase-auth.service";

@Controller('coinbase')
export class CoinbaseController {
    constructor(private readonly coinbaseAuthService: CoinbaseAuthService) {}

    @Get('auth')
    @UseGuards(JwtAuthGuard)
    authorize(@Res() response: Response): void {
        this.coinbaseAuthService.authorize(response);
    }

    @Get('auth/callback')
    @UseGuards(JwtAuthGuard)
    handleCallback(@Req() request: Request, @Res() response: Response): void {
        this.coinbaseAuthService.handleCallback(request, response);
    }
}