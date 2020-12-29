import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkpageComponent } from './markpage.component';

describe('MarkpageComponent', () => {
  let component: MarkpageComponent;
  let fixture: ComponentFixture<MarkpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
