import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasasDulcesPage } from './masas-dulces.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MasasDulcesPage', () => {
  let component: MasasDulcesPage;
  let fixture: ComponentFixture<MasasDulcesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasasDulcesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite componentes personalizados de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(MasasDulcesPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list sweet pastries', () => {
    // Simula productos de masas dulces
    component.products = [
      { name: 'Dulce 1', price: 10, image: 'dulce1.jpg', quantity: 1 },
      { name: 'Dulce 2', price: 15, image: 'dulce2.jpg', quantity: 1 },
    ];
    fixture.detectChanges(); // Actualiza el DOM

    const compiled = fixture.nativeElement;
    const items = compiled.querySelectorAll('ion-item'); // Encuentra los elementos de la lista
    expect(items.length).toBeGreaterThan(0); // Verifica que la lista tiene productos
    expect(items[0].textContent).toContain('Dulce 1'); // Verifica que el nombre del primer producto esté presente
  });
});

