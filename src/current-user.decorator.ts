import { ExecutionContext, createParamDecorator }from '@nestjs/common';
import { UserResponseDto } from './users/dto/response/user-response.dto';

const getCurrentUserByContext = (context: ExecutionContext): UserResponseDto => {
    return context.switchToHttp().getRequest().user;
}

export const CurrentUser = createParamDecorator((_data: unknown, context: ExecutionContext) => {
    getCurrentUserByContext(context)
});