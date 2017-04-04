import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StuffComponent } from './stuff/stuff.component';
import {RoutingModule} from './app-routing.module';
import { SinginComponent } from './singin/singin.component'
import { AuthService } from './auth.service';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StuffComponent,
    SinginComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
