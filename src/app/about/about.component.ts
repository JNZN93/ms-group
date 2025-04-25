import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  imports: [ProductsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  ngOnInit(): void {
        AOS.init({
          duration: 1000,       // Animationsdauer (Millisekunden)
          offset: 80,         // Abstand zum Auslösen (Pixel)
          easing: 'ease-in-out', // Timing-Funktion
          once: false,          // Animation nur einmal ausführen
          mirror: false        // Animation beim Rückscrollen wiederholen
        })
  }

}
