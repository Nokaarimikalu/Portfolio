import { Component } from '@angular/core';
import { SmallIconsComponent } from './small-icons/small-icons.component';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-skill-set',
  imports: [SmallIconsComponent, TranslatePipe],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

}
