import { Component, OnInit, Input } from '@angular/core';
import Contact from 'src/app/models/contact';
import User from 'src/app/models/user';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  @Input() contact: Contact[]
  @Input() user: User[]

  constructor() { }

  ngOnInit() {
    console.log('move list component:', this.user);
    console.log('move list component:', this.contact);

  }

}
