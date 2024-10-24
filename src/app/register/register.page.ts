import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Asegúrate de la ruta correcta
import { User } from '../models/user.model'; // Asegúrate de la ruta correcta

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register() {
    const user: User = { email: this.email, password: this.password };
    this.authService.register(user).then(() => {
      console.log('Usuario registrado con éxito');
    }).catch((error) => {
      console.error('Error al registrar usuario:', error);
    });
  }
}

