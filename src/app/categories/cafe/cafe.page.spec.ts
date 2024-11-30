import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafePage } from './cafe.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CafePage', () => {
  let component: CafePage;
  let fixture: ComponentFixture<CafePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite componentes personalizados de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(CafePage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list coffee items', () => {
    // Simula datos de productos
    component.products = [
      { name: 'Café Americano', price: 1500, image: 'cafe-americano.jpg', quantity: 1 },
      { name: 'Cappuccino', price: 2000, image: 'cappuccino.jpg', quantity: 1 },
    ];
    fixture.detectChanges(); // Actualiza el DOM

    const compiled = fixture.nativeElement;
    const items = compiled.querySelectorAll('ion-item'); // Encuentra los elementos generados por *ngFor
    expect(items.length).toBeGreaterThan(0); // Verifica que hay productos en la lista
    expect(items[0].textContent).toContain('Café Americano'); // Verifica el contenido del primer producto
  });
});

