"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const users_repository_1 = require("./users.repository");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUser(createUserRequest) {
        await this.validateCreateUserRequest(createUserRequest);
        const user = await this.usersRepository.insertOne(Object.assign(Object.assign({}, createUserRequest), { password: await (0, bcrypt_1.hash)(createUserRequest.password, 10) }));
        return this.buildResponse(user);
    }
    async updateUser(userId, data) {
        const user = await this.usersRepository.updateOne(userId, data);
        if (!user) {
            throw new common_1.NotFoundException(`User not found by _id: '${userId}'.`);
        }
        return this.buildResponse(user);
    }
    async validateCreateUserRequest(createUserRequest) {
        const user = await this.usersRepository.findOneByEmail(createUserRequest.email);
        if (user) {
            throw new common_1.BadRequestException('This email already exists.');
        }
    }
    async validateUser(email, password) {
        const user = await this.usersRepository.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException(`User does not exist by email: '${email}'.`);
        }
        const passwordIsValid = await (0, bcrypt_1.compare)(password, user.password);
        if (!passwordIsValid) {
            throw new common_1.UnauthorizedException('Credentials are invalid');
        }
        return this.buildResponse(user);
    }
    async getUserById(userId) {
        const user = await this.usersRepository.findOneById(userId);
        if (!user) {
            throw new common_1.NotFoundException(`User not found by _id: '${userId}'.`);
        }
        return this.buildResponse(user);
    }
    async getCoinbaseAuth(userId) {
        const user = await this.usersRepository.findOneById(userId);
        if (!user) {
            throw new common_1.NotFoundException(`User not found by _id: '${userId}'.`);
        }
        if (!user.coinbaseAuth) {
            throw new common_1.UnauthorizedException(`User with _id: '${userId}' has not authorized Coinbase.`);
        }
        return user.coinbaseAuth;
    }
    buildResponse(user) {
        return {
            _id: user._id.toHexString(),
            email: user.email,
            isCoinbaseAuthorized: !!user.coinbaseAuth,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map