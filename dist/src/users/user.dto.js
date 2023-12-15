"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor(email, password, name, id) {
        this.email = email;
        this.password = password;
        if (name) {
            this.name = name;
        }
        if (id) {
            this.id = id;
        }
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=user.dto.js.map