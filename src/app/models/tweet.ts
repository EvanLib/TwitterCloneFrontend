class Profile {
  id: number;
  username: string;
}
export class Tweet {
  id: number;
  tweet: string;
  createdAt: Date;
  profile: Profile;

  constructor(userID: number, userName: string, tweetID: number, tweetString: string, createdAt: string){
      this.id = tweetID;
      this.tweet = tweetString;
      this.createdAt = new Date(Date.parse(createdAt));
      this.profile = new Profile;
      this.profile.id = userID;
      this.profile.username = userName;

  }
}
