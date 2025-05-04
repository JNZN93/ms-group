import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  manufactors = [
    {
      brand: "Somero",
      products: [
        {
          "url": "https://www.somero.com/products/s-485-laser-screed/",
          "image": "images/hersteller/somero/somero1.jpg",
          "name": "S-485 Laser Screed",
          "description_items": {
            "key1": "Honda GX390 engine",
            "key2": "90cm rotor diameter, 4 blades",
            "key3": "150 RPM output speed, 13 HP power",
            "key4": "Manual start, Gasoline fuel type, 120 kg weight"
          }
        },
        {
          "url": "https://www.somero.com/products/s-22ez-laser-screed/",
          "image": "images/hersteller/somero/somero2.jpg",
          "name": "S-22EZ Laser Screed",
          "description_items": {
            "key1": "Kubota D1105 engine",
            "key2": "120cm rotor diameter, 5 blades",
            "key3": "130 RPM output speed, 24.8 HP power",
            "key4": "Electric start, Diesel fuel type, 1450 kg weight"
          }
        },
        {
          "url": "https://www.somero.com/products/copperhead-xd-3-0/",
          "image": "images/hersteller/somero/somero3.jpg",
          "name": "CopperHead XD 3.0",
          "description_items": {
            "key1": "Honda GX390 engine",
            "key2": "80cm rotor diameter, 4 blades",
            "key3": "140 RPM output speed, 13 HP power",
            "key4": "Manual start, Gasoline fuel type, 100 kg weight"
          }
        },
        {
          "url": "https://www.somero.com/products/s-158c-laser-screed/",
          "image": "images/hersteller/somero/somero4.jpg",
          "name": "S-158C Laser Screed",
          "description_items": {
            "key1": "Kubota D902 engine",
            "key2": "105cm rotor diameter, 5 blades",
            "key3": "135 RPM output speed, 22 HP power",
            "key4": "Electric start, Diesel fuel type, 1300 kg weight"
          }
        },
        {
          "url": "https://www.somero.com/products/mini-screed-c/",
          "image": "images/hersteller/somero/somero5.jpg",
          "name": "Mini Screed C",
          "description_items": {
            "key1": "Honda GX390 engine",
            "key2": "85cm rotor diameter, 4 blades",
            "key3": "150 RPM output speed, 13 HP power",
            "key4": "Manual start, Gasoline fuel type, 110 kg weight"
          }
        },
        {
          "url": "https://www.somero.com/products/s-10a-laser-screed/",
          "image": "images/hersteller/somero/somero2.jpg",
          "name": "S-10A Laser Screed",
          "description_items": {
            "key1": "Kubota D1105 engine",
            "key2": "100cm rotor diameter, 5 blades",
            "key3": "145 RPM output speed, 25 HP power",
            "key4": "Electric start, Diesel fuel type, 1400 kg weight"
          }
        }
      ]
    },
    {
      brand: "Barikell",
      products: [
        {
          "url": "https://www.barikell.it/prodotto/bt900-ride-on-trowel/",
          "image": "images/hersteller/barikell/barikell1.jpg",
          "name": "BT900 Ride-On Trowel",
          "description_items": {
            "key1": "Honda GX690 engine",
            "key2": "100cm rotor diameter, 4 blades",
            "key3": "140 RPM output speed, 22 HP power",
            "key4": "Electric start, Gasoline fuel type, 330 kg weight"
          }
        },
        {
          "url": "https://www.barikell.it/prodotto/bt1200-twin-rotor/",
          "image": "images/hersteller/barikell/barikell2.jpg",
          "name": "BT1200 Twin Rotor",
          "description_items": {
            "key1": "Kohler Diesel engine",
            "key2": "120cm rotor diameter, 5 blades",
            "key3": "135 RPM output speed, 25 HP power",
            "key4": "Electric start, Diesel fuel type, 370 kg weight"
          }
        },
        {
          "url": "https://www.barikell.it/prodotto/bt75-walk-behind/",
          "image": "images/hersteller/barikell/barikell3.jpg",
          "name": "BT75 Walk-Behind",
          "description_items": {
            "key1": "Honda GX270 engine",
            "key2": "75cm rotor diameter, 4 blades",
            "key3": "140 RPM output speed, 9 HP power",
            "key4": "Manual start, Gasoline fuel type, 95 kg weight"
          }
        },
        {
          "url": "https://www.barikell.it/prodotto/bt60-walk-behind/",
          "image": "images/hersteller/barikell/barikell4.jpg",
          "name": "BT60 Walk-Behind",
          "description_items": {
            "key1": "Honda GX200 engine",
            "key2": "60cm rotor diameter, 4 blades",
            "key3": "135 RPM output speed, 6.5 HP power",
            "key4": "Manual start, Gasoline fuel type, 80 kg weight"
          }
        },
        {
          "url": "https://www.barikell.it/prodotto/bt100-dual-trowel/",
          "image": "images/hersteller/barikell/barikell1.jpg",
          "name": "BT100 Dual Trowel",
          "description_items": {
            "key1": "Kohler CH730 engine",
            "key2": "100cm rotor diameter, 5 blades",
            "key3": "150 RPM output speed, 23 HP power",
            "key4": "Electric start, Gasoline fuel type, 360 kg weight"
          }
        },
        {
          "url": "https://www.barikell.it/prodotto/bt-compact-ride-on/",
          "image": "images/hersteller/barikell/barikell2.jpg",
          "name": "BT Compact Ride-On",
          "description_items": {
            "key1": "Honda GX390 engine",
            "key2": "90cm rotor diameter, 4 blades",
            "key3": "140 RPM output speed, 13 HP power",
            "key4": "Manual start, Gasoline fuel type, 280 kg weight"
          }
        }
      ]
    },
    {
      brand: "Husqvarna",
      products: [
        {
          "url": "https://www.husqvarna.com/products/ride-on-trowels/crt36/",
          "image": "images/hersteller/husqvarna/husqvarna1.webp",
          "name": "CRT36 Ride-On Trowel",
          "description_items": {
            "key1": "Honda GX690 engine",
            "key2": "92cm rotor diameter, 5 blades",
            "key3": "160 RPM output speed, 22 HP power",
            "key4": "Electric start, Gasoline fuel type, 315 kg weight"
          }
        },
        {
          "url": "https://www.husqvarna.com/products/power-trowels/crt48/",
          "image": "images/hersteller/husqvarna/husqvarna2.webp",
          "name": "CRT48 Power Trowel",
          "description_items": {
            "key1": "Kohler Diesel 7500 engine",
            "key2": "120cm rotor diameter, 6 blades",
            "key3": "140 RPM output speed, 25 HP power",
            "key4": "Electric start, Diesel fuel type, 400 kg weight"
          }
        },
        {
          "url": "https://www.husqvarna.com/products/walk-behind-trowels/ct48/",
          "image": "images/hersteller/husqvarna/husqvarna3.webp",
          "name": "CT48 Walk-Behind",
          "description_items": {
            "key1": "Honda GX390 engine",
            "key2": "122cm rotor diameter, 4 blades",
            "key3": "135 RPM output speed, 13 HP power",
            "key4": "Manual start, Gasoline fuel type, 115 kg weight"
          }
        },
        {
          "url": "https://www.husqvarna.com/products/walk-behind-trowels/ct36/",
          "image": "images/hersteller/husqvarna/husqvarna2.webp",
          "name": "CT36 Walk-Behind",
          "description_items": {
            "key1": "Honda GX270 engine",
            "key2": "90cm rotor diameter, 4 blades",
            "key3": "140 RPM output speed, 9 HP power",
            "key4": "Manual start, Gasoline fuel type, 95 kg weight"
          }
        }
      ]
    }
  ];

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  private loadTranslations() {
    this.translate.get('manufacturers').subscribe(translations => {
      this.manufactors.forEach(manufacturer => {
        const brandTranslations = translations[manufacturer.brand];
        if (brandTranslations) {
          manufacturer.products.forEach(product => {
            const productTranslations = brandTranslations.products[product.name];
            if (productTranslations) {
              product.name = productTranslations.name;
              if (productTranslations.description_items) {
                product.description_items = {
                  key1: productTranslations.description_items.key1,
                  key2: productTranslations.description_items.key2,
                  key3: productTranslations.description_items.key3,
                  key4: productTranslations.description_items.key4
                };
              }
            }
          });
        }
      });
    });
  }

  // Method to reload translations when language changes
  reloadTranslations() {
    this.loadTranslations();
  }
}
