import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactFormularComponent } from '../contact-formular/contact-formular.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-schweisstechnik',
  imports: [RouterModule, ContactFormularComponent, TranslateModule],
  templateUrl: './schweisstechnik.component.html',
  styleUrl: './schweisstechnik.component.scss'
})
export class SchweisstechnikComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
