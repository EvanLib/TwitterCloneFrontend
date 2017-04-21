import { Component, OnInit, Inject, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SinginComponent implements OnInit {
  model: any = {};
  loading = false;
  private modalRef: NgbModalRef;

  error = '';

  constructor(private AuthService: AuthService, private router: Router, private modalService: NgbModal) {}

  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  showLogin(event, content){
    event.preventDefault();
    this.modalRef = this.modalService.open(content);
  }
  logout(event){
    this.AuthService.logout()
    .subscribe(
      result => this.router.navigate(['home']),
        () => this.router.navigate(['home/base']),

      );
  }
  login(event) {
    event.preventDefault();
    this.loading = true;
    this.AuthService.login(this.model.username, this.model.password)
    .subscribe(result => {
        if (result === true) {
          this.loading = false;
          this.error = ''
          this.modalRef.close();
          this.router.navigate(['home/stuff'])
           //To close the modal, only way I think to do this.
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
