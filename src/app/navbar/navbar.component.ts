import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../services/cart.service';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-navbar',
  imports: [CartComponent, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showCart = false;

  constructor(
    public cartService: CartService, 
    public translate: TranslateService,
    private globalService: GlobalService
  ) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.translate.setDefaultLang('de');
    this.translate.use(savedLang);
  }

  toggleCart() {
    this.showCart = !this.showCart;
    if (this.showCart) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when cart is open
    } else {
      document.body.style.overflow = ''; // Restore scrolling when cart is closed
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.globalService.reloadTranslations(); // Reload translations when language changes
  }
}
