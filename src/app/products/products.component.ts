import { Component } from '@angular/core';
import { ContactFormularComponent } from '../contact-formular/contact-formular.component';
import { GlobalService } from '../services/global.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [ContactFormularComponent, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
   constructor(
    public globalService: GlobalService,
    private router: Router
  ) {}


  navigateTo(brand:string):void{
    this.router.navigate(['/product-page', brand.toLowerCase()]);
    window.scrollTo({ top: 100 , behavior: 'smooth' });
  }

}
