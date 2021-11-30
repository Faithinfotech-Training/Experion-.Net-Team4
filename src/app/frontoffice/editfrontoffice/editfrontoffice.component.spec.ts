import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfrontofficeComponent } from './editfrontoffice.component';

describe('EditfrontofficeComponent', () => {
  let component: EditfrontofficeComponent;
  let fixture: ComponentFixture<EditfrontofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfrontofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfrontofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
