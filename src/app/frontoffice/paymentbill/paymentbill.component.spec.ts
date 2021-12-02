import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentbillComponent } from './paymentbill.component';

describe('PaymentbillComponent', () => {
  let component: PaymentbillComponent;
  let fixture: ComponentFixture<PaymentbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
