import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  onSubmit(form: NgForm) {
    // Alle Felder als "touched" markieren, damit Validierung sichtbar wird
    Object.keys(form.controls).forEach(key => {
      form.controls[key].markAsTouched();
    });
    
    if (form.valid) {
      // Form ist gültig - hier könnte die Übermittlung stattfinden
      console.log('Form submitted successfully');
    } else {
      // Form ist ungültig - die CSS-Klassen werden automatisch angewendet
      console.log('Form has validation errors');
    }
  }
}
