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
  currentLang: string;

  constructor(
    public cartService: CartService, 
    public translate: TranslateService,
    private globalService: GlobalService
  ) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.translate.setDefaultLang('de');
    this.translate.use(savedLang);
    this.currentLang = savedLang;
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  switchLanguage(lang: string) {
    if (this.currentLang !== lang) {
      this.currentLang = lang;
      this.globalService.switchLanguage(lang);
    }
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'de' ? 'en' : 'de';
    this.switchLanguage(newLang);
  }
}
