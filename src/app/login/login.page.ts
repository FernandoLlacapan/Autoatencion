import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Método para validar el login
  validateLogin() {
    // Aquí puedes añadir tu lógica de validación. Por simplicidad, simularemos la validación:
    if (this.username === 'usuario' && this.password === '1234') {
      // Redirige al Home si el login es exitoso
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }
}

