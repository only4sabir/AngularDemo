import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCounterComponent } from './sub-counter.component';

describe('SubCounterComponent', () => {
  let component: SubCounterComponent;
  let fixture: ComponentFixture<SubCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
