import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent extends BaseComponent implements OnInit {

  details: any = 0;
  constructor(public service: AppService) {
    super(service);
   }

  ngOnInit() {
    console.log('A => ');
    super.ngOnInit();
  }

  setData(newData) {
      this.details = newData;
  }

}