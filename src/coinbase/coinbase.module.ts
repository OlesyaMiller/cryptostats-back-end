import { Module } from "@nestjs/common";
import { CoinbaseController } from './coinbase.controller';
import { CoinbaseAuthService } from "./coinbase-auth.service";
import { HttpModule } from "@nestjs/axios";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [HttpModule, AuthModule],
    controllers: [CoinbaseController],
    providers: [CoinbaseAuthService]
})
export class CoinbaseModule {}