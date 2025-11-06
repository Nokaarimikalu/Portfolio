import { Component, OnInit } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import { RouterModule } from '@angular/router';
import { ProjectService, Project } from '../../shared/services/project.service';
import { ScrollMemoryService } from '../../shared/services/scroll-memory.service';

@Component({
    selector: 'app-my-projects',
    imports: [TranslatePipe, RouterModule],
    templateUrl: './my-projects.component.html',
    styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent implements OnInit {
    myProjects: Project[] = [];

    constructor(
        private projectService: ProjectService,
        private scrollMemoryService: ScrollMemoryService
    ) {}

    ngOnInit(): void {
        this.myProjects = this.projectService.getAllProjects();
    }

    onProjectClick(): void {
        this.scrollMemoryService.saveScrollPosition('/');
    }
}
