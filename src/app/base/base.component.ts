import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  tweets: Tweet[];
  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.tweetService.getTweets()
    .subscribe(
      tweets => this.tweets = tweets,
      error => console.log(error)
    );

  }

}
