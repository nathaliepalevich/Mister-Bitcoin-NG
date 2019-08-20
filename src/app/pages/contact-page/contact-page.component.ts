import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from 'src/app/service/contactService/contact.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/userService/user.service'
import Contact from 'src/app/models/contact';
import User from 'src/app/models/user';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(
    private router: Router,
    private contactService: ContactService,
    private userService: UserService
  ) { }

  contacts: Contact[]
  contact: Contact = new Contact()

  @Input() user: User

  addContact() {
    this.contactService.currContactId = ''
    this.router.navigateByUrl(`/contact/edit/`);
  }

  getContacts(): void {
    this.contactService.getContacts()
  }

  ngOnInit() {
    this.getContacts()
    this.contactService.contacts$.subscribe(contactsToReturn => {
      this.contacts = contactsToReturn
    })
  }

}
