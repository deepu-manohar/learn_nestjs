"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = void 0;
class UserResponse {
    constructor(email, name, id) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.email = email;
    }
}
exports.UserResponse = UserResponse;
//# sourceMappingURL=user.responses.js.map