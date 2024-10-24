import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  register(user: User): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
     .then((result) => {
        console.log('Usuario registrado exitosamente',result);
        this.router.navigate(['/login']);
      })
     .catch((error) => {
        console.log('Error al registar usuario',error);
      });
  }

  login (email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email,password).then((result) => {
      console.log('Login Exitoso', result);
      this.router.navigate(['/home']);
    })
    .catch((error) => {
      console.log('Error al iniciar sesion', error);
    });
  }

  logout(): Promise<any> {
    return this.afAuth.signOut()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch((error) => {
      console.log('Error al cerrar sesion', error);
    });
  }

  isLoggedIn(): boolean {
    return this.afAuth.authState !== null;
  }

  getCurrentUser(): Promise<any> {
    return this.afAuth.currentUser;
  }

resetPassword(email: string): Promise<void>{
  return this.afAuth.sendPasswordResetEmail(email)
  .then(() => {
    console.log('Se ha enviado un correo para restablecer la contraseña');
  })
  .catch((error) => {
    console.log('Error al enviar el correo de recuperación de contraseña', error);
  });
} 
}
