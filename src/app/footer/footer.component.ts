import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
contact: any;

  constructor() { }

  ngOnInit() {
    const contact = new Contact;
    this.contact = contact.getContactDetails();
  }

}
