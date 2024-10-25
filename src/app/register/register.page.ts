import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { User } from '../models/user.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit(){
    this.registerForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],}, { Validator: this.passwordsMatch });
    }

  passwordsMatch(formGroup: FormGroup) {
    const { password, confirmPassword } = formGroup.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onRegister() {
    const user = this.registerForm.value as User;
    this.authService.register(user)
    .then(() => {
      console.log('Usuario registrado satisfactoriamente');
      this.navCtrl.navigateForward('/login');
    })
    .catch((error) => { 
      console.log('Error al registrar el usuario:', error);
    });
  }
}
