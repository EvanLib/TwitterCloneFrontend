import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TweetService {
  tweets: Tweet[];
  constructor(private http: Http, private authHttp: AuthHttp) { }

  getTweets(): Observable<Tweet[]>{
    return this.authHttp.get("http://localhost:3000/api/tweets")
    .map(response => <Tweet[]>response.json());
  }
  getTweet(): Tweet[]{
    return this.tweets;
  }

  //CRUD functions
  postTweet(tweet: string) {
    return true
  }
}
