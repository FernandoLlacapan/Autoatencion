import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  register(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  
  constructor(private afAuth: AngularFireAuth) {}

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(user => !!user)); // Retorna true si hay un usuario autenticado
  }

  getGretting(): string {
    return "Hello";
  }
}
