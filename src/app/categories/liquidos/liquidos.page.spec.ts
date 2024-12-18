import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiquidosPage } from './liquidos.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LiquidosPage', () => {
  let component: LiquidosPage;
  let fixture: ComponentFixture<LiquidosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiquidosPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite usar componentes personalizados de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(LiquidosPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list beverages', () => {
    // Simula datos de productos
    component.products = [
      { name: 'Agua Mineral', price: 1000, image: 'agua-mineral.jpg', quantity: 1 },
      { name: 'Jugo de Naranja', price: 1500, image: 'jugo-naranja.jpg', quantity: 1 },
    ];
    fixture.detectChanges(); // Actualiza el DOM

    const compiled = fixture.nativeElement;
    const items = compiled.querySelectorAll('ion-item'); // Encuentra los elementos generados por *ngFor
    expect(items.length).toBeGreaterThan(0); // Verifica que hay productos en la lista
    expect(items[0].textContent).toContain('Agua Mineral'); // Verifica el contenido del primer producto
  });
});

