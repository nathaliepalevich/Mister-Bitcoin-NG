import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contactService/contact.service';
import { Location } from '@angular/common';
import Contact from 'src/app/models/contact';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  contactForm: FormGroup
  contact = new Contact
  constructor(private ContactService: ContactService, private location: Location) { }

  onSubmit() {
    this.ContactService.saveContact(this.contactForm.value)
    this.location.back();
  }

  fillForm() {
    const contactId = this.ContactService.currContactId
    if (!contactId) return
    this.ContactService.getContactById(contactId)
      .subscribe(contact => this.contact = contact)

  }

  ngOnInit() {
    this.fillForm()
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, Validators.required),
      email: new FormControl(this.contact.email, Validators.required),
      phone: new FormControl(this.contact.phone,
        [
          Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{4}"),
          Validators.required
        ]),
    })
  }

}
