import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-schweisstechnik',
  imports: [RouterModule],
  templateUrl: './schweisstechnik.component.html',
  styleUrl: './schweisstechnik.component.scss'
})
export class SchweisstechnikComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
