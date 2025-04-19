import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  constructor(public globalService:GlobalService) {

  }


}
