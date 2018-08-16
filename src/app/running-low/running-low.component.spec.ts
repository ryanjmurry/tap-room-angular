import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningLowComponent } from './running-low.component';

describe('RunningLowComponent', () => {
  let component: RunningLowComponent;
  let fixture: ComponentFixture<RunningLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
