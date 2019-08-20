import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ContactService } from '../../service/contactService/contact.service';
import { UserService } from '../../service/userService/user.service'

import Contact from '../../models/contact'
import User from 'src/app/models/user';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  editContact(id) {
    this.router.navigateByUrl(`/contact/edit/${id}`);
    console.log('id', id);

  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ContactService: ContactService,
    private userService: UserService,
    private location: Location
  ) { }

  contact: Contact
  user: User[]


  deleteContact(id) {
    this.ContactService.deleteContact(id)
    this.location.back();
  }

  getUser() {
    this.userService.user$.subscribe(user => this.user = user)
  }

  getContact(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ContactService.getContactById(id)
      .subscribe(contact => this.contact = contact)
    this.ContactService.currContactId = this.contact._id
    console.log('tshi contavct', this.contact);

  }


  goBack(): void {
    this.location.back();
  }

  ngOnInit() {

    this.getUser()
    this.getContact()
  }
}
