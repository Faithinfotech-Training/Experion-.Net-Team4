import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechnitianComponent } from './labtechnitian.component';

describe('LabtechnitianComponent', () => {
  let component: LabtechnitianComponent;
  let fixture: ComponentFixture<LabtechnitianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtechnitianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechnitianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
