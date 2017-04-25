import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Tweet } from '../models/tweet';
import { BaseComponent } from '../base/base.component';
import { TweetFormComponent } from '../tweet-form/tweet-form.component';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.scss']
})
export class StuffComponent implements OnInit {

  profile = localStorage.getItem('profile')
  constructor() { }

  ngOnInit() {
  }


}
