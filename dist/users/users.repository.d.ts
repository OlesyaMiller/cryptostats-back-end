import { Model } from 'mongoose';
import { User } from './models/User';
export declare class UsersRepository {
    private readonly user;
    constructor(user: Model<User>);
    insertOne(data: Partial<User>): Promise<User>;
    updateOne(userId: string, data: Partial<User>): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findOneById(userId: string): Promise<User>;
}
