import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {
  tweet: Tweet;
  tweetString: string = '';
  localStorageKey = localStorage.getItem('currentUser')
  constructor() { }

  ngOnInit() {
  }

  postTweet(event) {
    console.log(this.tweetString)
  }
}
