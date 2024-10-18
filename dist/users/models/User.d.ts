import { Document } from 'mongoose';
import { CoinbaseAuth } from './CoinbaseAuth';
export declare class User extends Document {
    email: string;
    password: string;
    coinbaseAuth?: CoinbaseAuth;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User>;
