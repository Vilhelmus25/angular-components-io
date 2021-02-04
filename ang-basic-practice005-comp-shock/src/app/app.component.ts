import { Component, Input } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  usersList: User[] = this.users.list;
  currentUser: User = new User();

  constructor(private users: UserService) {
    //console.log(this.usersList[0]);

  }
  select(user: User): void {
    this.currentUser = user;
  }

  update(user: User): void {
    this.users.updateUser(user);
  }

  remove(user: User): void {
    this.users.removeUser(user);

  }

}
