"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserDecorator = void 0;
const common_1 = require("@nestjs/common");
const getCurrentUserByContext = (context) => {
    return context.switchToHttp().getRequest().user;
};
exports.CurrentUserDecorator = (0, common_1.createParamDecorator)((_data, context) => {
    getCurrentUserByContext(context);
});
//# sourceMappingURL=current-user.decorator.js.map