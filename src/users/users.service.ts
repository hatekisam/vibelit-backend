import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  getUser(id: string) {
    return { msg: `Here i am one user  ${id}` };
  }
  getUsers(params: {
    skip?: number;
    take?: number;
    where?: Prisma.UserWhereInput;
    cursor?: Prisma.UserWhereUniqueInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  createUser() {
    return { msg: 'Guess what i was created' };
  }

  updateUser(id: string) {
    return { msg: ` ${id} was updated` };
  }

  deleteUser(id: string) {
    return { msg: `${id} was deleted` };
  }
}
