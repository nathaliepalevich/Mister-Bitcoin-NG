import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contactService/contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Mister-Bitcoin';

  constructor(private contactService: ContactService,   private router: Router, ) { }

  addContact() {
    this.contactService.currContactId = ''
    this.router.navigateByUrl(`/contact/edit/`);
  }

  ngOnInit() {
  }

}
