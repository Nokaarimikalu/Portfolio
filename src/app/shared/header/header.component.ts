import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LangToggleComponent } from './lang-toggle/lang-toggle.component';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
    selector: 'app-header',
    imports: [NavbarComponent, LangToggleComponent, SocialMediaComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {

    menuOpen = false;

    ngOnInit() {
        this.checkScreenSize();
    }

    ngOnDestroy() {
        // Cleanup wenn nötig
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.checkScreenSize();
    }

    private checkScreenSize() {
        if (window.innerWidth >= 700 && this.menuOpen) {
            this.menuOpen = false;
        }
    }

    toggleMenu() {
        if (this.menuOpen) {
            this.menuOpen = false;
        } else {
            this.menuOpen = true;
        }
    }

    closeMenu() {
        this.menuOpen = false;
    }
}
