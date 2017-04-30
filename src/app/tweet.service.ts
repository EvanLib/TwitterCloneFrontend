import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TweetService {
  tweets: Observable<Tweet[]>
  private _tweets: BehaviorSubject<Tweet[]>
  private dateStore: {
    tweets: Tweet[]
  }

  constructor(private http: Http, private authHttp: AuthHttp) {
    this.dateStore = { tweets: [] };
    this._tweets = <BehaviorSubject<Tweet[]>>new BehaviorSubject([]);
    this.tweets = this._tweets.asObservable();
  }
  private tweetObjectFromJson(obj): Tweet {
    return new Tweet(obj.profile.id, obj.profile.username, obj.id, obj.tweet, obj.created_at);
  }

  getTweets() {
    this.authHttp.get("http://localhost:3000/api/tweets")
    .subscribe(response =>{
      console.log(response.json());
      for (let tweet of response.json()) {
        var newTweet = this.tweetObjectFromJson(tweet);
        this.dateStore.tweets.unshift(newTweet);
        this._tweets.next(Object.assign({}, this.dateStore).tweets);
      }
    },
    error => console.log("Error loading tweets..."));
  }
  // getTweets(): Observable<Tweet[]>{
  //   return this.authHttp.get("http://localhost:3000/api/tweets")
  //   .map((response: Response) => {
  //     console.log(response.json())
  //     for (let tweet of response.json()) {
  //       this.tweets.push(this.tweetObjectFromJson(tweet));
  //     }
  //     return (this.tweets as Array<Tweet>);
  //   });
  // }
  // getTweet(): Tweet[]{
  //   return this.tweets;
  // }

  //CRUD functions
  postTweet(tweet: string): Observable<boolean> {
    return this.authHttp.post('http://localhost:3000/api/tweets', JSON.stringify({tweet: tweet}))
    .map((response: Response) => {
      if(response.ok){
        console.log(response.json());
        var newTweet = this.tweetObjectFromJson(response.json());
        this.dateStore.tweets.unshift(newTweet);
        this._tweets.next(Object.assign({}, this.dateStore).tweets);
        return true;
      }
      return response.ok
    })
  }


}
