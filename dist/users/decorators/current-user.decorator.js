"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
(data, context) => {
    const request = context.switchToHttp().getRequest();
    console.log(request.session.userId);
    return 'hi i am here';
};
//# sourceMappingURL=current-user.decorator.js.map