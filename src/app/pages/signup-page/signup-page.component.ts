import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/userService/user.service';


@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  signup(name) {
    console.log('name', name);
    this.userService.signup(name)
  }
  ngOnInit() {
  }

}
