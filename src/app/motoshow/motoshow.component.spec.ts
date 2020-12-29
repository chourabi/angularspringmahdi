import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoshowComponent } from './motoshow.component';

describe('MotoshowComponent', () => {
  let component: MotoshowComponent;
  let fixture: ComponentFixture<MotoshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
