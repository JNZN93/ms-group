import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactFormularComponent} from './contact-formular/contact-formular.component'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroSectionComponent, ProductsComponent, AboutComponent, ContactFormularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ms-group';
}
