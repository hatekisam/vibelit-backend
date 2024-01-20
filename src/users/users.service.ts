import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  getUser(id: string) {
    return { msg: `Here i am one user  ${id}` };
  }
  getUsers() {
    return { msg: 'Here we are users' };
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
