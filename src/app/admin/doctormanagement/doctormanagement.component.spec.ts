import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctormanagementComponent } from './doctormanagement.component';

describe('DoctormanagementComponent', () => {
  let component: DoctormanagementComponent;
  let fixture: ComponentFixture<DoctormanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctormanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctormanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
