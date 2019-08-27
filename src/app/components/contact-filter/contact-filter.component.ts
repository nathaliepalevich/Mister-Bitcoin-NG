import { Component, OnInit, Input } from '@angular/core';
import Contact from 'src/app/models/contact';
import { ContactService } from '../../service/contactService/contact.service'
@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  @Input() contacts: Array<Contact>

  searchContact(input) {
    const term = { term: input }
    this.contactService.getContacts(term)
  }

  ngOnInit() { }

}
