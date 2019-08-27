import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ContactService } from '../../service/contactService/contact.service';
import { UserService } from '../../service/userService/user.service'

import Contact from '../../models/contact'
import User from 'src/app/models/user';
import Move from 'src/app/models/move';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  editContact(id) {
    this.router.navigateByUrl(`/contact/edit/${id}`);

  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ContactService: ContactService,
    private userService: UserService,
    private location: Location
  ) { }

  contact: Contact
  user: User
  moves: Move[]

  deleteContact(id) {
    this.ContactService.deleteContact(id)
    this.location.back();
  }

  getUser() {
    this.userService.getUser(this.contact._id)
    // this.userService.user$.subscribe(user => this.user = user)
  }

  getContact(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ContactService.getContactById(id)
      .subscribe(contact => this.contact = contact)
    
  }



  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getContact()
    this.ContactService.currContactId = this.contact._id
    this.userService.moves$.subscribe(movesToShow => {
      this.moves = movesToShow
    })
    this.getUser()

  }
}
