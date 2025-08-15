import { Controller, Get, Param } from '@nestjs/common';
import { User, UserList } from '../constants/user.pd';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): Promise<UserList> {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }
}
