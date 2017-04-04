import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class TweetService {
  tweets: Tweet[];
  constructor(private http: Http) { }


  getTweet(): Tweet[]{
    return this.tweets;
  }

  //CRUD functions
  postTweet(tweet: string) {
    return true
  }
}
