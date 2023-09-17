import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  constructor(private userService:UserService){

  }
  sendRequest(){
    this.userService.saveUser();
  }

}
