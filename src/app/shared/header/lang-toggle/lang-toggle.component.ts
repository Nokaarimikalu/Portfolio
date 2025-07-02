import { Component } from '@angular/core';
import { TranslateDirective, TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-lang-toggle',
    imports: [],
    templateUrl: './lang-toggle.component.html',
    styleUrl: './lang-toggle.component.scss',
})
export class LangToggleComponent {
    isDeActive = false;
    constructor(private translate: TranslateService){
    }
    toggleLanguage() {
        if (this.isDeActive) {
            this.isDeActive = false;
        } else {
            this.isDeActive = true;
        }
    }
    toggleDE(language: string) {
        this.translate.use(language)
        if (!this.isDeActive) {
            this.isDeActive = true;
        } else {
            return;
        }
    }
    toggleEN(language: string) {
        this.translate.use(language)
        if (this.isDeActive) {
            this.isDeActive = false;
        } else {
            return;
        }
    }
}
