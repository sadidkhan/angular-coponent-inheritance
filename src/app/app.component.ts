import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, timer, Subject } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(private service: AppService){}
  name = 'Angular';
  count = 0;
  button = 0;
  numbers = interval(2000);
  
  ngOnInit() {
    this.numbers.subscribe(() => {
      this.count = this.count + 1;
      this.service.subject$.next(this.count);
    });

  }
}
