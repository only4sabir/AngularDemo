import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCounterComponent } from './sub-counter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SubCounterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SubCounterComponent,
    FormsModule
  ]
})
export class SubCounterModule { }
