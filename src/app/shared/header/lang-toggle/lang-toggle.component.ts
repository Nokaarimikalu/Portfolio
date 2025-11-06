import { Component, OnInit } from '@angular/core';
import { TranslateDirective, TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-lang-toggle',
    imports: [],
    templateUrl: './lang-toggle.component.html',
    styleUrl: './lang-toggle.component.scss',
})
export class LangToggleComponent implements OnInit {
    isDeActive = false;
    
    constructor(private translate: TranslateService) {}

    ngOnInit(): void {
        this.loadSavedLanguage();
    }

    private loadSavedLanguage(): void {
        try {
            const savedLanguage = localStorage.getItem('portfolio-language');
            if (savedLanguage) {
                this.setLanguage(savedLanguage);
            } else {
                this.setLanguage('de');
            }
        } catch (error) {
            console.error('Error loading language from localStorage:', error);
            this.setLanguage('de');
        }
    }

    private saveLanguage(language: string): void {
        try {
            localStorage.setItem('portfolio-language', language);
        } catch (error) {
            console.error('Error saving language to localStorage:', error);
        }
    }

    private setLanguage(language: string): void {
        this.translate.use(language);
        this.isDeActive = language === 'de';
    }
    toggleLanguage() {
        const newLanguage = this.isDeActive ? 'en' : 'de';
        this.setLanguage(newLanguage);
        this.saveLanguage(newLanguage);
    }

    toggleDE(language: string) {
        this.setLanguage(language);
        this.saveLanguage(language);
    }

    toggleEN(language: string) {
        this.setLanguage(language);
        this.saveLanguage(language);
    }
}
