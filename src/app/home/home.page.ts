import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories = [
    { name: 'Lácteos', route: '/lacteos' },
    { name: 'Líquidos', route: '/liquidos' },
    { name: 'Masas Dulces', route: '/masas-dulces' },
    { name: 'Masas Saladas', route: '/masas-saladas' },
    { name: 'Sándwich', route: '/sandwich' },
    { name: 'Café', route: '/cafe' },
    { name: 'Hotdogs', route: '/hotdogs' },
    { name: 'Promociones Fritas', route: '/promociones-fritas' },
  ];

  userEmail: string = ''; // Correo del usuario autenticado
  authService: any;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Obtener el correo del usuario autenticado
    this.userEmail = this.authService.getCurrentUserEmail();
  }

  isAdmin(): boolean {
    // Verifica si el correo pertenece al administrador
    return this.userEmail === 'pab.castro@duocuc.cl';
  }

  navigateToCategory(route: string) {
    this.navCtrl.navigateForward(route);
  }

  goToAddProduct() {
    this.navCtrl.navigateForward('/add-product');
  }

  goToCart() {
    this.navCtrl.navigateForward('/cart');
  }

  
}
