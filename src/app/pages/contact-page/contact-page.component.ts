import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from 'src/app/service/contactService/contact.service';

import Contact from 'src/app/models/contact';
import User from 'src/app/models/user';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService: ContactService,) { }

  contacts: Contact[] = []

  @Input() user: User

  ngOnInit() {
    this.contactService.getContacts()
    this.contactService.contacts$.subscribe(contactsToReturn => {
      this.contacts = contactsToReturn
    })
  }

}
