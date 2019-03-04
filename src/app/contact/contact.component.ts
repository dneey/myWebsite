import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  message = '';
  params = {
    'message' : this.message,
    'email' : this.email.value
  };
  getEmailErrorMessage() {

    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  constructor(private http: HttpService) { }

  sendEmail() {
    this.http.post(this.params)
    .subscribe(response => console.log(response))
    ;
  }
  ngOnInit() {
  }

}

