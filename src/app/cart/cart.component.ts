import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  cartItems: CartItem[] = [];

  constructor( private cartService: CartService ) {}


  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  increase(item: CartItem) {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
  }

  decrease(item: CartItem) {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.id, item.quantity - 1);
    }
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item.id);
    this.cartItems = this.cartService.getItems(); // neu laden
  }

  closeCart() {
    this.close.emit();
  }

  get total(): number {
    return this.cartService.getTotal();
  }

}
