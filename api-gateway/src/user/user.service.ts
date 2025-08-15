import { UserById } from '../constants/user.pd';
import { Inject, Injectable, OnModuleInit, Param } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { USER_PACKAGE } from '../constants/grpc.constants';
import {
  Empty,
  User,
  UserList,
  UserServiceClient,
  UserServiceName,
} from '../constants/user.pd';

@Injectable()
export class UserService implements OnModuleInit {
  private userService: UserServiceClient;

  constructor(@Inject(USER_PACKAGE) private client: ClientGrpc) {}

  onModuleInit() {
    this.userService =
      this.client.getService<UserServiceClient>(UserServiceName);
  }
  getAllUsers(): Promise<UserList> {
    return this.userService.GetUsers({} as Empty);
  }
  getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.GetUserById({ id: Number(id) } as UserById);
  }
}
