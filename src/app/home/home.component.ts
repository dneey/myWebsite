import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  experienceDate: string;
  projects: any;
  constructor() { }

  ngOnInit() {
    this.experienceDate = moment('20170801', 'YYYYMMDD').fromNow();
    this.getPersonalProjects();
  }

  getPersonalProjects() {
    this.projects = [
      {
        'name': 'Handy Node',
        'repo': '', 'description': 'A mini node js framework with a laravel feel. Its main focus',
        'image': ''
      },
      {
        'name': 'Handy Node',
        'repo': '', 'description': 'A mini node js framework with a laravel feel. Its main focus',
        'image': ''

      },
    ];
  }

}
