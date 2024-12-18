import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.page.html',
  styleUrls: ['./protected.page.scss'],
})
export class ProtectedPage {

  constructor(private router: Router) {}

  // Método para redirigir al login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
