import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../service/userService/user.service'

import Contact from 'src/app/models/contact';
import User from 'src/app/models/user';

import Move from 'src/app/models/move';
@Component({
  selector: 'transfer-found',
  templateUrl: './transfer-found.component.html',
  styleUrls: ['./transfer-found.component.scss']
})
export class TransferFoundComponent implements OnInit {

  @Input() contact: Contact
  @Input() user: User
  moves: Move[] = []
  constructor(private userService: UserService) { }


  onTransferCoins(amount) {
    this.userService.addMove(this.contact, amount)
  }
  
  ngOnInit() {
    this.userService.currContactId = this.contact
    this.userService.moves$.subscribe(movesToShow => this.moves = movesToShow)
    

  }
}
