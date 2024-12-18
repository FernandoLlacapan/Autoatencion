import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentPage } from './payment.page';

describe('PaymentPage', () => {
  let component: PaymentPage;
  let fixture: ComponentFixture<PaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a payment button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ion-button').textContent).toContain('Confirmar Pago');
  });
  
});
