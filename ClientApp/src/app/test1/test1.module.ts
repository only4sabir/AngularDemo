import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1.component';
import { TestServiceDirective } from './test-service.directive';



@NgModule({
  declarations: [Test1Component, TestServiceDirective],
  imports: [
    CommonModule
  ]
})
export class Test1Module { }
