import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // Estado de inicio de sesión

  constructor() {}

  // Verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Método para simular el inicio de sesión
  login() {
    this.loggedIn = true;
  }

  // Método para simular el cierre de sesión
  logout() {
    this.loggedIn = false;
  }
}
