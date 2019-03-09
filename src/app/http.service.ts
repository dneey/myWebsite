import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private http: HttpClient) { }

  private url = 'https://neelo-43a82.firebaseapp.com/sendEmail';

  post(params) {
    return this.http.post(this.url, params).pipe();
  }
}
