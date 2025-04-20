import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
    { path: '', component: HeroSectionComponent  }, 
    { path: 'product-page/:brand', component: ProductPageComponent },
];
