import { ConfigService } from '@nestjs/config';
export declare class EncryptionService {
    private readonly configService;
    private readonly algorithm;
    constructor(configService: ConfigService);
    encrypt(data: string): string;
    decrypt(data: string): string;
}
