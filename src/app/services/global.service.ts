import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  url: string;
  image: string;
  name: string;
  description_items: string[];
  models?: any[];
}

interface Manufacturer {
  brand: string;
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private currentLang = new BehaviorSubject<string>('de');
  currentLang$ = this.currentLang.asObservable();
  manufactors: Manufacturer[] = [];

  constructor(private translateService: TranslateService) {
    this.initializeTranslations();
  }

  private initializeTranslations() {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.translateService.setDefaultLang('de');
    this.translateService.use(savedLang);
    this.currentLang.next(savedLang);
    this.loadManufacturers();
  }

  private loadManufacturers() {
    this.translateService.get('manufactors').subscribe(translations => {
      if (translations && Array.isArray(translations)) {
        this.manufactors = translations;
      } else {
        console.error('Invalid manufacturers data:', translations);
      }
    });
  }

  switchLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
    this.currentLang.next(lang);
    
    // Reload translations for the new language
    this.translateService.get('manufactors').subscribe(translations => {
      if (translations && Array.isArray(translations)) {
        this.manufactors = translations;
      } else {
        console.error('Invalid manufacturers data:', translations);
      }
    });
  }

  getCurrentLang(): string {
    return this.currentLang.value;
  }
}
