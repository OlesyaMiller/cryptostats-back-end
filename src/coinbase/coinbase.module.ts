import { Module } from "@nestjs/common";
import { CoinbaseController } from './coinbase.controller';
import { CoinbaseAuthService } from "./coinbase-auth.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [CoinbaseController],
    providers: [CoinbaseAuthService]
})
export class CoinbaseModule {}