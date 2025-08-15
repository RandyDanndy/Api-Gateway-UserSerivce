/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import * as grpc from '@grpc/grpc-js';
    
export const protobufPackage = "user";

export interface Empty {}

export interface UserById {
  id: number;
}

export interface User {
  id: number;
  name: string;
}

export interface UserList {
  users: User[];
}

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

function createBaseUserById(): UserById {
  return { id: 0 };
}

export const UserById = {
  encode(message: UserById, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserById {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

function createBaseUser(): User {
  return { id: 0, name: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

function createBaseUserList(): UserList {
  return { users: [] };
}

export const UserList = {
  encode(message: UserList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const UserServiceName = "UserService";

export interface UserServiceClient {
  GetUsers(request: Empty, metadata?: grpc.Metadata): Promise<UserList>;
  GetUserById(request: UserById, metadata?: grpc.Metadata): Promise<User>;
}

export interface UserServiceController {
  GetUsers(request: Empty, metadata?: grpc.Metadata): Promise<UserList> | Promise<UserList>;
  GetUserById(request: UserById, metadata?: grpc.Metadata): Promise<User> | Promise<User>;
}

export function UserServiceClientImpl(rpc: grpc.Client): UserServiceClient {
  return {
    GetUsers(request: Empty, metadata?: grpc.Metadata): Promise <UserList> {
      return new Promise((resolve, reject) => {
        rpc.makeUnaryRequest(
            "/user.UserService/GetUsers",
            (arg) => Buffer.from(Empty.encode(arg).finish()),
          UserList.decode,
          request,
          metadata ?? new grpc.Metadata(),
          (error, response) => {
            if (error) {
              reject(error);
            } else if (response) {
              resolve(response);
            } else {
                reject(new Error('No response received'));
            }
          },
        );
      });
    },

    GetUserById(request: UserById, metadata?: grpc.Metadata): Promise<User> {
      return new Promise((resolve, reject) => {
        rpc.makeUnaryRequest(
          "/user.UserService/GetUserById",
          (arg) => Buffer.from(UserById.encode(arg).finish()),
          User.decode,
          request,
          metadata ?? new grpc.Metadata(),
          (error, response) => {
            if (error) {
              reject(error);
            } else if (response) {
              resolve(response);
            } else {
                reject(new Error('No response received'));
            }
          }
        );
      });
    },
  };
}