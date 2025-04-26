import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
