import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-hero-section',
  imports: [AboutComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoPlayer.nativeElement;
    video.muted = true;
    video.play().catch(err => console.warn('Autoplay failed:', err));
  }
}
