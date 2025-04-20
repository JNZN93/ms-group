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
  private storageKey = 'cartItems';
  private items: CartItem[] = [
];

constructor() {
  this.loadFromStorage();
}

private saveToStorage() {
  localStorage.setItem(this.storageKey, JSON.stringify(this.items));
}

private loadFromStorage() {
  const saved = localStorage.getItem(this.storageKey);
  this.items = saved ? JSON.parse(saved) : [];
}

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
    this.saveToStorage();
  }

  removeItem(itemId: number) {
    this.items = this.items.filter(i => i.id !== itemId);
    this.saveToStorage();
  }

  updateQuantity(itemId: number, quantity: number) {
    const item = this.items.find(i => i.id === itemId);
    if (item) item.quantity = quantity;
    this.saveToStorage();
  }

  clearCart() {
    this.items = [];
    this.saveToStorage();
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
