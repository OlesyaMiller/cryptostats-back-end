import { Controller, Get, Res, Req, UseGuards } from "@nestjs/common";
import { Response, Request } from "express";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CoinbaseAuthService } from "./coinbase-auth.service";
import { CurrentUser } from "../auth/current-user.decorator";
import { UserResponse } from "../users/dto/response/user-response.dto";
import { CoinbaseService } from "./coinbase.service";

@Controller('coinbase')
export class CoinbaseController {
    constructor(private readonly coinbaseAuthService: CoinbaseAuthService,
        private readonly coinbaseService: CoinbaseService,
    ) {}

    @Get('auth')
    @UseGuards(JwtAuthGuard)
    authorize(@Res() response: any): void {
        this.coinbaseAuthService.authorize(response); 
    }
  
    @Get('auth/callback')
    @UseGuards(JwtAuthGuard)
    handleCallback(@Req() request: Request, @Res() response: Response): void { // any?
        this.coinbaseAuthService.handleCallback(request, response);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    getCoinbaseData(@CurrentUser() user: UserResponse): Promise<any> { 
        return this.coinbaseService.getPrimaryAccountTransactions(user._id);
    }
}