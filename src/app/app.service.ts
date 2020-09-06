import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {

  constructor() { }

  subject$ = new Subject();
}