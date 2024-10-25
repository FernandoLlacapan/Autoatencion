import { NavController } from '@ionic/angular';
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { async } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private navCtrl: NavController) { }


ngOnInit() {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}

async onLogin() {
  const { email, password } = this.loginForm.value;
  try {
    const result = await this.authSrv.login(email, password);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

  goToRegister() {
  this.navCtrl.navigateForward('/register');
  }
}