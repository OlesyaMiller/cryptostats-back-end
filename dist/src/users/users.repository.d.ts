import { User } from "./models/User";
import { Model } from "mongoose";
export declare class UsersRepository {
    private readonly user;
    constructor(user: Model<User>);
    insertOne(data: Partial<User>): Promise<User>;
    findOnebyEmail(email: string): Promise<User>;
    findOneById(userId: string): Promise<User>;
}
