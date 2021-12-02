import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfullprescriptionComponent } from './viewfullprescription.component';

describe('ViewfullprescriptionComponent', () => {
  let component: ViewfullprescriptionComponent;
  let fixture: ComponentFixture<ViewfullprescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfullprescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfullprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
