import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroSectionComponent, ProductsComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ms-group';
}
