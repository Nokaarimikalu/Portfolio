import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { CommentsComponent } from './comments/comments.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ScrollMemoryService } from '../shared/services/scroll-memory.service';


@Component({
    selector: 'app-main-page',
    imports: [ HeroComponent, AboutMeComponent, SkillSetComponent, MyProjectsComponent, CommentsComponent, FooterComponent],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
    
    constructor(private scrollMemoryService: ScrollMemoryService) {}

    ngOnInit(): void {
        setTimeout(() => {
            const savedPositions = this.scrollMemoryService.getStoredPositions();
            if (savedPositions['/'] && savedPositions['/'] > 0) {
                this.scrollMemoryService.restoreScrollPosition('/');
            }
        }, 200);
    }
}
