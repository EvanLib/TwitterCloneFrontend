import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StuffComponent } from './stuff/stuff.component';
import { SinginComponent } from './singin/singin.component'
import { AuthService } from './auth.service';
import { BaseComponent } from './base/base.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './guards/auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'stuff',
        component: StuffComponent,
        canActivate: [AuthGuard]
      },
      {path: 'base', component: BaseComponent}

    ]
  },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class RoutingModule { }
