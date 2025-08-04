import { Component, Output, EventEmitter } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() closeMenu = new EventEmitter<void>();

  onLinkClick() {
    this.closeMenu.emit();
  }
}
