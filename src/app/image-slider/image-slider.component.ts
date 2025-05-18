// image-slider.component.ts
import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="slider-container">
      <div class="slider">
        <div class="slide" *ngFor="let image of images">
          <img [src]="image" [alt]="'Slide'" (click)="openImagePreview(image)">
        </div>
      </div>
    </div>

    <!-- Image Preview Modal -->
    @if (previewImage) {
      <div class="image-preview-overlay" (click)="closeImagePreview()">
        <div class="image-preview-container" (click)="$event.stopPropagation()">
          <button class="close-preview" (click)="closeImagePreview()">&times;</button>
          <img [src]="previewImage" alt="Vergrößerte Ansicht" class="preview-image" (click)="closeImagePreview()">
        </div>
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
      background: white;
      padding: 90px 15px;
    }

    .slider-container {
      margin: 0 auto;
      max-width: 1200px;
      padding: 50px;
      background: rgba(233, 238, 239, 0.11);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      border-radius: 0px;
    }

    .slider {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      justify-content: center;
      align-items: center;
      place-items: center;
    }

    .slide {
      border-radius: 1px;
      width: 250px;
      height: 250px;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 10px 16px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .slide img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
      padding: 8px;
      cursor: zoom-in;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    .image-preview-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      opacity: 0;
      animation: fadeIn 0.3s ease forwards;
    }

    .image-preview-container {
      position: relative;
      max-width: 90%;
      max-height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(0.9);
      animation: zoomIn 0.3s ease forwards;
    }

    .preview-image {
      max-width: 100%;
      max-height: 90vh;
      object-fit: contain;
      cursor: zoom-out;
    }

    .close-preview {
      position: absolute;
      top: -40px;
      right: 0;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      padding: 5px 10px;
      opacity: 0.7;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes zoomIn {
      from { transform: scale(0.9); }
      to { transform: scale(1); }
    }

    /* Tablet - 2 Bilder pro Zeile */
    @media (max-width: 991px) {
      .slider {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Handy - 1 Bild pro Zeile */
    @media (max-width: 576px) {
      .slider {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ImageSliderComponent implements OnInit {
  @Input() images: string[] = ['images/team-image1.jpg', 'images/team-image2.jpg', 'images/team-image3.jpg', 'images/team-image4.jpg'];
  @Input() autoPlay = true;
  @Input() interval = 7000; // ms

  currentIndex = signal(0);
  private intervalId: any;
  previewImage: string | null = null;

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  openImagePreview(imageUrl: string) {
    this.previewImage = imageUrl;
  }

  closeImagePreview() {
    this.previewImage = null;
  }

  nextSlide() {
    this.currentIndex.update(current => 
      current === this.images.length - 1 ? 0 : current + 1
    );
    this.resetAutoPlay();
  }

  prevSlide() {
    this.currentIndex.update(current => 
      current === 0 ? this.images.length - 1 : current - 1
    );
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
    this.resetAutoPlay();
  }

  private startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  private resetAutoPlay() {
    if (this.autoPlay) {
      clearInterval(this.intervalId);
      this.startAutoPlay();
    }
  }
}