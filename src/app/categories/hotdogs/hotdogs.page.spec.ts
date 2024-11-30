import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotdogsPage } from './hotdogs.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HotdogsPage', () => {
  let component: HotdogsPage;
  let fixture: ComponentFixture<HotdogsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotdogsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite usar componentes de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(HotdogsPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list hotdog items', () => {
    // Simula datos de productos
    component.products = [
      { name: 'Hotdog Clásico', price: 2500, image: 'hotdog-clasico.jpg', quantity: 1 },
      { name: 'Hotdog Especial', price: 3000, image: 'hotdog-especial.jpg', quantity: 1 },
    ];
    fixture.detectChanges(); // Actualiza el DOM

    const compiled = fixture.nativeElement;
    const items = compiled.querySelectorAll('ion-item'); // Encuentra los elementos generados por *ngFor
    expect(items.length).toBeGreaterThan(0); // Verifica que hay productos en la lista
    expect(items[0].textContent).toContain('Hotdog Clásico'); // Verifica que el primer producto está en el DOM
  });
});