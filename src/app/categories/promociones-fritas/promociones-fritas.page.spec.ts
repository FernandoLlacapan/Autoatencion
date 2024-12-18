import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocionesFritasPage } from './promociones-fritas.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PromocionesFritasPage', () => {
  let component: PromocionesFritasPage;
  let fixture: ComponentFixture<PromocionesFritasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromocionesFritasPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite usar componentes de Ionic sin errores de tipo
    }).compileComponents();

    fixture = TestBed.createComponent(PromocionesFritasPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of promotions', () => {
    // Simula datos para los productos
    component.products = [
      { name: 'Promo 1', price: 10, image: 'promo1.jpg', quantity: 1 },
      { name: 'Promo 2', price: 15, image: 'promo2.jpg', quantity: 1 },
    ];
    fixture.detectChanges(); // Actualiza el DOM

    const compiled = fixture.nativeElement;
    const items = compiled.querySelectorAll('ion-item');
    expect(items.length).toBe(2); // Verifica que hay 2 productos en la lista
  });
});
