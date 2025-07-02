import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import { RouterModule } from '@angular/router';

interface Project {
    url: string;
    title: string;
    text: string;
}

@Component({
    selector: 'app-my-projects',
    imports: [TranslatePipe, RouterModule],
    templateUrl: './my-projects.component.html',
    styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent {
    myProjects: Project[] = [
        {
            url: 'assets/image/myprojects/join.png',
            title: 'myProjects.join.title',
            text: 'myProjects.join.text',
        },
        {
            url: 'assets/image/myprojects/pepe.png',
            title: 'myProjects.elPollo.title',
            text: 'myProjects.elPollo.text',
        },
        {
            url: 'assets/image/myprojects/pokedex.png',
            title: 'myProjects.pokedex.title',
            text: 'myProjects.pokedex.text',
        },
    ];
}
