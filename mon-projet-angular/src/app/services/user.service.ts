import { Subject } from 'rxjs';
import { User } from '../models/user.model';

export class UserService {
  private users: User[] = [
    {
      firstName: 'james',
      lastName: 'Bond',
      email: 'jamesBond@gmail.com',
      drinkPreference: 'Coca',
      hobbies: ['Coder', 'La desgustation de cafe'],
    },
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
