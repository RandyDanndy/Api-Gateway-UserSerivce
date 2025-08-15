"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceName = exports.UserList = exports.User = exports.UserById = exports.Empty = exports.protobufPackage = void 0;
exports.UserServiceClientImpl = UserServiceClientImpl;
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const grpc = __importStar(require("@grpc/grpc-js"));
exports.protobufPackage = "user";
function createBaseEmpty() {
    return {};
}
exports.Empty = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmpty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
function createBaseUserById() {
    return { id: 0 };
}
exports.UserById = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserById();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
function createBaseUser() {
    return { id: 0, name: "" };
}
exports.User = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
function createBaseUserList() {
    return { users: [] };
}
exports.UserList = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.users) {
            exports.User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(exports.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
exports.UserServiceName = "user.UserService";
function UserServiceClientImpl(rpc) {
    return {
        GetUsers(request, metadata) {
            return new Promise((resolve, reject) => {
                rpc.makeUnaryRequest("/user.UserService/GetUsers", (arg) => Buffer.from(exports.Empty.encode(arg).finish()), exports.UserList.decode, request, metadata ?? new grpc.Metadata(), (error, response) => {
                    if (error) {
                        reject(error);
                    }
                    else if (response) {
                        resolve(response);
                    }
                    else {
                        reject(new Error('No response received'));
                    }
                });
            });
        },
        GetUserById(request, metadata) {
            return new Promise((resolve, reject) => {
                rpc.makeUnaryRequest("/user.UserService/GetUserById", (arg) => Buffer.from(exports.UserById.encode(arg).finish()), exports.User.decode, request, metadata ?? new grpc.Metadata(), (error, response) => {
                    if (error) {
                        reject(error);
                    }
                    else if (response) {
                        resolve(response);
                    }
                    else {
                        reject(new Error('No response received'));
                    }
                });
            });
        },
    };
}
//# sourceMappingURL=user.pd.js.map