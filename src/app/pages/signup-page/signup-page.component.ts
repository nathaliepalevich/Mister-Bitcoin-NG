import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/userService/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  signup(name) {
    this.userService.signup(name)
    this.router.navigateByUrl(``);
  }
  ngOnInit() {
  }

}
