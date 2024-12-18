import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasasSaladasPage } from './masas-saladas.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MasasSaladasPage', () => {
  let component: MasasSaladasPage;
  let fixture: ComponentFixture<MasasSaladasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasasSaladasPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite usar componentes de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(MasasSaladasPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list salty pastries', () => {
    // Simula datos de productos
    component.products = [
      { name: 'Empanada', price: 2000, image: 'empanada.jpg', quantity: 1 },
      { name: 'Quiche', price: 3000, image: 'quiche.jpg', quantity: 1 },
    ];
    fixture.detectChanges(); // Actualiza el DOM con los datos simulados

    const compiled = fixture.nativeElement;
    const items = compiled.querySelectorAll('ion-item');
    expect(items.length).toBeGreaterThan(0); // Verifica que hay elementos en la lista
    expect(items[0].textContent).toContain('Empanada'); // Verifica que el nombre del primer producto sea correcto
  });
});
