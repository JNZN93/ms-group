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
        <div class="slide" *ngFor="let image of images; let i = index" [class.active]="currentIndex() === i">
          <img [src]="image" [alt]="'Slide ' + (i + 1)">
        </div>
      </div>
      
      <button class="nav-button prev" (click)="prevSlide()">❮</button>
      <button class="nav-button next" (click)="nextSlide()">❯</button>
      
      <div class="dots">
        <span *ngFor="let image of images; let i = index" 
              [class.active]="currentIndex() === i"
              (click)="goToSlide(i)"></span>
      </div>
    </div>
  `,
styles: [`
  :host {
    display: block;
    background: #fff; /* Hellgrauer Hintergrund */
    padding: 20px;
  }

  .slider-container {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    overflow: hidden;
    height: 400px;
    border-radius: 24px;
  }
  
  .slider-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  .slide.active {
    opacity: 1;
  }
  
  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
    z-index: 10;
  }
  
  .prev {
    left: 10px;
  }
  
  .next {
    right: 10px;
  }
  
  .dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 10;
  }
  
  .dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    cursor: pointer;
  }
  
  .dots span.active {
    background: white;
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