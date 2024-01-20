import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.getUser(userId);
  }

  @Get()
  getUsers(
    @Query('skip') skip?: number,
    @Query('skip') take?: number,
    @Query('where') where?: Prisma.UserWhereInput,
    @Query('cursor') cursor?: Prisma.UserWhereUniqueInput,
    @Query('orderBy') orderBy?: Prisma.UserOrderByWithRelationInput,
  ) {
    const params = { skip, take, where, cursor, orderBy };
    return this.usersService.getUsers(params);
  }

  @Post()
  createUser() {
    return this.usersService.createUser();
  }

  @Patch(':id')
  updateUser(@Param('id') userId: string) {
    return this.usersService.updateUser(userId);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return this.usersService.deleteUser(userId);
  }
}
