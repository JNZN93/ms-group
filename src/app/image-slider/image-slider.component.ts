// image-slider.component.ts
import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  url: string;
  alt: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="slider-container">
      <div class="slider">
        <div class="slide" *ngFor="let slide of slides">
          <div class="image-wrapper">
            <img [src]="slide.url" [alt]="slide.alt" (click)="openPreview(slide)">
          </div>
          <div class="content">
            <h3 class="title">{{ slide.title }}</h3>
            <p class="description">{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    @if (activeSlide) {
      <div class="preview-overlay" (click)="closePreview()">
        <button class="close-btn" (click)="closePreview()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <img [src]="activeSlide.url" [alt]="activeSlide.alt" class="preview-image" (click)="$event.stopPropagation()">
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
      padding: 60px 20px;
      background-color: #f9f9f9;
    }

    .slider-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .slider {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 10px;
    }

    .slide {
      background: white;
      border-radius: 2px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;

      &:hover {
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
      }
    }

    .image-wrapper {
      position: relative;
      width: 100%;
      height: 350px;
      aspect-ratio: 4/3; /* Beliebiges Seitenverhältnis (z.B. 1/1 für quadratisch) */
      overflow: hidden;
      cursor: zoom-in;
    }

    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }


    .content {
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .title {
      font-size: 1.1rem;
      font-weight: 500;
      color: #333;
      margin-bottom: 8px;
      line-height: 1.3;
    }

    .description {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.5;
      margin: 0;
    }

    /* Preview Modal Styles */
    .preview-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease;
      cursor: pointer;
    }

    .close-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0,0,0,0.5);
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transition: all 0.2s ease;

      svg {
        fill: white;
        width: 20px;
        height: 20px;
      }

      &:hover {
        background: rgba(0,0,0,0.7);
      }
    }

    .preview-image {
      max-width: 90%;
      max-height: 90vh;
      object-fit: contain;
      cursor: default;
    }

    /* Animations */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0.9; }
      to { transform: translateY(0); opacity: 1; }
    }

    /* Responsive */
    @media (max-width: 768px) {
      .slider {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      }

      .preview-content {
        width: 95%;
      }
    }

    @media (max-width: 480px) {
      :host {
        padding: 40px 15px;
      }

      .slider {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .preview-text {
        padding: 15px;
      }

      .preview-title {
        font-size: 1.3rem;
      }
    }
  `]
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: Slide[] = [
    {
      url: 'images/team-image1.jpg',
      alt: 'Team meeting',
      title: 'Team Collaboration',
      description: 'Our team working together on innovative solutions in our modern office space.'
    },
    {
      url: 'images/team-image2.jpg',
      alt: 'Product workshop',
      title: 'Product Development',
      description: 'Brainstorming session for our latest product features and improvements.'
    },
    {
      url: 'images/team-image3.jpg',
      alt: 'Client presentation',
      title: 'Client Engagement',
      description: 'Presenting our solutions to valued clients in a collaborative environment.'
    },
    {
      url: 'images/team-image4.jpg',
      alt: 'Office environment',
      title: 'Work Environment',
      description: 'Our spacious and creative workspace designed for productivity and comfort.'
    }
  ];

  activeSlide: Slide | null = null;

  ngOnInit() {}

  openPreview(slide: Slide) {
    this.activeSlide = slide;
    document.body.style.overflow = 'hidden';
  }

  closePreview() {
    this.activeSlide = null;
    document.body.style.overflow = '';
  }
}