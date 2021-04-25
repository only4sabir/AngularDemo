import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { SubCounterModule } from './sub-counter/sub-counter.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    SubCounterModule,
    FormsModule
  ]
})
export class CounterModule { }
