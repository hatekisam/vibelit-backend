import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
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
