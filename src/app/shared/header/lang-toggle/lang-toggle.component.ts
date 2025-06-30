import { Component } from '@angular/core';

@Component({
    selector: 'app-lang-toggle',
    imports: [],
    templateUrl: './lang-toggle.component.html',
    styleUrl: './lang-toggle.component.scss',
})
export class LangToggleComponent {
    isDeActive = false;

    toggleLanguage() {
        if (this.isDeActive) {
            this.isDeActive = false;
        } else {
            this.isDeActive = true;
        }
    }
    toggleDE() {
        if (!this.isDeActive) {
            this.isDeActive = true;
        } else {
            return;
        }
    }
    toggleEN() {
        if (this.isDeActive) {
            this.isDeActive = false;
        } else {
            return;
        }
    }
}
