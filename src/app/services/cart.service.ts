import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [{
    id: 1,
    name: 'Laptop',
    price: 999.99,
    image: 'https://via.placeholder.com/80x80?text=Laptop',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 499.99,
    image: 'https://via.placeholder.com/80x80?text=Smartphone',
    quantity: 2,
  },
  {
    id: 3,
    name: 'Kopfhörer',
    price: 79.99,
    image: 'https://via.placeholder.com/80x80?text=Kopfhörer',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Smartwatch',
    price: 199.99,
    image: 'https://via.placeholder.com/80x80?text=Smartwatch',
    quantity: 1,
  }
];

  getItems(): CartItem[] {
    return this.items;
  }

  addItem(item: CartItem) {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.push({ ...item });
    }
  }

  removeItem(itemId: number) {
    this.items = this.items.filter(i => i.id !== itemId);
  }

  updateQuantity(itemId: number, quantity: number) {
    const item = this.items.find(i => i.id === itemId);
    if (item) item.quantity = quantity;
  }

  clearCart() {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
