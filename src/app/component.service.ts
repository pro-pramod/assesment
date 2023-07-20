import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  subject = new Subject()

  constructor() { }

  addValue(event:any) {
    this.subject.next(event);
    console.log(this.subject);
    
  }

}
