import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


declare var $: any;

@Component({
  selector: 'app-product-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  selectedBrand: string = '';
  brandProducts: any[] = [];
  selectedProduct: any = null;
  selectedVariant: string = '';
  quantity: number = 1;

  constructor(
    public globalService:GlobalService,
    private route: ActivatedRoute,
    public cartService: CartService,
    private router: Router
  ) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 100); // <-- hier wird gescrollt
    });

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedBrand = params.get('brand') || '';
      this.filterProducts();
    });

    
    window.addEventListener('popstate', this.handlePopState);
  }

  filterProducts() {
    const brandData = this.globalService.manufactors.find(
      p => p.brand.toLowerCase() === this.selectedBrand.toLowerCase()
    );
    this.brandProducts = brandData ? brandData.products : [];
  }

  openModal(product:any) {
    this.selectedProduct = product;
    this.selectedVariant = product.models?.[0] || null; // ← erstes Modell vorauswählen
    // URL ändern, damit Browser-Zurück funktioniert
  history.pushState({ modal: true }, '', window.location.href + '#modal');
    $('#myModal').modal('show');
  }

  closeModal():void {
    this.selectedProduct = null;
    const url = new URL(window.location.href);
    console.log(url);
    url.hash = ''; // Fragment entfernen
    $('#myModal').modal('hide');
  }

  removeHashFromUrl(): void {
    const url = window.location.href.split('#')[0];
    history.replaceState(null, '', url);
    history.back();
  }

  get selectedModel() {
    return this.selectedProduct?.models.find((m:any) => m.code === this.selectedVariant);
  }

  decreaseQuantity() {
    if (this.quantity == 0) {
      return;
    }
      this.quantity -= 1
  }

  increaseQuantity() {
    this.quantity += 1
  }

  resetQuantity() {
    this.quantity = 1;
  }

  addToCart(selectedModel:any, quantity:number, selectedProduct: any):void {
    const item: CartItem = {
      id: selectedModel.code,
      quantity: quantity,
      name: selectedProduct.name,
      image: selectedProduct.image,
      model: selectedModel.code
    };
    // Add to Cart Logic todo
    this.cartService.addItem(item);

    // quantity leeren
    this.quantity = 1;
  }
  
  handlePopState = (event: PopStateEvent): void => {
    if (this.selectedProduct) {
      this.closeModal();
    }
  };

  getModelKeys(): string[] {
    return this.selectedProduct?.models?.length ? Object.keys(this.selectedProduct.models[0]) : [];
  }

  formatKey(key: string): string {
    const labels: Record<string, string> = {
      code: 'Modell-Code',
      engine: 'Motor',
      rotor_diameter_cm: 'Rotordurchmesser (cm)',
      blade_count: 'Klingenanzahl',
      output_speed_rpm: 'Ausgangsdrehzahl (RPM)',
      power_hp: 'Leistung (PS)',
      start: 'Start',
      fuel_type: 'Kraftstoff',
      weight_kg: 'Gewicht (kg)'
    };
    return labels[key] ?? key;
  }
  


}
