import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CartItem, CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms';
import { EmailService, Post } from '../services/email.service';
import Swal from 'sweetalert2';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  imports: [FormsModule, TranslateModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  private emailService = inject(EmailService);

  posts: Post[] = [];
  cartItems: CartItem[] = [];
  showOverlay = false;
  name = '';
  email = '';

  constructor( private cartService: CartService ) {}


  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  sendEmail() {
    this.emailService.createPost({products:this.cartItems, email: this.email, name: this.name}).subscribe({
      next: (data) => {
        this.posts = data,
        this.openSuccessAlert();
        this.cartService.clearCart();
        this.cartItems = [];
      },
      error: (err) => {
        this.openErrorAlert();
      },
    });
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

  async sendOrderConfirmation() {
    
  }

  closeOverlay() {
    this.showOverlay = false;
    this.name = '';
    this.email = '';
  }

  submit() {
    this.sendEmail();
    // hier kannst du die Daten speichern oder an einen Service schicken

    this.closeOverlay();
  }

    openSuccessAlert() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Anfrage erfolgreich abgesendet!',
        showConfirmButton: false,
        timer: 3000,
        background: '#f5f5f5',
      });
    }

    openErrorAlert() {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Es ist ein Fehler aufgetreten',
        showConfirmButton: false,
        timer: 3000,
        background: '#f5f5f5',
      });
    }

}
