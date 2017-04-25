import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.scss']
})
export class TweetFormComponent implements OnInit {
  model: any = {};
  postingTweet = false;
  constructor(private tweetService: TweetService) { }

  ngOnInit() {
  }

  postTweet(event){
    event.preventDefault();
    this.postingTweet = true;
    console.log(this.model.tweetString);
    this.tweetService.postTweet(this.model.tweetString)
    .subscribe(result => {
      if (result) {
        this.postingTweet = false;
        this.model.tweetString = ''
      }
    })
  }

}
