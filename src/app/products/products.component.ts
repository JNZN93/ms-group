import { Component, OnInit } from '@angular/core';
import { ContactFormularComponent } from '../contact-formular/contact-formular.component';
import { GlobalService } from '../services/global.service';
import { RouterModule, Router } from '@angular/router';
import * as AOS from 'aos'; 

@Component({
  selector: 'app-products',
  imports: [ContactFormularComponent, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
   constructor(
    public globalService: GlobalService,
    private router: Router
  ) {}
  ngOnInit(): void {
    AOS.init({
      duration: 1000,       // Animationsdauer (Millisekunden)
      offset: 80,         // Abstand zum Auslösen (Pixel)
      easing: 'ease-in-out', // Timing-Funktion
      once: false,          // Animation nur einmal ausführen
      mirror: false        // Animation beim Rückscrollen wiederholen
    });
  }


  navigateTo(brand:string):void{
    this.router.navigate(['/product-page', brand.toLowerCase()]);
    window.scrollTo({ top: 100 , behavior: 'smooth' });
  }

}
