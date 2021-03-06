import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

@Injectable()

export class AuthService {
  public token: string;
  public profile: string;
  constructor(private authHttp: AuthHttp, private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
  LoggedIn(): boolean{
    return tokenNotExpired();
  }

  logout(): Observable<boolean> {
    //Tell API to remove User Token
    return this.authHttp.delete('http://localhost:3000/api/auth/logout')
    .map((res:Response) => {
      console.log("Stuff")
      if (res.ok) { //Returns a status of okay http 20*
        //Delete local storage token
        localStorage.removeItem('id_token')
        return true
      }
      return false;
    });
  }

  login(username: string, password: string): Observable<boolean> {
      return this.http.post('http://localhost:3000/api/auth/login', JSON.stringify({ email: username, password: password }))
              .map((response: Response) => {
                  // login successful if there's a jwt token in the response
                  let token = response.json() && response.json().token;
                  let username = response.json() && response.json().username;
                  if (response.status === 401) {
                    return false; //Failed login
                  }
                  if (token) {
                      // set token property
                      console.log(token)
                      this.token = token;
                      this.profile = username;

                      // store username and jwt token in local storage to keep user logged in between page refreshes
                      localStorage.setItem('id_token', this.token)
                      localStorage.setItem('profile', this.profile)

                      // return true to indicate successful login
                      return true;
                  } else {
                    console.log("Called.");

                      // return false to indicate failed login
                      return false;
                  }
              });

  }

}
