import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprescribedtestComponent } from './addprescribedtest.component';

describe('AddprescribedtestComponent', () => {
  let component: AddprescribedtestComponent;
  let fixture: ComponentFixture<AddprescribedtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprescribedtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprescribedtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
