import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; // Controla si el usuario está autenticado

  constructor() { }

  // Método para iniciar sesión
  login(username: string, password: string): boolean {
    // Aquí puedes implementar tu lógica de autenticación, por ejemplo, consultar una API
    if (username === 'admin' && password === '1234') {
      this.isAuthenticated = true; // Cambia el estado de autenticación
      return true;
    }
    return false;
  }

  // Método para cerrar sesión
  logout(): void {
    this.isAuthenticated = false;
  }

  // Verifica si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
