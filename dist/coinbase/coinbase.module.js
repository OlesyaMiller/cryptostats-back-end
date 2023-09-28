"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinbaseModule = void 0;
const common_1 = require("@nestjs/common");
const coinbase_controller_1 = require("./coinbase.controller");
const coinbase_auth_service_1 = require("./coinbase-auth.service");
const axios_1 = require("@nestjs/axios");
const auth_module_1 = require("../auth/auth.module");
const users_module_1 = require("../users/users.module");
let CoinbaseModule = class CoinbaseModule {
};
CoinbaseModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, auth_module_1.AuthModule, users_module_1.UsersModule],
        controllers: [coinbase_controller_1.CoinbaseController],
        providers: [coinbase_auth_service_1.CoinbaseAuthService]
    })
], CoinbaseModule);
exports.CoinbaseModule = CoinbaseModule;
//# sourceMappingURL=coinbase.module.js.map