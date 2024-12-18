import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationPage } from './confirmation.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ConfirmationPage', () => {
  let component: ConfirmationPage;
  let fixture: ComponentFixture<ConfirmationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite componentes de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a confirmation message', () => {
    const compiled = fixture.nativeElement;
    const message = compiled.querySelector('.thank-you-message h2');
    expect(message).not.toBeNull(); // Asegura que el mensaje existe
    expect(message.textContent).toContain('¡Tu pedido ha sido confirmado!'); // Verifica el contenido del mensaje
  });
});