import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  afAuth: any;
  constructor() {}

  // Método para devolver un saludo
  getGreeting(): string {
    return 'Hello';
  }

  async login(email: string, password: string): Promise<boolean> {
    // Lógica de inicio de sesión simulada
    return true;
  }

  // Método para registrar un usuario
  async register(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  }
}
