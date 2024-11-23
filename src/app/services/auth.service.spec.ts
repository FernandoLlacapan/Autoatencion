import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;

  const mockAngularFireAuth: any = {
    authState: of(null),
    signInWithEmailAndPassword: jasmine
      .createSpy('signInWithEmailAndPassword')
      .and.returnValue(Promise.resolve({ user: { uid: 'k719N5JHsUcLVkL1Q3KKKABnRzL2' } })),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ],
    });

    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain "Hello" in return of getGreeting', () => {
    const greeting = service.getGreeting();
    expect(greeting).toContain('Hello');
  });

  it('should return true for successful login', async () => {
    const result = await service.login('test@example.com', 'password123');
    expect(result).toBeTrue();
  });

});
