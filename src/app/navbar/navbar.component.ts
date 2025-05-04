import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../services/cart.service';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [CartComponent, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showCart = false;

  constructor(public cartService: CartService, public translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.translate.setDefaultLang('de');
    this.translate.use(savedLang);
   }

  toggleCart() {
    this.showCart = !this.showCart;
    console.log(this.showCart);
    
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

}
