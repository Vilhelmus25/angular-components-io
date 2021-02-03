import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

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

  selectUser(currentUser: User): void {

  }

  updateUser(currentUser: User): void {


    /* !!!!!!!!!      A user.service.ts-ben ezek már meg vannak írva, csak meg köll hívni inkább, hoppá !!!!!! */



    /* const index = this.usersList.findIndex(item => item.id === currentUser.id);
    this.usersList.splice(index, 1, currentUser);
    this.users.updateLocalStorage(); */
  }

  removeUser(currentUser: User): void {

    /*  console.log("object");
 
     const index = this.usersList.findIndex(item => item.id === currentUser.id);
     this.usersList.splice(index, 1);
     this.users.updateLocalStorage(); */
  }

}
