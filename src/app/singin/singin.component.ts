import { Component, OnInit, Inject} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  model: any = {};
    loading = false;
    error = '';
  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  logout(event){
    this.AuthService.logout()
    .subscribe(
      result => console.log(result),
        () => this.router.navigate(['home/base']),

      );
  }
  login(event) {
    event.preventDefault()
    this.loading = true;
    this.AuthService.login(this.model.username, this.model.password)
    .subscribe(result => {
        if (result === true) {
          this.loading = false;
          this.error = ''
          this.router.navigate(['home/stuff'])
        } else {
          this.error = "Something is really broken. Sorry."
        }
      },
      error => {
        this.loading = false;
        this.error = 'Incorrect login.';
      });
  }

}
