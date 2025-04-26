import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-hero-section',
  imports: [AboutComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    const video = this.videoPlayer.nativeElement;
    video.muted = true;
    video.play().catch(err => console.warn('Autoplay failed:', err));
  }
}
