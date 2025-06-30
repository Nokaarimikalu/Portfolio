import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LangToggleComponent } from './lang-toggle/lang-toggle.component';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
    selector: 'app-header',
    imports: [NavbarComponent, LangToggleComponent, SocialMediaComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {

    menuOpen = false;


    toggleMenu() {
        if (this.menuOpen) {
            this.menuOpen = false;
        } else {
            this.menuOpen = true;
        }
    }
}
