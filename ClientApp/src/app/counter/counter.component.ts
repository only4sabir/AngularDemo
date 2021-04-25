import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SubCounterComponent } from './sub-counter/sub-counter.component';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements AfterViewInit {
  public currentCount = 0;
  @ViewChild(SubCounterComponent, { static: false }) child;
  childValue = '';
  pushChildValue = '';
  constructor(private cdref: ChangeDetectorRef) { }
  //public incrementCounter() {
  //  this.currentCount++;
  //}
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.childValue = this.child.name;
    this.cdref.detectChanges();
  }
  getChildValue() {

    this.childValue = this.child.name;
  } pushChildvalue(value: string) {
    this.pushChildValue = value;
  }
}
