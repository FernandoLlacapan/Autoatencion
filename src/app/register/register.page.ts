import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public navCtrl: NavController // Cambia 'private' a 'public'
  ) {}
  

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  async onRegister() {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }
    const { email, password } = this.registerForm.value;
    try {
      await this.authService.register(email, password);
      this.navCtrl.navigateForward('/login');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        this.errorMessage = 'El correo ya está registrado.';
      } else {
        this.errorMessage = 'Error al registrar. Intenta de nuevo.';
      }
    }
  }
  
  
}
