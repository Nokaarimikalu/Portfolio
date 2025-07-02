import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { CommentsComponent } from './comments/comments.component';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
    selector: 'app-main-page',
    imports: [ HeroComponent, AboutMeComponent, SkillSetComponent, MyProjectsComponent, CommentsComponent, FooterComponent],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
