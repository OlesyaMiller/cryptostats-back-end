import { Module } from "@nestjs/common";
import { CoinbaseController } from './coinbase.controller';

@Module({
    controllers: [CoinbaseController],
})
export class CoinbaseModule {}