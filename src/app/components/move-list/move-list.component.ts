import { Component, OnInit, Input } from '@angular/core';
import Contact from 'src/app/models/contact';
import User from 'src/app/models/user';
import Move from 'src/app/models/move';
import { UserService } from '../../service/userService/user.service'
@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  // @Input() contact: Contact[]
  @Input() user: User[]
  @Input() moves: Move[]

  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userService.moves$.subscribe(movesToShow => this.moves = movesToShow)
  }

}
