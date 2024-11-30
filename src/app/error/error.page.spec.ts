import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorPage } from './error.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ErrorPage', () => {
  let component: ErrorPage;
  let fixture: ComponentFixture<ErrorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite componentes personalizados de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Actualiza el DOM antes de ejecutar las pruebas
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error message', () => {
    const compiled = fixture.nativeElement;
    const message = compiled.querySelector('h2');
    expect(message).not.toBeNull(); // Verifica que el elemento existe
    expect(message.textContent).toContain('404'); // Verifica que contiene el texto esperado
  });

  it('should have a button to return to login', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('ion-button');
    expect(button).not.toBeNull(); // Verifica que el botón existe
    expect(button.textContent).toContain('Regresar al inicio'); // Verifica el texto del botón
  });
});
