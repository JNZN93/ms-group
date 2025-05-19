import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { TranslateModule } from '@ngx-translate/core';
import { SafePipe } from '../pipes/safe.pipe';

declare var $: any;

@Component({
  selector: 'app-product-page',
  imports: [FormsModule, CommonModule, TranslateModule, SafePipe],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit, OnDestroy {
  selectedBrand: string = '';
  brandProducts: any[] = [];
  selectedProduct: any = null;
  selectedVariant: any = null;
  quantity: number = 1;
  previewImage: string | null = null;
  private subscriptions: Subscription[] = [];
  selectedCategory: string = '';

  constructor(
    public globalService: GlobalService,
    private route: ActivatedRoute,
    public cartService: CartService,
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 100);
    });
  }

  ngOnInit(): void {
    // Subscribe to route params
    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        this.selectedBrand = params.get('brand') || '';
        this.filterProducts();
      })
    );

    // Subscribe to language changes
    this.subscriptions.push(
      this.globalService.currentLang$.subscribe(() => {
        // Small delay to ensure translations are loaded
        setTimeout(() => {
          this.filterProducts();
        }, 1000);
      })
    );

    window.addEventListener('popstate', this.handlePopState);
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
    window.removeEventListener('popstate', this.handlePopState);
  }

  filterProducts() {
    const brandData = this.globalService.manufactors.find(
      p => p.brand.toLowerCase() === this.selectedBrand.toLowerCase()
    );
    this.brandProducts = brandData ? brandData.products.sort((a:any, b:any) => a.category.localeCompare(b.category)) : [];
  }

  openModal(product:any) {
    this.selectedProduct = product;
    this.selectedVariant = product.models?.[0] || null;
    
    // Convert YouTube URL to embed URL if needed
    if (this.selectedBrand === 'somero' && this.selectedProduct?.video) {
      const videoUrl = this.selectedProduct.video;
      if (videoUrl.includes('youtube.com/watch')) {
        // Convert watch URL to embed URL
        const videoId = videoUrl.split('v=')[1]?.split('&')[0];
        if (videoId) {
          this.selectedProduct.video = `https://www.youtube.com/embed/${videoId}`;
        }
      }
    }
    
    $('#myModal').modal('show');
  }

  closeModal():void {
    this.selectedProduct = null;
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
    if (this.quantity == 1) {
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
      id: selectedProduct.name,
      quantity: quantity,
      name: selectedProduct.name,
      image: selectedProduct.image,
      model: selectedModel?.code ? selectedModel.code : 'Standard'
    };
    if(quantity < 1 ) {
      item.quantity = 1;
    }
    // Add to Cart Logic todo
    this.cartService.addItem(item);
    this.openSuccessAlert();
    // quantity leeren
    this.quantity = 1;
  }
  
  handlePopState = (event: PopStateEvent): void => {
    if (this.selectedProduct) {
      this.closeModal();
    }
  };

  openSuccessAlert() {
    Swal.fire({
      toast: true,
      position: 'center',
      icon: 'success',
      title: 'Zum Warenkorb hinzugefügt!',
      showConfirmButton: false,
      timer: 1500,
      background: '#f5f5f5',
    });
  }

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

  getFirstValue(obj: any): any {
    return obj[Object.keys(obj)[0]];
  }

  getVideoUrl(productName: string): string {
    const videoMap: { [key: string]: string } = {
      'S-485 Laser Screed': 'https://www.youtube.com/embed/your-video-id-1',
      'S-22EZ Laser Screed': 'https://www.youtube.com/embed/your-video-id-2',
      'CopperHead XD 3.0': 'https://www.youtube.com/embed/your-video-id-3',
      'S-158C Laser Screed': 'https://www.youtube.com/embed/your-video-id-4',
      'Mini Screed C': 'https://www.youtube.com/embed/your-video-id-5',
      'S-10A Laser Screed': 'https://www.youtube.com/embed/your-video-id-6'
    };
    return videoMap[productName] || '';
  }

  get uniqueCategories(): string[] {
    const categories = this.brandProducts.map(p => p.category);
    return Array.from(new Set(categories));
  }

  getCategoryImage(category: string): string {
    const categoryMap: { [key: string]: string } = {
      'Beton': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'Fugenschneider': 'https://www.barikell.it/wp-content/uploads/2019/05/3543-HEF-ASPHALT-mini-019-700x582.jpg',
      'Aufsitzglätter': 'https://www.barikell.it/wp-content/uploads/2019/05/OL-120HCS.jpg',
      'Handglätter': 'https://www.barikell.it/wp-content/uploads/2019/05/3005-GB-MOSKITO-700x549.jpg',
      'Randpolierer': 'https://www.barikell.it/wp-content/uploads/2025/02/3004-POLISHING-mini-010-700x629.jpg',
      'Einstreuwagen': 'https://www.barikell.it/wp-content/uploads/2019/05/3405-SPOLVERINA-BR150-700x786.jpg',
      'Abziehpatsche und Betoninnenrüttler': 'https://www.barikell.it/wp-content/uploads/2019/05/4489-STAGGIA-UN-MANICO-700x716.jpg',
      'Motoren': 'https://www.barikell.it/wp-content/uploads/2025/02/4414-MOTORE-BS-23-HP-mini-055.jpg',
      'Vebrauchsmaterial': 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'Kellen': 'https://www.barikell.it/wp-content/uploads/2019/05/5702-CAZZUOLA-MANICO-LEGNO-700x257.jpg',
      'Konstruktionsverbindungen': 'https://www.barikell.it/wp-content/uploads/2019/05/giuntibarotti.jpg',
      'Marshalltown': 'https://www.barikell.it/wp-content/uploads/2019/05/MT13977-mini-027-700x443.jpg',
      'Ketten Schellen und Scheiben': 'https://www.barikell.it/wp-content/uploads/2019/05/4165-FRATTAZZO-120-SX-mini-052-700x347.jpg',
      'Diamantscheiben': 'https://www.barikell.it/wp-content/uploads/2019/05/DISCO-DIAMANTATO.jpg',
      'Verbrauchsmaterialmaterialhülle': 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'Zubehör': 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'Zubehör Barikell': 'https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'Zubehör für Doppel': 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'Zubehör für Singel': 'https://images.unsplash.com/photo-1581093057305-3ecb60a72147?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    };
    return categoryMap[category] || 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'; // Fallback-Bild
  }

  get filteredProducts() {
    if (!this.selectedCategory) return this.brandProducts;
    return this.brandProducts.filter(p => p.category === this.selectedCategory);
  }
  
  selectCategory(category: string) {
    this.selectedCategory = category;
    window.scrollTo(0, 0);
  }

  goBack() {
    this.selectedCategory = '';
    window.scrollTo(0, 0);
  }

  goBackToHome() {
    this.router.navigate(['/']);
  }

  openImagePreview(imageUrl: string) {
    this.previewImage = imageUrl;
  }

  closeImagePreview() {
    this.previewImage = null;
  }
}
