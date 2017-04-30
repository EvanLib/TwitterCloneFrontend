import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TweetService {
  tweets = [];
  testNumber = 0;

  constructor(private http: Http, private authHttp: AuthHttp) {

  }
  private tweetObjectFromJson(obj): Tweet {
    return new Tweet(obj.profile.id, obj.profile.username, obj.id, obj.tweet, obj.created_at);
  }

  getTweets(): Observable<Tweet[]>{
    return this.authHttp.get("http://localhost:3000/api/tweets")
    .map((response: Response) => {
      console.log(response.json())
      for (let tweet of response.json()) {
        this.tweets.push(this.tweetObjectFromJson(tweet));
      }
      return (this.tweets as Array<Tweet>);
    });
  }
  getTweet(): Tweet[]{
    return this.tweets;
  }

  //CRUD functions
  postTweet(tweet: string): Observable<boolean> {
    return this.authHttp.post('http://localhost:3000/api/tweets', JSON.stringify({tweet: tweet}))
    .map((response: Response) => {
      if(response.ok){
        console.log("GOOD")
        this.tweets.push(new Tweet(1, "NIGGTY", 1, "SOME SHITTY TWEET", "2017-04-22T03:12:17-04:00"));
      }
      return response.ok
    })
  }
}
