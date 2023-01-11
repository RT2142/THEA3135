import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  posts=[
    {
      title: 'post 1',
      content: 'I like many different forms of art'
    },
    {
      title: 'post 2',
      content: 'My favorite types of art include music, visual art and i would consider some fictional writing an art'
    }
  ]
}
