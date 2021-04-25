import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-sub-counter',
  templateUrl: './sub-counter.component.html',
  styleUrls: ['./sub-counter.component.css']
})
export class SubCounterComponent implements OnInit {
  @Output() pushChildValue = new EventEmitter();
  constructor() { }
  name = 'sub module name';
  value = 'sabir';
  ngOnInit() {
  }

  getChildValue() {

    this.name = 'my name is sabir';
  }
  addChildValue(value = 'sabir') {
    console.log('value');
    console.log(value);
    this.pushChildValue.emit(value);
  }
}
