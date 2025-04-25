import { Component, inject } from '@angular/core';
import { KontaktService, Post } from '../services/kontakt.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-formular',
  imports: [FormsModule],
  templateUrl: './contact-formular.component.html',
  styleUrl: './contact-formular.component.scss'
})
export class ContactFormularComponent {
  private kontaktService = inject(KontaktService);
  name = '';
  email = '';
  subject = '';
  message = '';


  sendEmail() {
    this.kontaktService.createPost({name: this.name, email: this.email, subject: this.subject, message: this.message}).subscribe({
      next: () => {
        this.openSuccessAlert();
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';

      },
      error: (err) => {
        this.openErrorAlert();
      },
    });
  }

  openSuccessAlert() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Anfrage erfolgreich abgesendet!',
      showConfirmButton: false,
      timer: 3000,
      background: '#f5f5f5',
    });
  }

  openErrorAlert() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Es ist ein Fehler aufgetreten',
      showConfirmButton: false,
      timer: 3000,
      background: '#f5f5f5',
    });
  }

}
