import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: string;
  phone: string;
  experienceDate: string;
  projects: any;
  skills: any;
  constructor() { }

  ngOnInit() {
    this.experienceDate = moment('20170801', 'YYYYMMDD').fromNow();
    this.getSkills();
    this.getPersonalProjects();
    this.getContactInfo();
  }
  getContactInfo() {
    this.email = 'yarteyd@gmail.com';
    this.phone = '233 54 994 0617';
  }

  getPersonalProjects() {
    this.projects = [
      {
        'name': 'Handy Node',
        'repo': 'https://github.com/Deenee/handyNode',
        'description': 'A mini node js framework with a laravel feel. Its main focus was to help me build apis in node js as quickly as possible.',
        'image': ''
      },
      {
        'name': 'Mean Auth',
        'repo': '',
        'description': 'A mini node js framework with a laravel feel. Its main focus',
        'image': ''

      },
    ];
  }

  getSkills() {
    this.skills = [
      {
        'name' : 'laravel'
      },
      {
        'name' : 'lumen'
      },
      {
        'name' : 'express js'
      },
      {
        'name' : 'rabbit mq'
      },
      {
        'name' : 'node js'
      },
      {
        'name' : 'api development'
      },
      {
        'name' : 'angular'
      }
    ];
  }

}
