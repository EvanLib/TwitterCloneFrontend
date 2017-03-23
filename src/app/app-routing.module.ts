import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StuffComponent } from './stuff/stuff.component';
import { SinginComponent } from './singin/singin.component'
import { AuthService } from './auth.service';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'stuff', component: StuffComponent},
      {path: 'signin', component: SinginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class RoutingModule { }
