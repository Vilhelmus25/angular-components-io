import { Component } from '@angular/core';
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

  constructor(private users: UserService/* , private userSelect: UserListComponent */) {
    //console.log(this.usersList[0]);

  }
  select(currentUser: User): void {
    currentUser = this.currentUser;
  }

  update(currentUser: User): void {
    this.users.updateUser(currentUser);
  }

  remove(): void {
    this.users.removeUser(this.currentUser);
  }

}
