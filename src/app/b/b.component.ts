import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { BaseComponent } from '../base/base.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent extends BaseComponent implements OnInit {

  form = new FormControl(0);
  constructor(public service: AppService) {
    super(service);
   }

  ngOnInit() {
    console.log('B => ');
    super.ngOnInit();
  }

  setData(newData) {
      this.form.setValue(newData);
  }

}