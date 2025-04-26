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
      <img [src]="image" [alt]="'Slide'">
    </div>
  </div>
</div>

  `,
styles: [`
  :host {
  display: block;
  background: white;
  padding: 90px 15px; /* Bootstrap-like Padding */
}

.slider-container {
  margin: 0 auto;
  max-width: 1000px; /* schön breit */
}

.slider {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 Spalten standard */
  gap: 24px;
  justify-content: center;
}

.slide {
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.slide:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
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