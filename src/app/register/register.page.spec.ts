import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { AuthService } from '../services/auth.service';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  const mockAuthService: any = {
    register: jasmine.createSpy('register').and.returnValue(Promise.resolve(true)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a register button', () => {
    const compiled = fixture.nativeElement;
    const registerButton = compiled.querySelector('ion-button[type="submit"]');
    expect(registerButton.textContent).toContain('Registrar Cuenta'); // Ajusta el texto esperado
  });
});
