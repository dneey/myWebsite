import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
email: string;
phone: string;
  constructor() { }

  ngOnInit() {
  }
getContact() {

    this.email = 'yarteyd@gmail.com';
    this.phone = '233 54 994 0617';
}
}
