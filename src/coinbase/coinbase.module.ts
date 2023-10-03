import { Module } from "@nestjs/common";
import { CoinbaseController } from './coinbase.controller';
import { CoinbaseAuthService } from "./coinbase-auth.service";
import { HttpModule } from "@nestjs/axios";
import { AuthModule } from "../auth/auth.module";
import { UsersModule } from "../users/users.module";

@Module({
    imports: [HttpModule, AuthModule, UsersModule],
    controllers: [CoinbaseController],
    providers: [CoinbaseAuthService]
})
export class CoinbaseModule {}