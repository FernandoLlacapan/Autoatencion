import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LacteosPage } from './lacteos.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LacteosPage', () => {
  let component: LacteosPage;
  let fixture: ComponentFixture<LacteosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LacteosPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite usar componentes personalizados de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(LacteosPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list dairy items', () => {
    // Simula datos de productos lácteos
    component.products = [
      { name: 'Leche Entera', price: 1000, image: 'leche-entera.jpg', quantity: 1 },
      { name: 'Yogurt Natural', price: 1500, image: 'yogurt-natural.jpg', quantity: 1 },
    ];
    fixture.detectChanges(); // Actualiza el DOM

    const compiled = fixture.nativeElement;
    const items = compiled.querySelectorAll('ion-item'); // Encuentra los elementos generados por *ngFor
    expect(items.length).toBeGreaterThan(0); // Verifica que hay productos en la lista
    expect(items[0].textContent).toContain('Leche Entera'); // Verifica que el primer producto se muestra correctamente
  });
});
