import _m0 from 'protobufjs/minimal';
import * as grpc from '@grpc/grpc-js';
export declare const protobufPackage = "user";
export interface Empty {
}
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
export declare const Empty: {
    encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Empty;
};
export declare const UserById: {
    encode(message: UserById, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserById;
};
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
};
export declare const UserList: {
    encode(message: UserList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserList;
};
export declare const UserServiceName = "user.UserService";
export interface UserServiceClient {
    GetUsers(request: Empty, metadata?: grpc.Metadata): Promise<UserList>;
    GetUserById(request: UserById, metadata?: grpc.Metadata): Promise<User>;
}
export interface UserServiceController {
    GetUsers(request: Empty, metadata?: grpc.Metadata): Promise<UserList> | Promise<UserList>;
    GetUserById(request: UserById, metadata?: grpc.Metadata): Promise<User> | Promise<User>;
}
export declare function UserServiceClientImpl(rpc: grpc.Client): UserServiceClient;
