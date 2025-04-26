import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: HeroSectionComponent  }, 
    { path: 'product-page/:brand', component: ProductPageComponent },
    { path: 'impressum', component: ImpressumComponent  },
    { path: 'privacy', component: PrivacyComponent  },  
];
