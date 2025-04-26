import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
