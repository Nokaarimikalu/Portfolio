import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollMemoryService } from '../services/scroll-memory.service';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, FormsModule, RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

    mailTest = true;
    http = inject(HttpClient);

    constructor(private scrollMemoryService: ScrollMemoryService, private translate: TranslateService) {
        this.loadFormData();
    }

    contactData = {
      name: '',
      email:'',
      message:'',
    };

  // post = {
  //   endPoint: 'http://localhost/portfolio/sendMail.php',
  //   body: (payload: any) => JSON.stringify(payload),
  //   options: {
  //     headers: { 'Content-Type': 'application/json' }
  //   },
  // };

  // Für Live-Betrieb:
  post = {
    endPoint: 'https://pascalfliedner.de/portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: { 'Content-Type': 'application/json' }
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.clearFormData();
            this.contactData = { name: '', email: '', message: '' };
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.clearFormData();
      this.contactData = { name: '', email: '', message: '' };
    }
  }

  onLegalClick(): void {
    this.scrollMemoryService.saveCurrentScrollPosition();
  }

  onPolicyClick(): void {
    this.scrollMemoryService.saveCurrentScrollPosition();
  }

  private loadFormData(): void {
    try {
      const savedData = localStorage.getItem('portfolio-contact-form');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        this.contactData = {
          name: parsedData.name || '',
          email: parsedData.email || '',
          message: parsedData.message || ''
        };
      }
    } catch (error) {
      console.error('Error loading form data from localStorage:', error);
    }
  }

  private saveFormData(): void {
    try {
      localStorage.setItem('portfolio-contact-form', JSON.stringify(this.contactData));
    } catch (error) {
      console.error('Error saving form data to localStorage:', error);
    }
  }

  private clearFormData(): void {
    try {
      localStorage.removeItem('portfolio-contact-form');
    } catch (error) {
      console.error('Error clearing form data from localStorage:', error);
    }
  }

  onInputChange(): void {
    this.saveFormData();
  }

  getEmailTooltip(emailField: any): string {
    if (emailField.valid) {
      return this.translate.instant('contactMe.form.validation.email.valid');
    }
    
    if (emailField.errors?.['required']) {
      return this.translate.instant('contactMe.form.validation.email.required');
    }
    
    if (emailField.errors?.['email'] || emailField.errors?.['pattern']) {
      return this.translate.instant('contactMe.form.validation.email.invalid');
    }
    
    return this.translate.instant('contactMe.form.validation.email.invalid');
  }

  getNameTooltip(nameField: any): string {
    if (nameField.valid) {
      return this.translate.instant('contactMe.form.validation.name.valid');
    } else {
      return this.translate.instant('contactMe.form.validation.name.required');
    }
  }

  getMessageTooltip(messageField: any): string {
    if (messageField.valid) {
      return this.translate.instant('contactMe.form.validation.message.valid');
    } else {
      return this.translate.instant('contactMe.form.validation.message.required');
    }
  }
}
