import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {



    frontend = ["F","r","o","n","t","e","n","d"]
    developer = ["D","E","V","E","L","O","P","E","R"]

}
