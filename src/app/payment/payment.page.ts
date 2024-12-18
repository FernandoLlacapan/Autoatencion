import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  total: number = 0;

  constructor(private cartService: CartService, private navCtrl: NavController) {}

  ngOnInit() {
    this.total = this.cartService.getTotal();
  }

  confirmPayment() {
    this.cartService.clearCart();
    this.navCtrl.navigateForward('/confirmation'); // Navega a la confirmación
  }
}
