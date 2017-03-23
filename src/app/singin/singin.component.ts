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
  login(event) {
    event.preventDefault()
    console.log("test")
    this.AuthService.login(this.model.username, this.model.password)
    .subscribe(result => {
        if (result === true) {
          this.router.navigate(['home/stuff'])
        } else {
          this.error = "Wrong Signin"
        }
      },
      error => {
        console.log(error)
      });
  }

}
