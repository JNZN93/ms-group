import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CartComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showCart = false;

  constructor(public cartService: CartService,) { }

  toggleCart() {
    this.showCart = !this.showCart;
    console.log(this.showCart);
    
  }

}
