import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartPage } from './cart.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the cart total', () => {
    // Configura un valor simulado para el total del carrito
    component.total = 1000;
    fixture.detectChanges(); // Refleja los cambios en el DOM

    const compiled = fixture.nativeElement;
    const totalElement = compiled.querySelector('ion-note[slot="end"]');
    expect(totalElement).not.toBeNull(); // Asegura que el elemento existe
    expect(totalElement.textContent).toContain('1000'); // Verifica el contenido
  });

  it('should have a payment button', () => {
    const compiled = fixture.nativeElement;
    const paymentButton = compiled.querySelector('ion-button[color="success"]');
    expect(paymentButton).not.toBeNull(); // Asegura que el botón existe
    expect(paymentButton.textContent).toContain('Pagar'); // Verifica el texto
  });
});
