import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesPage } from './categories.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CategoriesPage', () => {
  let component: CategoriesPage;
  let fixture: ComponentFixture<CategoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite componentes personalizados de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list categories', () => {
    // Simula datos de categorías
    component.categories = [
      { id: 1, name: 'Bebidas', image: 'bebidas.jpg' },
      { id: 2, name: 'Postres', image: 'postres.jpg' },
    ];
    fixture.detectChanges(); // Refleja los datos en el DOM

    const compiled = fixture.nativeElement;
    const categoryItems = compiled.querySelectorAll('ion-item');
    expect(categoryItems.length).toBeGreaterThan(0); // Verifica que se muestran categorías
    expect(categoryItems[0].textContent).toContain('Bebidas'); // Verifica una categoría específica
  });
});
