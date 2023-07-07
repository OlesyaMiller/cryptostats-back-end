import { Controller, Get, Res, UseGuards } from "@nestjs/common";
import { Response } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller('coinbase')
export class CoinbaseController {
    @Get('auth')
    @UseGuards(JwtAuthGuard)
    authorize(@Res() response: Response): void {}
}