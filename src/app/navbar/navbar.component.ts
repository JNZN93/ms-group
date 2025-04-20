import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  imports: [CartComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showCart = false;

  toggleCart() {
    this.showCart = !this.showCart;
    console.log(this.showCart);
    
  }

}
