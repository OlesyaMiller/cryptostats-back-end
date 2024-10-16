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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinbaseController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const coinbase_auth_service_1 = require("./coinbase-auth.service");
let CoinbaseController = class CoinbaseController {
    constructor(coinbaseAuthService) {
        this.coinbaseAuthService = coinbaseAuthService;
    }
    authorize(response) {
        this.coinbaseAuthService.authorize(response);
    }
    handleCallback(request, response) {
        this.coinbaseAuthService.handleCallback(request, response);
    }
};
exports.CoinbaseController = CoinbaseController;
__decorate([
    (0, common_1.Get)('auth'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoinbaseController.prototype, "authorize", null);
__decorate([
    (0, common_1.Get)('auth/callback'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CoinbaseController.prototype, "handleCallback", null);
exports.CoinbaseController = CoinbaseController = __decorate([
    (0, common_1.Controller)('coinbase'),
    __metadata("design:paramtypes", [coinbase_auth_service_1.CoinbaseAuthService])
], CoinbaseController);
//# sourceMappingURL=coinbase.controller.js.map