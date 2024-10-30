import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      await this.authService.login(email, password);
      this.navCtrl.navigateForward('/home'); // Redirige a la página principal tras inicio de sesión exitoso
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        this.errorMessage = 'Usuario no encontrado. Verifica el correo.';
      } else if (error.code === 'auth/wrong-password') {
        this.errorMessage = 'Contraseña incorrecta. Inténtalo de nuevo.';
      } else {
        this.errorMessage = 'Error al iniciar sesión. Verifica tus credenciales.';
      }
    }
  }
  

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }
}
