import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpaymentComponent } from './cartpayment.component';

describe('CartpaymentComponent', () => {
  let component: CartpaymentComponent;
  let fixture: ComponentFixture<CartpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
