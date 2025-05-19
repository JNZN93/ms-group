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
      //Barikell DEUTSCH
      'Fugenschneider': 'https://www.barikell.it/wp-content/uploads/2019/05/3543-HEF-ASPHALT-mini-019-700x582.jpg',
      'Aufsitzglätter': 'https://www.barikell.it/wp-content/uploads/2019/05/OL-120HCS.jpg',
      'Handglätter': 'https://www.barikell.it/wp-content/uploads/2019/05/3005-GB-MOSKITO-700x549.jpg',
      'Randpolierer': 'https://www.barikell.it/wp-content/uploads/2025/02/3004-POLISHING-mini-010-700x629.jpg',
      'Einstreuwagen': 'https://www.barikell.it/wp-content/uploads/2019/05/3405-SPOLVERINA-BR150-700x786.jpg',
      'Abziehpatsche und Betoninnenrüttler': 'https://www.barikell.it/wp-content/uploads/2019/05/4489-STAGGIA-UN-MANICO-700x716.jpg',
      'Motoren': 'https://www.barikell.it/wp-content/uploads/2025/02/4414-MOTORE-BS-23-HP-mini-055.jpg',
      'Kellen': 'https://www.barikell.it/wp-content/uploads/2019/05/5702-CAZZUOLA-MANICO-LEGNO-700x257.jpg',
      'Konstruktionsverbindungen': 'https://www.barikell.it/wp-content/uploads/2019/05/giuntibarotti.jpg',
      'Marshalltown': 'https://www.barikell.it/wp-content/uploads/2019/05/MT13977-mini-027-700x443.jpg',
      'Ketten Schellen und Scheiben': 'https://www.barikell.it/wp-content/uploads/2019/05/4165-FRATTAZZO-120-SX-mini-052-700x347.jpg',
      'Diamantscheiben': 'https://www.barikell.it/wp-content/uploads/2019/05/DISCO-DIAMANTATO.jpg',
      'Verbrauchsmaterialhülle': 'https://www.barikell.it/wp-content/uploads/2019/05/3662-GUAINA-NERA-35-SOPRA-700x630.jpg',
      'Zubehör Barikell': 'https://www.barikell.it/wp-content/uploads/2019/05/5300-TRACCIARIGHE-50-MT-700x486.jpg',
      'Zubehör für Aufsitzglätter': 'https://www.barikell.it/wp-content/uploads/2019/05/3316Y_15-TORQUE-CONV-mini-041-700x467.jpg',
      'Zubehör für Handglätter': 'https://www.barikell.it/wp-content/uploads/2019/05/cerchioapribile-700x525.jpg',
      //Barikell ENGLISH
      "Joint cutter": "https://www.barikell.it/wp-content/uploads/2019/05/3543-HEF-ASPHALT-mini-019-700x582.jpg",
      "Ride-on trowel": "https://www.barikell.it/wp-content/uploads/2019/05/OL-120HCS.jpg",
      "Hand trowel": "https://www.barikell.it/wp-content/uploads/2019/05/3005-GB-MOSKITO-700x549.jpg",
      "Edge polisher": "https://www.barikell.it/wp-content/uploads/2025/02/3004-POLISHING-mini-010-700x629.jpg",
      "Spreader cart": "https://www.barikell.it/wp-content/uploads/2019/05/3405-SPOLVERINA-BR150-700x786.jpg",
      "Screed and concrete vibrator": "https://www.barikell.it/wp-content/uploads/2019/05/4489-STAGGIA-UN-MANICO-700x716.jpg",
      "Engines": "https://www.barikell.it/wp-content/uploads/2025/02/4414-MOTORE-BS-23-HP-mini-055.jpg",
      "Trowels": "https://www.barikell.it/wp-content/uploads/2019/05/5702-CAZZUOLA-MANICO-LEGNO-700x257.jpg",
      "Construction joints": "https://www.barikell.it/wp-content/uploads/2019/05/giuntibarotti.jpg",
      "Chains, clamps, and discs": "https://www.barikell.it/wp-content/uploads/2019/05/4165-FRATTAZZO-120-SX-mini-052-700x347.jpg",
      "Diamond blades": "https://www.barikell.it/wp-content/uploads/2019/05/DISCO-DIAMANTATO.jpg",
      "Consumable material sleeve": "https://www.barikell.it/wp-content/uploads/2019/05/3662-GUAINA-NERA-35-SOPRA-700x630.jpg",
      "Barikell accessories": "https://www.barikell.it/wp-content/uploads/2019/05/5300-TRACCIARIGHE-50-MT-700x486.jpg",
      "Ride-on trowel accessories": "https://www.barikell.it/wp-content/uploads/2019/05/3316Y_15-TORQUE-CONV-mini-041-700x467.jpg",
      "Hand trowel accessories": "https://www.barikell.it/wp-content/uploads/2019/05/cerchioapribile-700x525.jpg",
      //Somero DEUTSCH
      "Aufsitz Laser Bohle": "https://www.somero.com/wp-content/uploads/2024/07/products_photo_S940.jpg",
      "Ausleger Laser Estriche": "https://www.somero.com/wp-content/uploads/2025/01/Sky_Strip_1.jpg",
      "Kompaktauslegerbohlen": "https://www.somero.com/wp-content/uploads/2025/04/SRS-4e_0001.png",
      "Leichtestriche": "https://www.somero.com/wp-content/uploads/2024/07/1-Copperhead0005-2.jpg",
      "Materialplatzierung": "https://www.somero.com/wp-content/uploads/2024/07/products_photo_LineDragon.jpg",
      "Softwarepakete": "https://www.somero.com/wp-content/uploads/2024/07/siteshape1.jpg",
      "Stationäre Laser Estriche": "https://www.somero.com/wp-content/uploads/2025/01/Sky_Strip_1.jpg",
      // Somero ENGLISH
      "boom-laser-screeds": "https://www.somero.com/wp-content/uploads/2024/07/sps50_34view.jpg",
      "compact-boom-screeds": "https://www.somero.com/wp-content/uploads/2025/04/SRS-4e_0001.png",
      "lightweight-screeds": "https://www.somero.com/wp-content/uploads/2024/07/1-Copperhead0005-2.jpg",
      "materials-placement": "https://www.somero.com/wp-content/uploads/2024/07/broomcurehyrid.jpg",
      "ride-on-laser-screeds": "https://www.somero.com/wp-content/uploads/2024/07/5-158-C_0000-1.jpg",
      "software-packages": "https://www.somero.com/wp-content/uploads/2024/07/siteshape1.jpg",
      "stationary-laser-screeds": "https://www.somero.com/wp-content/uploads/2025/01/Sky_Strip_1.jpg",
      // Spectra DEUTSCH
      "Digitalanzeige Empfänger": "https://static.wixstatic.com/media/cd4160_7e479f73ddfe44979ead69101f54936e~mv2.png/v1/fill/w_311,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HL450.png",
      "Dual Grade Laser": "https://static.wixstatic.com/media/cd4160_518ad8b3f3194bd1af30f1e8ae564401~mv2.png/v1/fill/w_438,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL1425C%20copy%203.png",
      "Empfänger für Erdarbeiten": "https://static.wixstatic.com/media/cd4160_ee92ad3dfe0341668eaa12e413183030~mv2.png/v1/crop/x_813,y_175,w_917,h_2063/fill/w_220,h_495,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LR60%20No%20Shadow.png",
      "Grading Empfänger": "https://static.wixstatic.com/media/cd4160_5b291b38b91f4883b5d3515938d9b5be~mv2.png/v1/fill/w_600,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/double-vision.png",
      "Horizontal- und Vertikallaser": "https://static.wixstatic.com/media/cd4160_cc0ad0af788443578ecf6b2d27f00da9~mv2.png/v1/crop/x_0,y_317,w_2500,h_1913/fill/w_497,h_382,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HV101.png",
      "Laser Messband": "https://static.wixstatic.com/media/cd4160_c32cfe9799384f819d0c5c7095d11841~mv2.png/v1/fill/w_269,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/M402.png",
      "Linienlaser": "https://static.wixstatic.com/media/cd4160_f67aca96d9f4473cbda6060058d9dbdf~mv2.png/v1/crop/x_325,y_333,w_1883,h_2013/fill/w_371,h_397,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IT58G.png",
      "Rohrlaser": "https://static.wixstatic.com/media/cd4160_319da9f0b07c4fbb896a3059f5463b2f~mv2.png/v1/fill/w_476,h_481,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DG613G.png",
      "Rotationslaser": "https://static.wixstatic.com/media/cd4160_56ec743f28f843ecb80b5f06846e724a~mv2.png/v1/crop/x_404,y_0,w_1729,h_2500/fill/w_362,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LL500.png",
      "Single Grade Laser": "https://static.wixstatic.com/media/bd8f3e_1fd9639eaa1c4aefa9c68817f054e95c~mv2.png/v1/crop/x_480,y_354,w_2484,h_3000/fill/w_414,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL612N%20Grade%20Laser.png",
      "Sonstiges": "https://static.wixstatic.com/media/cd4160_398439b836754b6b93ad6dbf270693e0~mv2.png/v1/crop/x_750,y_83,w_1075,h_2154/fill/w_134,h_267,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RC803.png",
      "Standard Empfänger": "https://static.wixstatic.com/media/cd4160_701cf328e02b461b88431322f52c553e~mv2.png/v1/crop/x_300,y_206,w_1000,h_2314/fill/w_194,h_446,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HR150.png",
      "Universallaser": "https://static.wixstatic.com/media/bd8f3e_2ae90cd936cb46b4b6c4b05f68c27506~mv2.png/v1/crop/x_396,y_366,w_2676,h_2904/fill/w_412,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UL633N%20Grade%20Laser.png",
      // Spectra ENGLISH
      "Digital display receivers": "https://static.wixstatic.com/media/cd4160_7e479f73ddfe44979ead69101f54936e~mv2.png/v1/fill/w_311,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HL450.png",
      "Dual grade laser": "https://static.wixstatic.com/media/cd4160_518ad8b3f3194bd1af30f1e8ae564401~mv2.png/v1/fill/w_438,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL1425C%20copy%203.png",
      "Excavating receivers": "https://static.wixstatic.com/media/cd4160_ee92ad3dfe0341668eaa12e413183030~mv2.png/v1/crop/x_813,y_175,w_917,h_2063/fill/w_220,h_495,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LR60%20No%20Shadow.png",
      "Grading receivers": "https://static.wixstatic.com/media/cd4160_5b291b38b91f4883b5d3515938d9b5be~mv2.png/v1/fill/w_600,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/double-vision.png",
      "Horizontal and vertical laser": "https://static.wixstatic.com/media/cd4160_cc0ad0af788443578ecf6b2d27f00da9~mv2.png/v1/crop/x_0,y_317,w_2500,h_1913/fill/w_497,h_382,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HV101.png",
      "Lasert tape measure": "https://static.wixstatic.com/media/cd4160_c32cfe9799384f819d0c5c7095d11841~mv2.png/v1/fill/w_269,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/M402.png",
      "Line laser": "https://static.wixstatic.com/media/cd4160_f67aca96d9f4473cbda6060058d9dbdf~mv2.png/v1/crop/x_325,y_333,w_1883,h_2013/fill/w_371,h_397,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IT58G.png",
      "Other": "https://static.wixstatic.com/media/cd4160_04bf36766c2c497296dc6273d2b4ac62~mv2.png/v1/crop/x_0,y_317,w_2500,h_1896/fill/w_600,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LL300S.png",
      "Pipe laser": "https://static.wixstatic.com/media/cd4160_319da9f0b07c4fbb896a3059f5463b2f~mv2.png/v1/fill/w_476,h_481,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DG613G.png",
      "Rotary laser level": "https://static.wixstatic.com/media/cd4160_56ec743f28f843ecb80b5f06846e724a~mv2.png/v1/crop/x_404,y_0,w_1729,h_2500/fill/w_362,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LL500.png",
      "Single grade laser": "https://static.wixstatic.com/media/bd8f3e_1fd9639eaa1c4aefa9c68817f054e95c~mv2.png/v1/crop/x_480,y_354,w_2484,h_3000/fill/w_414,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GL612N%20Grade%20Laser.png",
      "Standard receivers": "https://static.wixstatic.com/media/cd4160_701cf328e02b461b88431322f52c553e~mv2.png/v1/crop/x_300,y_206,w_1000,h_2314/fill/w_194,h_446,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HR150.png",
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
