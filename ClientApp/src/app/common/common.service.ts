import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  name = new EventEmitter<string>();
  //test = new BehaviorSubject(20);
  increment = new BehaviorSubject<number>(20);
  //increment1 = new Subject<number>();
  constructor() {
    this.updateValue('Sabir');
    this.increment.next(15);
  }

  getValue() {
    alert('Hello I am sabir');
  }
  updateValue(name: string) {
    this.increment.next(15);
    this.name.emit(name);
  }
}
