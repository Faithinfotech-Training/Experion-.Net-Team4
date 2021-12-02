import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentbillListComponent } from './paymentbill-list.component';

describe('PaymentbillListComponent', () => {
  let component: PaymentbillListComponent;
  let fixture: ComponentFixture<PaymentbillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentbillListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentbillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
