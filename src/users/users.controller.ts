import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.getUser(userId);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser() {
    return this.usersService.createUser();
  }

  @Patch('id')
  updateUser(@Param('id') userId: string) {
    return this.usersService.updateUser(userId);
  }

  @Delete('id')
  deleteUser(@Param('id') userId: string) {
    return this.usersService.deleteUser(userId);
  }
}
