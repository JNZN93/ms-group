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
    // First ensure the language is set
    const currentLang = this.currentLang.value;
    this.translateService.use(currentLang);
    
    // Then load the manufacturers data
    this.translateService.get('manufactors').subscribe(translations => {
      if (translations && Array.isArray(translations)) {
        this.manufactors = translations;
      } else {
        console.error('Invalid manufacturers data:', translations);
      }
    });
  }

  switchLanguage(lang: string) {
    // First update the language
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
    this.currentLang.next(lang);
    
    // Then reload the manufacturers data
    this.loadManufacturers();
  }

  getCurrentLang(): string {
    return this.currentLang.value;
  }
}
