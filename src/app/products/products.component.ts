import { Component } from '@angular/core';
import { ContactFormularComponent } from '../contact-formular/contact-formular.component';

@Component({
  selector: 'app-products',
  imports: [ContactFormularComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
